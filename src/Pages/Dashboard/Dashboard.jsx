import Chart from "./Chart";
import useAuth from "../../Hooks/useAuth";
import LayoutContainer from "../../Layout/LayoutComponent/LayoutContainer";
import AddTask from "./AddTask";
import ShowTasks from "./ShowTasks";
import useLoadSecureData from "../../Hooks/useLoadSecureData";

const Dashboard = () => {
  const { user } = useAuth();
  const taskURL = `/task/${user?.email}`;
  const { data: tasks, refetch } = useLoadSecureData(taskURL);
  return (
    <div className="my-20">
      <LayoutContainer>
        <h2 className="text-3xl lg:text-5xl text-white mb-10">Welcome {user?.displayName}</h2>
        <div className="flex flex-col lg:flex-row justify-between items-center">
        <div className="flex items-center gap-10">
          <img
            className="w-20 h-20 md:w-40 md:h-40 object-cover rounded-full"
            src={user?.photoURL}
            alt="Image"
          />
          <div className="flex flex-col justify-center gap-4 text-white">
            <div className="flex items-center gap-4">
              <p>Name :</p>
              <h2 className="text-lg font-medium">{user?.displayName}</h2>
            </div>
            <div className="flex items-center gap-4">
              <p>Email :</p>
              <h4 className="text-lg font-medium">{user?.email}</h4>
            </div>
          </div>
        </div>
          <Chart></Chart>
        </div>
        <div>
          <ShowTasks tasks={tasks} refetch={refetch}></ShowTasks>
        </div>
        <div>
          <AddTask refetch={refetch}></AddTask>
        </div>
      </LayoutContainer>
    </div>
  );
};

export default Dashboard;
