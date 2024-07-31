import React from 'react';

interface NavItem {
  icon: string;
  label: string;
  isActive?: boolean;
}

const navItems: NavItem[] = [
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/dbfbc205261173983dd43fd5d6c462c37e2e87a4d9a05042dadf8250443df8e0?apiKey=9c69169191d441fda0ffa037dc60254e&&apiKey=9c69169191d441fda0ffa037dc60254e", label: "Home", isActive: true },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c27c0c4fd44195156ee61d5ca90c60a9c7494ae8241856a6abdc26d76ed0489a?apiKey=9c69169191d441fda0ffa037dc60254e&&apiKey=9c69169191d441fda0ffa037dc60254e", label: "Boards" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e4c38191e1e0b805ec7c356849a8acfc6adff314df8c93471e81f02ed04b64ba?apiKey=9c69169191d441fda0ffa037dc60254e&&apiKey=9c69169191d441fda0ffa037dc60254e", label: "Settings" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/79d99ac24097828647978d32badfe9b0aafdf7f70cf8c3a6a968bde1ad4e3650?apiKey=9c69169191d441fda0ffa037dc60254e&&apiKey=9c69169191d441fda0ffa037dc60254e", label: "Teams" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/2af0310c971f37e3fc2ac4b255ca9d1c6b3ac868610adb0eb8fe24cf1edbb588?apiKey=9c69169191d441fda0ffa037dc60254e&&apiKey=9c69169191d441fda0ffa037dc60254e", label: "Analytics" },
];

const NavigationMenu: React.FC = () => {
  return (
    <ul className="mt-4">
      {navItems.map((item, index) => (
        <li key={index}>
          <a
            href="#"
            className={`flex gap-3.5 py-2 mt-2 text-xl whitespace-nowrap ${
              item.isActive
                ? "rounded border border-solid bg-zinc-100 border-zinc-300"
                : ""
            } text-neutral-500`}
          >
            <img loading="lazy" src={item.icon} className="shrink-0 w-6 aspect-square" alt="" />
            <span>{item.label}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavigationMenu;