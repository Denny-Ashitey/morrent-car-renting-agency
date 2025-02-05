export default function(props) {
    return (
        <div className="py-[32px]">
            <div className="flex items-center gap-4">
                <img src="/src/assets/mark-deep.png" alt="mark" />
                <span className=" font-semibold text-base">{props.text}</span>
            </div>
            <div>

            </div>
        </div>
    )
}