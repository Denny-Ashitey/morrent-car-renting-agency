import Search from "./Search"

export default function Nav() {
    return (
        <nav className="py-[40px] px-[60px] flex items-center justify-between bg-white">
            <div className="flex items-center gap-16">
                <h1 className="text-3xl font-bold text-[#3563E9]">MORRENT</h1>
                <Search />
            </div>
            <div className="flex items-center gap-8">
                <div className="border-[1px] p-2 rounded-3xl">
                    <img className="cursor-pointer" src='/src/assets/notification.png' alt='notifications' />
                </div>
                <div className="border-[1px] p-2 rounded-3xl">
                    <img className="cursor-pointer" src="/src/assets/setting-2.png" alt="settings" />
                </div>
                <div className="border-[1px] p-2 rounded-3xl">
                    <img className="cursor-pointer" src="/src/assets/heart.png" alt='favourites' />
                </div>
                    <img className="cursor-pointer" src="/src/assets/profile.png" alt="profile" />                
            </div>
        </nav>
    )
}