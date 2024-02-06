import { useState } from "react";

const SessionStorageTest = () => {
  const [inputData, setInputData] = useState("");
  const handleChange = (event) => {
    event.preventDefault();
    setInputData(event.target.value);
  };

  return (
    <form>
      <input
        type="text"
        className="form-control m-2"
        placeholder="enter text to store and press set"
        onChange={handleChange}
      />
    </form>
  );
};

export default SessionStorageTest;
