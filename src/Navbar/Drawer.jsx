// import { IoMdNotifications } from "react-icons/io";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

const Drawer = () => {
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
      {/* <li>
        <NavLink to="/notification">
          Notification
          <IoMdNotifications className="text-2xl"></IoMdNotifications>
        </NavLink>
      </li> */}
    </>
  );

  return (
    <div className="drawer-side z-50 min-h-full">
      <label
        htmlFor="my-drawer-3"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <ul className="menu p-4 w-80 min-h-full bg-base-200">{navLinks}</ul>
    </div>
  );
};

export default Drawer;
