import { Outlet } from 'react-router-dom';
import Headers from '../components/Headers/headers';

const Layout = () => {
  return (
    <div className="overflow-hidden">
      <Headers />

      <Outlet />
    </div>
  );
};

export default Layout;
