import { useState, useEffect } from "react";

export default function Page1() {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    console.log("INitialized", "load dat from server");

    let fetchData = async () => {
      const res = await fetch("http://localhost:8080/user/");
      const list = await res.json();
      console.log(list);

      setUserList(list);
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6 my-2">
          <div className="bg-dark p-4 text-light rounded d-flex justify-content-between align-items-center">
            <div>Registered User List</div>
            <button className="btn btn-secondary">Add User</button>
          </div>
        </div>
      </div>

      {userList.map((item, index) => (
        <div className="row">
          <div className="col-3"></div>
          <div className="col-6">
            <div
              className="alert alert-secondary d-flex justify-content-between align-items-center"
              key={index}
            >
              <div>
                {index + 1}.<span className="ml-2">{item.username}</span>
              </div>
              <div>
                <button className="btn btn-sm btn-secondary">Edit </button>
                <button className="btn btn-sm btn-danger">Delete </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
