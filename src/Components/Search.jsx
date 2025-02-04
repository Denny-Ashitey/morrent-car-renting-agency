export default function Search() {
    return (
        <div className="flex items-center gap-4 border-solid border-[1px] border-[#c3c4e940] px-[20px] py-[12px] rounded-3xl">
            <img src="/src/assets/search-normal.png" />
            <input className="w-96 outline-none" placeholder="Search Something Here"/>
            <img className="cursor-pointer" src="/src/assets/filter.png" />
        </div>
    )
}