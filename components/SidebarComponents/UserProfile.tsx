import React from "react";

const UserProfile: React.FC = () => {
  return (
    <header className="flex flex-col">
      <div className="flex gap-2 text-xl font-medium text-zinc-950">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/44205eb2ee3884f77e422d5d1ada5d04c7b1dc77e7c338b197558d0dae8d568e?apiKey=9c69169191d441fda0ffa037dc60254e&&apiKey=9c69169191d441fda0ffa037dc60254e"
          className="shrink-0 rounded-lg aspect-square w-[31px]"
          alt="User profile"
        />
        <div className="my-auto">Joe Gardner</div>
      </div>
      <div className="flex gap-0.5 justify-between mt-2 w-full">
        <div className="flex gap-5 my-auto">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2a49ce09407740e5eb3d2388987cb2518824d776750fad0de4aed60e5e732ae8?apiKey=9c69169191d441fda0ffa037dc60254e&&apiKey=9c69169191d441fda0ffa037dc60254e"
            className="shrink-0 w-6 aspect-square"
            alt=""
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c871c1f5e02ce3164950c064537caf11318d17f443b359d1b6354f2d6886d913?apiKey=9c69169191d441fda0ffa037dc60254e&&apiKey=9c69169191d441fda0ffa037dc60254e"
            className="shrink-0 w-6 aspect-square"
            alt=""
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d160eaae9596508c30339ed5459c1f85594e164a5f4019ae67f98b791f65269c?apiKey=9c69169191d441fda0ffa037dc60254e&&apiKey=9c69169191d441fda0ffa037dc60254e"
            className="shrink-0 w-6 aspect-square"
            alt=""
          />
        </div>
        <button className="p-2 text-base whitespace-nowrap rounded bg-zinc-100 text-neutral-500">
          Logout
        </button>
      </div>
    </header>
  );
};

export default UserProfile;
