import DropDown from "./DropDown";
import Separator from "./Separator";

export default function(props) {
    return (
        <div className="my-[32px] px-[48px] py-[24px] bg-white flex flex-col items-start gap-3 flex-1">
            <div className="flex items-center gap-4">
                <img src={props.image} alt="mark" />
                <span className=" font-semibold text-base">{props.text}</span>
            </div>
            <div className="flex items-center justify-between w-full gap-2">
                <DropDown text="Location" placeholderText="Select your city"/>
                <Separator />
                <DropDown text="Date" placeholderText="Select your date"/>
                <Separator />
                <DropDown text="Time" placeholderText="Select your time"/>
            </div>
        </div>
    )
}