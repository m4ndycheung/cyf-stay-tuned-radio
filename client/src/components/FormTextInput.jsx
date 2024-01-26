const FormTextInput = ({ inputName }) => {
    return (
    <>
        <label for={inputName}>{inputName}: </label><input type="text" id={inputName}/>
    </>
    )
}

export default FormTextInput