import { useLoaderData } from "react-router-dom";

const Users = () => {
  const users = useLoaderData();
  console.log(users);
  return (
    <div className="p-14">
      <h1 className="text-5xl font-extrabold ">All Users</h1>

      <div className="overflow-x-auto my-10">
        <table className="table table-xs">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Created At</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr key={user._id}>
                <th>{i + 1}</th>
                <td>{user.email}</td>
                <td>{user.createdAt}</td>
                <td className="flex gap-4">
                  <button className="btn btn-xs btn-warning text-white hover:bg-black">
                    Edit
                  </button>
                  <button className="btn btn-xs btn-error text-white hover:bg-black">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
