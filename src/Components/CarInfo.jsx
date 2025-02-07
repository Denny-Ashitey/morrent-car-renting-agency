import Button from "./Button";

export default function({carType,carName, like, price, fuelCapacity, steeringType, seats, carImageLink}) {
    return (
            <div className="min-w-[320px] max-w-[350px] w-full shadow-md p-[24px] bg-white rounded-lg flex flex-col gap-[24px] h-full flex-1">
                <div className="flex items-center gap-2 w-full justify-between">
                    <div>
                    <h4 className="font-bold text-[20px] text-[#1A202C]">{carName}</h4>
                    <p className="text-[#90A3BF]">{carType}</p>
                    </div>
                    <div>
                        <img className="cursor-pointer" src={`${like}`} />
                    </div>
                </div>
                <div className="mb-[64px]">
                    <img className="mt-[40px]" src={carImageLink} alt="koenigsegg" />
                </div>
                <div className="flex items-center w-full justify-between">
                    <span className="flex items-center gap-[6px]">
                        <img src="/src/assets/gas-station.png" alt="gas station" /><span className="text-[#90A3BF] font-medium">{fuelCapacity}</span>
                    </span>
                    <span className="flex items-center gap-[6px]">
                        <img src="/src/assets/Car.png" alt="Car Icon" /><span className="text-[#90A3BF] font-medium">{steeringType}</span>
                    </span>
                    <span className="flex items-center gap-[6px]" >
                        <img src="/src/assets/profile-2user.png" alt="Profile Image" /><span className="text-[#90A3BF] font-medium">{seats}</span>
                    </span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="font-bold text-[20px]">${price}/<span className="text-[#90A3BF] text-[14px] font-normal">day</span></span>
                    <Button text="Rent Now" bgColor="#3563E9"/>
                </div>
            </div>
    )
}