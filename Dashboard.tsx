import React from 'react';
import Header from './Header';
import FeatureCard from './FeatureCard';
import SearchBar from './SearchBar';
import ActionButton from './ActionButton';
import CreateNewButton from './CreateNewButton';

interface DashboardProps {
  userName: string;
}

const Dashboard: React.FC<DashboardProps> = ({ userName }) => {
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
        <div className="flex gap-5 max-md:flex-col">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </section>
      <section className="flex gap-5 justify-between mt-4 w-full text-base max-md:flex-wrap max-md:max-w-full">
        <SearchBar />
        <div className="flex gap-4 max-md:flex-wrap">
          <div className="flex gap-4 px-5 text-neutral-500 max-md:flex-wrap">
            {actions.map((action, index) => (
              <ActionButton key={index} {...action} />
            ))}
          </div>
          <CreateNewButton />
        </div>
      </section>
    </main>
  );
};

export default Dashboard;