import { React } from "react";
import { NavLink } from "react-router-dom";

export default function NavBar(){
    return(
        <header className="bg-red-600">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink 
                        to="/" 
                        exact 
                        activeClassName="text-green-900"
                        className="transition-all inflex-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-300 text-4xl font-bold cursive tracking-widest">
                        Home
                    </NavLink>
                    <NavLink 
                        to="post"
                        activeClassName="text-red-100 bg-red-700"
                        className="transition-all inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800">
                        Blog Posts
                    </NavLink>
                    <NavLink 
                        to="project"
                        activeClassName="text-red-100 bg-red-700"
                        className="transition-all inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800">
                        Projects
                    </NavLink>
                    <NavLink 
                        to="about"
                        activeClassName="text-red-100 bg-red-700"
                        className="transition-all inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800">
                        About
                    </NavLink>
                </nav>
                <div>

                </div>
            </div>
        </header>
    )
}