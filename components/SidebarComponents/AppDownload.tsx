import React from 'react';

const AppDownload: React.FC = () => {
  return (
    <section className="flex gap-2 p-2 rounded-lg bg-zinc-100 mt-[240px] text-stone-500 max-md:mt-10">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f5001227ab5cb293f9ca71e002b0b4c367d0919b45800b62b0b40cfd1bf1735d?apiKey=9c69169191d441fda0ffa037dc60254e&&apiKey=9c69169191d441fda0ffa037dc60254e" className="shrink-0 my-auto w-10 aspect-square" alt="App icon" />
      <div className="flex flex-col flex-1">
        <h2 className="text-xl font-medium">Download the app</h2>
        <p className="mt-1 text-sm">Get the full experience</p>
      </div>
    </section>
  );
};

export default AppDownload;