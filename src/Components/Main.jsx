import CarCard from "./CarCard";

export default function Main() {
    return (
    <main className="px-[60px]">
        <div className="flex gap-4 items-center w-full flex-wrap">
            <CarCard heading="The Best Platform for Car Rental" text="Ease of doing a car rental safely and reliably. Of course at a low price." carImageSrc="car-pattern" cardBackgroundColor="#54A6FF"/>

            <CarCard heading="Easy way to rent a car at a low price" text="Providing cheap car rental services and safe and comfortable facilities." carImageSrc="dark-car-pattern" cardBackgroundColor="#3563E9"/> 
        </div>
    </main>
    )
}