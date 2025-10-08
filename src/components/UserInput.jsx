

export default function UserInput({userInputNames, userInputValues, handleChangeInput}) {
    function changeInput(event, inputName) {
        handleChangeInput(event.target.value, inputName);
    }

    function InputBox({ title, value }) {
        return (
            <>
                <p>
                    <label for={title}>{title}</label>
                    <input name={title} id={title} type='number' onChange={(event) => (changeInput(event, title))} value={value}></input>
                </p>
            </>
        )
    }

    return (
        <section id='user-input'>
            <div className="input-group">
                <InputBox title={userInputNames[0]} value={userInputValues[userInputNames[0]]}></InputBox>
                <InputBox title={userInputNames[1]} value={userInputValues[userInputNames[1]]}></InputBox>
            </div>
            <div className="input-group">
                <InputBox title={userInputNames[2]} value={userInputValues[userInputNames[2]]}></InputBox>
                <InputBox title={userInputNames[3]} value={userInputValues[userInputNames[3]]}></InputBox>
            </div>
        </section>
    )
}