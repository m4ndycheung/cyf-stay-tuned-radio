const FormTextInput = ({ inputName }) => {
    function test() {
        const formDataObject = {}
        const name = event.target.id
        formDataObject[name] = event.target.value
        console.log(formDataObject)
    }
    return (
    <>
        <label for={inputName}>{inputName}: </label><input type="text" id={inputName} onChange={test}/>
    </>
    )
}

export default FormTextInput