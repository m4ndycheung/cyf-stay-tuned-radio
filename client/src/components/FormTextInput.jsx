import "./FormTextInput.css";

const FormTextInput = ({ inputName, inputID, handleChangeEventFormInput }) => {
  return (
    <div className="form-group">
      <label htmlFor={inputID} className="form_input_label"></label>
      <input
        type="text"
        id={inputID}
        className="form_input_element form-control"
        placeholder={`Enter ${inputName}`}
        onChange={(event) => {
          console.log(event.target.value);
          handleChangeEventFormInput(event.target.value);
        }}
      />
    </div>
  );
};

export default FormTextInput;
