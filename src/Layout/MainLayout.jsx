import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Footer'
import Header from '../Navbar/Header';



const MainLayout = () => {
  return (
    <div className="font-['Lato']">
      <Header>
        <Outlet></Outlet>
      </Header>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;