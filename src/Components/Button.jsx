export default function Button(props) {
    return (
        <button className={`py-[10px] px-[20px] bg-[${props.bgColor}] rounded-[4px] text-white`}>{props.text}</button>
    )
}