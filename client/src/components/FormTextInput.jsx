import "./FormTextInput.css";

const FormTextInput = ({ inputName, inputID, handleChangeEventFormInput }) => {
    return (
    <>
        <label for={inputID} className="form_input_label">{inputName}: </label>
        <input type="text" id={inputID} className="form_input_element" onChange={() => handleChangeEventFormInput(event.target.id, event.target.value)}/>
    </>
    )
}

export default FormTextInput