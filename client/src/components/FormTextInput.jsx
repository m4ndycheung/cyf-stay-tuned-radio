import "./FormTextInput.css";

const FormTextInput = ({ inputName, inputID, handleChangeEventFormInput }) => {
    return (
    <>
        <label for={inputID}>{inputName}: </label>
        <input type="text" id={inputID} onChange={() => handleChangeEventFormInput(event.target.id, event.target.value)}/>
    </>
    )
}

export default FormTextInput