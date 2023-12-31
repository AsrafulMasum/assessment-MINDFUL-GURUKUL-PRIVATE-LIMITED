import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Banner = () => {
  const {user} = useAuth()
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(https://i.postimg.cc/vZXZPNsD/banner.jpg)",
          backgroundAttachment: "fixed"
        }}
      >
        <div className="hero-overlay bg-opacity-50"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-gray-900">Your Partner in Productivity!</h1>
            <p className="mb-5 text-lg text-black font-semibold">
              Stay Organized, Get It Done! Your Ultimate To-Do Companion for
              Efficiency and Productivity.
            </p>
            <Link to={user ? "/dashboard" : "/logIn"} className="btn btn-wide bg-[#D1A054B3] border-none text-gray-900 hover:text-white">Let’s Explore</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
