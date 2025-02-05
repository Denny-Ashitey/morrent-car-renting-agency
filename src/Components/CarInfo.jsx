import Button from "./Button";

export default function(props) {
    return (
            <div className=" max-w-[320px] w-full shadow-md p-[24px] bg-white rounded-lg flex flex-col gap-[24px]">
                <div className="flex items-center gap-2 w-full justify-between">
                    <div>
                    <h4 className="font-bold text-[20px] text-[#1A202C]">{props.carName}</h4>
                    <p className="text-[#90A3BF]">{props.carType}</p>
                    </div>
                    <div>
                        <img className="cursor-pointer" src={`${props.imageLink}`} />
                    </div>
                </div>
                <div>
                    <img className="mt-[40px]" src="/src/assets/koenigsegg.png" alt="koenigsegg" />
                </div>
                <div className="flex items-center w-full justify-between">
                    <span className="flex items-center gap-[6px]">
                        <img src="/src/assets/gas-station.png" alt="gas station" /><span className="text-[#90A3BF] font-medium">{props.fuelCapacity}</span>
                    </span>
                    <span className="flex items-center gap-[6px]">
                        <img src="/src/assets/Car.png" alt="Car Icon" /><span className="text-[#90A3BF] font-medium">{props.steeringType}</span>
                    </span>
                    <span className="flex items-center gap-[6px]" >
                        <img src="/src/assets/profile-2user.png" alt="Profile Image" /><span className="text-[#90A3BF] font-medium">{props.seats}</span>
                    </span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="font-bold text-[20px]">${props.price}/<span className="text-[#90A3BF] text-[14px] font-normal">day</span></span>
                    <Button text="Rent Now" bgColor="#3563E9"/>
                </div>
            </div>
    )
}