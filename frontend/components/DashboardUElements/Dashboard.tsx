import React from 'react';
import Header from './Header';
import FeatureCard from './FeatureCard';
import ActionButton from './ActionButton';
import CreateNewButton from './CreateNewButton';
import TaskBoard from '../TaskBoard';
import { Todo, Status } from '../types';

interface DashboardProps {
  userName: string;
  onCreateTaskClick: () => void;
  todos: Todo[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
  onDragEnd: (result: any) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const Dashboard: React.FC<DashboardProps> = ({
  userName,
  onCreateTaskClick,
  todos,
  onEdit,
  onDelete,
  onDragEnd,
  searchQuery,
  setSearchQuery,
}) => {
  const features = [
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/99006e5727a7987d1dc4926ef781fa351deacabe20d386160842d9122113337d?apiKey=9c69169191d441fda0ffa037dc60254e&&apiKey=9c69169191d441fda0ffa037dc60254e",
      title: "Introducing tags",
      description: "Easily categorize and find your notes by adding tags. Keep your workspace clutter-free and efficient."
    },
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/9e19363457f1663616f084d58fe351c8b2fab10ee443f3922ec030feb589189c?apiKey=9c69169191d441fda0ffa037dc60254e&&apiKey=9c69169191d441fda0ffa037dc60254e",
      title: "Share Notes Instantly",
      description: "Effortlessly share your notes with others via email or link. Enhance collaboration with quick sharing options."
    },
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/796f7b4ef85a326beb432b30fde8c7e67612a58a30a16d0c7e693528f0fd94f6?apiKey=9c69169191d441fda0ffa037dc60254e&&apiKey=9c69169191d441fda0ffa037dc60254e",
      title: "Access Anywhere",
      description: "Sync your notes across all devices. Stay productive whether you're on your phone, tablet, or computer."
    }
  ];

  const actions = [
    { label: "Calendar view", iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/5095d261cc32f08a4739e6805dcad35dc86afaaf3ef1d412d86b988b66619506?apiKey=9c69169191d441fda0ffa037dc60254e&&apiKey=9c69169191d441fda0ffa037dc60254e" },
    { label: "Automation", iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/546fa84c035dc719dde55b7380e297d21e2a9e117d3b19cb86e59ec7f2778280?apiKey=9c69169191d441fda0ffa037dc60254e&&apiKey=9c69169191d441fda0ffa037dc60254e" },
    { label: "Filter", iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/b99683edcf97cb916f1443315cd10d3bb558a97f75f93d67aba4ea54919e2ecb?apiKey=9c69169191d441fda0ffa037dc60254e&&apiKey=9c69169191d441fda0ffa037dc60254e" },
    { label: "Share", iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/cd48bd7ab9e3b4437119ce5324f4697e9aead0b138b83da75a72fac0888fd903?apiKey=9c69169191d441fda0ffa037dc60254e&&apiKey=9c69169191d441fda0ffa037dc60254e" }
  ];

  return (
    <main className="flex flex-col">
      <Header userName={userName} />
      <section className="px-5 mt-4 w-full max-md:max-w-full">
        <div className="flex gap-5 flex-wrap">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} className="w-full sm:w-1/2 lg:w-1/3" />
          ))}
        </div>
      </section>
      <section className="flex flex-wrap gap-5 justify-between mt-4 w-full text-base">
        <div className="w-full md:w-auto mb-4">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search tasks..."
            className="border p-2 rounded w-full"
          />
        </div>
        <div className="flex flex-wrap gap-4 items-center">
          <div className="flex gap-4 px-5 text-neutral-500 flex-wrap">
            {actions.map((action, index) => (
              <ActionButton key={index} {...action} className="flex-grow" />
            ))}
          </div>
          <CreateNewButton onClick={onCreateTaskClick} />
        </div>
      </section>
      <section className="mt-4 w-full">
        <TaskBoard
          todos={todos}
          onEdit={onEdit}
          onDelete={onDelete}
          onDragEnd={onDragEnd}
          onCreateTaskClick={onCreateTaskClick}
        />
      </section>
    </main>
  );
};

export default Dashboard;
