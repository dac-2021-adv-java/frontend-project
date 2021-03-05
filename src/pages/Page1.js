import { useState, useEffect } from "react";

export default function Page1() {
  const [userList, setUserList] = useState([]);

  let fetchData = async () => {
    const res = await fetch("http://localhost:8080/user/");
    const list = await res.json();
    console.log(list);

    setUserList(list);
  };

  useEffect(() => {
    console.log("INitialized", "load dat from server");

    fetchData();
  }, []);

  const addUser = async () => {
    try {
      console.log("I am here....");
      const url = "http://localhost:8080/user/";

      // will come from FORM
      const data = {
        username: "spring" + new Date().getTime(),
        password: "1311313",
        creationTime: 1614937935666,
      };

      await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      // refresh the prage
      fetchData();
    } catch (err) {
      console.log(err);
    }
  };

  const deleteUser = async (item) => {
    console.log("Delte", item);

    const url = `http://localhost:8080/user/${item.id}`;
    await fetch(url, { method: "DELETE" });

    // refresh the prage
    fetchData();
  };

  return (
    <div>
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6 my-2">
          <div className="bg-dark p-4 text-light rounded d-flex justify-content-between align-items-center">
            <div>Registered User List</div>
            <button className="btn btn-secondary" onClick={addUser}>
              Add User
            </button>
          </div>
        </div>
      </div>

      {userList.map((item, index) => (
        <div className="row" key={index}>
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
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => deleteUser(item)}
                >
                  Delete{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
