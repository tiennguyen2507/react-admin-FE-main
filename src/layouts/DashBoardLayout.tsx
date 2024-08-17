import SideBar from '@/components/DashBoardSidebar';
import React, { PropsWithChildren } from 'react';

const DashBoardLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="dashboard-layout">
      <SideBar />
      <main className="p-5">{children}</main>
    </div>
  );
};

export default DashBoardLayout;
