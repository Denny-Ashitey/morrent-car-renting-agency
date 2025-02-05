export default function(props) {
    return (
        <div>
            <span>{props.text}</span>
            <div>{props.placeholderText} <span><img src="/src/assets/arrow-down.png" alt="drop down" /></span></div>
        </div>
    )
}