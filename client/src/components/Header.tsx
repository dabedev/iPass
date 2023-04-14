import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <nav className="shadow bg-white">
            <div className="h-16 mx-auto px-5 flex items-center justify-between">
                <Link to="" className="text-4xl transition-colors cursor-pointer"><span className="hover:text-red-500 text-black">iPa</span><span className="hover:text-black text-red-500">ss</span></Link>

                <ul className="flex items-center gap-5">
                    <li><Link to="/docs" className="text-m hover:text-red-500 transition-colors">Docs</Link></li>
                    <li><Link to="/download" className="text-m hover:text-red-500 transition-colors">Download</Link></li>
                    <li><Link to="/sign-in" className="rounded-xl border-2 border-black-500 px-5 py-3 text-base mb-3 font-medium text-black transition duration-200 hover:bg-black hover:text-red-500 active:bg-black">Access</Link></li>
                    <li><Link to="/sign-up" className="rounded-xl border-2 border-red-500 px-5 py-3 text-base mb-3 font-medium text-red-500 transition duration-200 hover:bg-red-500 hover:text-black active:bg-red-500">Create cccount</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Header;