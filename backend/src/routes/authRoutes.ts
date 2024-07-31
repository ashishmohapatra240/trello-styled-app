import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';
import { z } from 'zod';

const prisma = new PrismaClient();
const router = express.Router();

const userSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
});

router.post('/signup', async (req, res) => {
    try {
        const { email, password } = userSchema.parse(req.body);
        const hashedPassword = await bcrypt.hash(password, 8);
        const user = await prisma.user.create({
            data: { email, password: hashedPassword },
        });
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET as string);
        res.status(201).send({ user, token });
    } catch (error: any) {
        console.error(error); // Log the error details
        res.status(400).send(error.message);
    }
});

router.post('/login', async (req, res) => {
    try {
        const { email, password } = userSchema.parse(req.body);
        const user = await prisma.user.findUnique({ where: { email } });
        if (!user) {
            return res.status(400).send('Unable to login');
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).send('Unable to login');
        }
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET as string);
        res.send({ user, token });
    } catch (error: any) {
        res.status(400).send(error.message);
    }
});

export default router;
