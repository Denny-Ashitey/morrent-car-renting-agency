import CarCard from "./CarCardLight";
import CarCardDark from "./CarCardDark";
import Schedule from "./Schedule";
import SectionHeading from "./SectionHeading";
import CarInfo from "./CarInfo";

export default function Main() {
    const carItems = [
        {
            name: "Koenigsegg",
            model: "Sport",
            capacity: 90,
            steering: "manual",
            seats: "2 people",
            price: "99.00",
            imageLink: "/src/assets/koenigsegg.png",
        },
        {
            name: "Nissan GT-R",
            model: "Sport",
            capacity: 80,
            steering: "Manual",
            seats: "2 people",
            discount: "$100.00",
            price: "99.00",
            imageLink: "/src/assets/nissan-gtr.png"
        },
        {
            name: "Rolls-Royce",
            model: "Sedan",
            capacity: 70,
            steering: "Manual",
            seats: "4 people",
            price: "99.00",
            imageLink: "/src/assets/rolls-royce.png"
        },
        {
            name: "Nissan GT-R",
            model: "Sport",
            capacity: 80,
            steering: "Manual",
            seats: "2 people",
            discount: "$100.00",
            price: "99.00",
            imageLink: "/src/assets/nissan-gtr.png"
        }
    ]
    return (
    <main className="px-[300px] py-[32px]">
        <div className="flex gap-4 items-center w-full flex-wrap">
            <CarCard heading="The Best Platform for Car Rental" text="Ease of doing a car rental safely and reliably. Of course at a low price." carImageSrc="car-pattern"/>
            <CarCardDark heading="Easy way to rent a car at a low price" text="Providing cheap car rental services and safe and comfortable facilities." carImageSrc="dark-car-pattern"/> 
        </div>

        <div className="flex items-center justify-between">
            <Schedule text="Pick-Up" image="/src/assets/mark-deep.png"/>
            <img src="/src/assets/Switch.png" alt="switch"/>
            <Schedule text="Drop-Off" image="/src/assets/mark-light.png"/>
        </div>

        <SectionHeading heading="Popular"/>

        <div className="flex justify-between">
            {/* <CarInfo carName="Koenigsegg" carType="Sport" imageLink="/src/assets/Like.png" fuelCapacity="90L" steeringType="Manual" seats="2 People" price="99.00"/> */}
            {carItems.map((item, index) => (<span key={index}>
                <CarInfo carName={item.name} carType={item.model} fuelCapacity={item.capacity} steeringType={item.steering} seats={item.seats} like="/src/assets/Like.png" carImageLink={item.imageLink} price={item.price}/>
            </span>))}
        </div>

        <SectionHeading heading="Recommended Cars" />
        <div className="flex flex-col gap-4">
            <div className="flex justify-between">
                {/* <CarInfo carName="Koenigsegg" carType="Sport" imageLink="/src/assets/Like.png" fuelCapacity="90L" steeringType="Manual" seats="2 People" price="99.00"/> */}
                {carItems.map((item, index) => (<span key={index}>
                    <CarInfo carName={item.name} carType={item.model} fuelCapacity={item.capacity} steeringType={item.steering} seats={item.seats} like="/src/assets/Like.png" carImageLink={item.imageLink} price={item.price}/>
                </span>))}
            </div>
            <div className="flex justify-between">
                {/* <CarInfo carName="Koenigsegg" carType="Sport" imageLink="/src/assets/Like.png" fuelCapacity="90L" steeringType="Manual" seats="2 People" price="99.00"/> */}
                {carItems.map((item, index) => (<span key={index}>
                    <CarInfo carName={item.name} carType={item.model} fuelCapacity={item.capacity} steeringType={item.steering} seats={item.seats} like="/src/assets/Like.png" carImageLink={item.imageLink} price={item.price}/>
                </span>))}
            </div>
        </div>
        
    </main>
    )
}