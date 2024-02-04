import "./FormTextInput.css";

const FormTextInput = ({ inputName, inputID, handleChangeEventFormInput }) => {
    return (
        <div className="form-group">
            <label
                for={inputID}
                className="form_input_label"
            >
                {inputName}: 
            </label>
            <input
                type="text"
                id={inputID}
                className="form_input_element form-control"
                placeholder={`Enter ${inputName}`}
                onChange={() => handleChangeEventFormInput(event.target.id, event.target.value)}
            />
        </div>
    )
}

export default FormTextInput