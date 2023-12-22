import PropTypes from 'prop-types';
import { toast } from "react-toastify";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { SlCalender } from "react-icons/sl";
import { useState } from "react";
import useAuth from "../../Hooks/useAuth";

const AddTask = ({refetch}) => {
  const {user} = useAuth()
  const axiosSecure = useAxiosSecure();
  const [endDate, setEndDate] = useState(new Date());

  const date = endDate.toString().split(" ");
  const exactDate = date.slice(0, 5);
  const dueDate = exactDate.join(" ");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const taskInfo = {
      email: user?.email,
      taskName: form?.title.value,
      description: form?.description.value,
      priority: form?.priority.value,
      deadlines: dueDate,
      status: "to-do"
    };
    const response = await axiosSecure.post("/task", taskInfo);
    if (response?.data?.insertedId) {
      toast.success("Task added successfully.");
      form.reset();
      refetch()
    }
  };

  return (
    <div className="mt-20">
      <form onSubmit={handleSubmit} className=" mx-auto">
        <div className="relative z-0 w-full mb-5 group">
          <input
            name="title"
            type="text"
            className="block w-full text-xs placeholder:text-white text-white py-2 pl-1 mt-2 bg-transparent border-b border-[#ABABAB] focus:outline-none focus:bg-transparent"
            placeholder="Title"
            required
          />
        </div>

        <div
          className={
            "block w-full text-xs placeholder:text-white text-white bg-transparent border-b border-[#ABABAB] focus:outline-none focus:bg-transparent"
          }
        >
          <select
            name="priority"
            className={
              "block w-full h-10 text-xs placeholder:text-white text-white bg-transparent focus:outline-none focus:bg-transparent cursor-pointer"
            }
          >
            <option className="text-black" value="Low">
              Low
            </option>
            <option className="text-black" value="Moderate">
              Moderate
            </option>
            <option className="text-black" value="High">
              High
            </option>
          </select>
        </div>

        <div
          className={
            "block w-full text-xs placeholder:text-white text-white py-2 bg-transparent border-b border-[#ABABAB] focus:outline-none focus:bg-transparent"
          }
        >
          <DatePicker
            className={
              "text-xs cursor-pointer h-full w-96 md:w-[42rem] lg:w-[51rem] placeholder:text-white text-white bg-transparent focus:outline-none focus:bg-transparent"
            }
            showIcon
            required
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            icon={<SlCalender className="text-sm -mt-[1px]"></SlCalender>}
          ></DatePicker>
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <input
            name="description"
            type="text"
            className="block w-full text-xs placeholder:text-white text-white py-2 pl-1 mt-2 bg-transparent border-b border-[#ABABAB] focus:outline-none focus:bg-transparent"
            placeholder="Description"
            required
          />
        </div>
        <button
          type="submit"
          className="btn w-full text-white text-lg bg-[#D1A054B3] hover:bg-[#65B9ED]"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddTask;


AddTask.propTypes = {
  refetch: PropTypes.func
}
