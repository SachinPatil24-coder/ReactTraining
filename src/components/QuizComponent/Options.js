
const Options = (props) => {

    const { options, questionId } = props;

    function onChangeValue(event) {
        console.log(questionId + " " + event.target.value);
    }

    return (
        <div onChange={onChangeValue}>
            <input type="radio" name={questionId} value={options[0]} /> {options[0]}
            <input type="radio" name={questionId} value={options[1]} /> {options[1]}
            <input type="radio" name={questionId} value={options[2]} /> {options[2]}
            <input type="radio" name={questionId} value={options[3]} /> {options[3]}

            {/* {options.map((option) => {
                return <input type="radio" name={questionId} value={option} > {option} </input>
            })} */}
        </div>
    );
};

export default Options;
