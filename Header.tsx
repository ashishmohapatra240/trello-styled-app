import React from 'react';

interface HeaderProps {
  userName: string;
}

const Header: React.FC<HeaderProps> = ({ userName }) => {
  return (
    <header className="flex gap-5 justify-between px-5 w-full text-zinc-950 max-md:flex-wrap max-md:max-w-full">
      <h1 className="text-5xl font-semibold max-md:text-4xl">
        Good morning, {userName}!
      </h1>
      <div className="flex gap-2 my-auto text-base">
        <div className="my-auto">Help & feedback</div>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/39812b1d696ff57cd53ea16de6439d1c3030e15c64c6b710ec0a098e6d194555?apiKey=9c69169191d441fda0ffa037dc60254e&&apiKey=9c69169191d441fda0ffa037dc60254e" alt="" className="shrink-0 w-6 aspect-square" />
      </div>
    </header>
  );
};

export default Header;