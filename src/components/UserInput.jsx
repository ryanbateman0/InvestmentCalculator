function InputBox({ title, value, handleChangeInput }) {
        return (
            <>
                <p>
                    <label>{title}</label>
                    <input name={title} id={title} type='number' onChange={(event) => (handleChangeInput(event, title))} value={value || "0"} required></input>
                </p>
            </>
        )
    }

export default function UserInput({userInputNames, userInputValues, handleChangeInput}) {
    function changeInput(event, inputName) {
        handleChangeInput(event.target.value, inputName);
    }

    return (
        <section id='user-input'>
            <div className="input-group">
                <InputBox title={userInputNames[0]} value={userInputValues[userInputNames[0]]} handleChangeInput={changeInput}></InputBox>
                <InputBox title={userInputNames[1]} value={userInputValues[userInputNames[1]]} handleChangeInput={changeInput}></InputBox>
            </div>
            <div className="input-group">
                <InputBox title={userInputNames[2]} value={userInputValues[userInputNames[2]]} handleChangeInput={changeInput}></InputBox>
                <InputBox title={userInputNames[3]} value={userInputValues[userInputNames[3]]} handleChangeInput={changeInput}></InputBox>
            </div>
        </section>
    )
}