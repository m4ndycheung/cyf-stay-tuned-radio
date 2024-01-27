const FormTextInput = ({ inputName, handleChangeEventFormInput }) => {
    return (
    <>
        <label for={inputName}>{inputName}: </label><input type="text" id={inputName} onChange={() => handleChangeEventFormInput(event.target.id, event.target.value)}/>
    </>
    )
}

export default FormTextInput