
import authGIF from "../assets/auth.json";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { BsEyeSlash, BsEye } from "react-icons/bs";
// import { ImSpinner9 } from "react-icons/im";
import Lottie from "lottie-react";

const Login = () => {
  const [show, setShow] = useState(false);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <div>
      <div className="min-h-screen">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-center items-center gap-10">
          <div className="flex-1">
            <Lottie animationData={authGIF}></Lottie>
          </div>
          <div className="flex-1">
            <form onSubmit={handleSubmit(onSubmit)} className="w-2/3 mx-auto">
              <input
                {...register("email", { required: true })}
                className="w-full h-11 outline-none px-5 bg-white border border-[#D0D0D0] rounded text-sm"
                type="text"
                placeholder="Email"
                required
              />

              <div className="relative">
                <input
                  {...register("password", { required: true })}
                  className="w-full h-11 outline-none px-5 mt-4 bg-white border border-[#D0D0D0] rounded"
                  type={show ? "text" : "password"}
                  placeholder="Password"
                  required
                />
                <div
                  className="absolute right-2 top-[30px] inline-block cursor-pointer"
                  onClick={() => setShow(!show)}
                >
                  {show ? <BsEyeSlash></BsEyeSlash> : <BsEye></BsEye>}
                </div>
              </div>

              <button className="btn w-full mt-4 bg-[#D1A054B3] hover:bg-[#D1A054B3] rounded">
                {/* {loading ? (
                  <ImSpinner9 className="animate-spin text-lg"></ImSpinner9>
                ) : ( */}
                  Log In
                {/* )} */}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
