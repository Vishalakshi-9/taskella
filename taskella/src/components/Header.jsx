import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="w-full bg-[#FFE5EC] dark:bg-[#1a1a1a] text-[#B5838D] dark:text-[#FFE5EC] border-t border-[#FCD2D2] dark:border-[#333] px-4 py-6 font-poppins absolute">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4 ">
                <div className="text-sm text-center md:text-left">
                    🌸 <span className="font-semibold">Taskella</span>
                </div>
                <div className="text-sm text-center md:text-left mx-8 cursor-pointer flex justify-between gap-3">
                    <Link to="/dashboard">
                    <h2 className="font-semibold text-plum hover:text-amber-800">Dashboard</h2>
                    </Link>
                    <Link to="/profile">
                    <h2 className="font-semibold text-plum hover:text-amber-800">Profile</h2>
                    </Link>
                    <Link to="/settings">
                    <h2 className="font-semibold text-plum hover:text-amber-800">Settings</h2>
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header;
