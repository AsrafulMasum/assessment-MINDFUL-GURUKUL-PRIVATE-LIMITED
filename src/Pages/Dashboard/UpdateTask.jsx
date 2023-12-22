import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { SlCalender } from "react-icons/sl";
import { useParams } from "react-router-dom";
import { useState } from "react";

const UpdateTask = () => {
  const {id} = useParams()
  console.log(id);

  const [endDate, setEndDate] = useState(new Date());

  const date = endDate.toString().split(" ");
  const exactDate = date.slice(0, 5);
  const dueDate = exactDate.join(" ");

  const handleUpdate = () => {

  }

  return (
    <div>
      <div className="mt-20">
      <form onSubmit={handleUpdate} className=" mx-auto">
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
    </div>
  );
};

export default UpdateTask;