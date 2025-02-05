import CarCard from "./CarCardLight";
import CarCardDark from "./CarCardDark";
import Schedule from "./Schedule";

export default function Main() {
    return (
    <main className="px-[64px] py-[32px]">
        <div className="flex gap-4 items-center w-full flex-wrap">
            <CarCard heading="The Best Platform for Car Rental" text="Ease of doing a car rental safely and reliably. Of course at a low price." carImageSrc="car-pattern"/>

            <CarCardDark heading="Easy way to rent a car at a low price" text="Providing cheap car rental services and safe and comfortable facilities." carImageSrc="dark-car-pattern"/> 
        </div>
        <div className="flex items-center justify-between">
            <Schedule text="Pick-Up" image="/src/assets/mark-deep.png"/>
            <img src="/src/assets/Switch.png" alt="switch"/>
            <Schedule text="Drop-Off" image="/src/assets/mark-light.png"/>
        </div>
    </main>
    )
}