export default function(props) {
    return (
        <div className="flex flex-col items-start gap-2">
            <span  className="font-bold text-[#1A202C]">{props.text}</span>
            <div className="flex items-center gap-4">
                <span className="text-[#90A3BF]">{props.placeholderText}</span> <span><img src="/src/assets/arrow-down.png" alt="drop down" /></span>
            </div>
        </div>
    )
}