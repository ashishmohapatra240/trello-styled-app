import React from "react";
import UserProfile from "./UserProfile";
import NavigationMenu from "./NavigationMenu";
import CreateTaskButton from "./CreateTaskButton";
import AppDownload from "./AppDownload";

const SidebarLayout: React.FC = () => {
  return (
    <aside className="flex flex-col justify-between items-start bg-neutral-100 max-md:pr-5 h-full">
      <nav className="flex flex-col px-4 pt-6 pb-7 max-w-full bg-white border-r border-neutral-200 w-[285px] flex-grow">
        <UserProfile />
        <NavigationMenu />
        <CreateTaskButton />
      </nav>
      <div className="w-full p-4">
        <AppDownload />
      </div>
    </aside>
  );
};

export default SidebarLayout;
