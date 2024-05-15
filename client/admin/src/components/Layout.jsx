import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="flex flex-col h-screen w-full">
      <Outlet />
    </div>
  );
}

export default Layout;
