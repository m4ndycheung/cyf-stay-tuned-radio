const FormTextInput = () => {
    const label = "test"
    return (
    <>
        <label for={label}>{label}: </label><input type="text" id={label}/>
    </>
    )
}

export default FormTextInput