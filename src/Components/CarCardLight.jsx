import Button from "./Button";

export default function CarCard(props) {
    return (
        <div className={`bg-car-pattern bg-[#54A6FF] flex-1  min-h-[360px] min-w-[360px] bg-no-repeat bg-center p-[24px] rounded-[10px]`}>
            <div className="w-1/2 flex flex-col gap-[20px] items-start">
                <h1 className="text-3xl font-semibold text-white">{props.heading}</h1>
                <p className="font-medium text-white text-base">{props.text}</p>
                <Button text='Rental Car' bgColor='#3563E9'/>
            </div>
            
        </div>
    )
}