import { useState } from "react";

const SessionStorageTest = () => {
  const [inputData, setInputData] = useState("");
  const handleChange = (event) => {
    event.preventDefault();
    setInputData(event.target.value);
  };

  const setData = (event) => {
    event.preventDefault();
    sessionStorage.setItem("token", inputData);
  };

  const getData = (event) => {
    event.preventDefault();
    alert(sessionStorage.getItem("token"));
  };

  const deleteData = (event) => {
    event.preventDefault();
    sessionStorage.removeItem("token");
  };

  return (
    <form>
      <input
        type="text"
        className="form-control m-2"
        placeholder="enter text to store and press set"
        onChange={handleChange}
      />
      <div>
        <button className="btn btn-success p-2 m-2" onClick={setData}>
          Set session storage data
        </button>
        <button className="btn btn-primary p-2 m-2" onClick={getData}>
          Get session storage data
        </button>
        <button className="btn btn-danger p-2 m-2" onClick={deleteData}>
          Delete Session Storage
        </button>
      </div>
    </form>
  );
};

export default SessionStorageTest;
