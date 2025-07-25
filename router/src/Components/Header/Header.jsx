import React from 'react';
import {Link, NavLink} from 'react-router-dom';
function Header(){
    return(
        <>
          <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                            className="mr-3 h-12 sm:h-16"
                            alt="Logo"
                        />
                    </Link>
                    <div className="flex items-center space-x-3 lg:order-2">
                        <ul className="flex font-medium space-x-8">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0
                                         ${isActive ? "text-orange-700" : "text-gray-700"}`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>

                          <li>
                                <NavLink
                                    to="/About"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0
                                         ${isActive ? "text-orange-700" : "text-gray-700"}`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>  


                            <li>
                                <NavLink
                                    to="/Contact"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0
                                         ${isActive ? "text-orange-700" : "text-gray-700"}`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>  

                            <li>
                                <NavLink
                                    to="/Github"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0
                                         ${isActive ? "text-orange-700" : "text-gray-700"}`
                                    }
                                >
                                    Github
                                </NavLink>
                            </li>                        

                        </ul>

                        <Link
                            to="/Login"
                            className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 focus:outline-none"
                             >
                            Login
                        </Link>
                        
                        <Link
                            to="#"
                            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 focus:outline-none"
                        >
                            Get started
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
        </>
    )
}
export default Header;