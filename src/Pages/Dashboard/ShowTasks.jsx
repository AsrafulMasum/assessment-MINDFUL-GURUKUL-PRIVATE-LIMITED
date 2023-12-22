import PropTypes from "prop-types";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const ShowTasks = ({ tasks, refetch }) => {
  const axiosSecure = useAxiosSecure();
  const handleDelete = async (id) => {
    const res = await axiosSecure.delete(`/task/${id}`);
    if (res?.data?.deletedCount) {
      refetch();
    }
  };

  return (
    <div className="flex flex-col gap-4 mt-10">
      {tasks?.map((task) => (
        <div key={task?._id} className="card bg-gray-700 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">{task?.taskName}</h2>
            <p>{task?.description}</p>
            <p>Status : {task?.status}</p>
          </div>
          <div className="card-actions justify-end pb-4 pr-4">
            <Link to={`/taskUpdate/${task?._id}`} className="btn text-white">Update</Link>
            <button
              onClick={() => handleDelete(task?._id)}
              className="btn border-none text-white bg-[#D1A054B3]"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowTasks;

ShowTasks.propTypes = {
  tasks: PropTypes.array,
  refetch: PropTypes.func,
};
