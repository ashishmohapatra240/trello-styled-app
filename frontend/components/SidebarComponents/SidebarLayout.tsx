import React, { useState } from "react";
import UserProfile from "./UserProfile";
import NavigationMenu from "./NavigationMenu";
import CreateTaskButton from "./CreateTaskButton";
import AppDownload from "./AppDownload";
import CreateNewButton from "../DashboardUElements/CreateNewButton";

interface SidebarLayoutProps {
  onCreateTaskClick: () => void;
}

const SidebarLayout: React.FC<SidebarLayoutProps> = ({ onCreateTaskClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside className={`flex flex-col justify-between items-start bg-neutral-100 h-full ${isOpen ? 'max-md:block' : 'max-md:hidden'}`}>
      <nav className="flex flex-col px-4 pt-6 pb-7 max-w-full bg-white border-r border-neutral-200 w-[285px] flex-grow">
        <UserProfile />
        <NavigationMenu />
        <CreateTaskButton onClick={onCreateTaskClick} />
      </nav>
      <div className="w-full p-4">
        <AppDownload />
      </div>
      <button onClick={() => setIsOpen(!isOpen)} className="block md:hidden p-2">
        {isOpen ? 'Close Menu' : 'Open Menu'}
      </button>
    </aside>
  );
};

export default SidebarLayout;
