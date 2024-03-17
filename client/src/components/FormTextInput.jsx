import "./FormTextInput.css";

const FormTextInput = ({ inputName, inputID, handleChangeEventFormInput }) => {
  return (
    <div className="col">
      <input
        type="text"
        id={inputID}
        className="form_input_element form-control"
        placeholder={`${inputName}`}
        onChange={(event) => {
          console.log(event.target.value);
          handleChangeEventFormInput(event.target.value);
        }}
      />
      <label htmlFor={inputID} className="form_input_label"></label>
    </div>
  );
};

export default FormTextInput;
