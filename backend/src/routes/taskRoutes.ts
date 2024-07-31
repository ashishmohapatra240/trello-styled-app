import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import authMiddleware from '../middlewares/authMiddleware';
import { z } from 'zod';

const prisma = new PrismaClient();
const router = express.Router();

const taskSchema = z.object({
    title: z.string(),
    description: z.string().optional(),
    priority: z.enum(['Low', 'Medium', 'Urgent']).optional().default('Low'),
    dueDate: z.string().optional(),
    status: z.enum(['Todo', 'InProgress', 'UnderReview', 'Completed']),
});

interface AuthRequest extends Request {
    user?: {
        id: string;
    };
}

router.post('/tasks', authMiddleware, async (req: AuthRequest, res: Response) => {
    try {
        const taskData = taskSchema.parse(req.body);
        const task = await prisma.task.create({
            data: {
                ...taskData,
                priority: taskData.priority || 'Low', // Default priority if not provided
                user: {
                    connect: { id: req.user!.id },
                },
            },
        });
        res.status(201).send(task);
    } catch (error: any) {
        res.status(400).send(error.message);
    }
});

router.get('/tasks', authMiddleware, async (req: AuthRequest, res: Response) => {
    try {
        const tasks = await prisma.task.findMany({
            where: { userId: req.user!.id },
        });
        res.send(tasks);
    } catch (error: any) {
        res.status(400).send(error.message);
    }
});

router.put('/tasks/:id', authMiddleware, async (req: AuthRequest, res: Response) => {
    try {
        const taskData = taskSchema.parse(req.body);
        const task = await prisma.task.update({
            where: { id: req.params.id },
            data: taskData,
        });
        res.send(task);
    } catch (error: any) {
        res.status(400).send(error.message);
    }
});

router.delete('/tasks/:id', authMiddleware, async (req: AuthRequest, res: Response) => {
    try {
        await prisma.task.delete({
            where: { id: req.params.id },
        });
        res.status(204).send();
    } catch (error: any) {
        res.status(400).send(error.message);
    }
});

export default router;
