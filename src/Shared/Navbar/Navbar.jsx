import { Link } from "react-router-dom";
import HomeBanner from "../../Component/HomeBanner/HomeBanner";



const Navbar = () => {
    return (
        <div className="max-w-[1920px] mx-auto ">
            <div className="drawer">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />

                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <div className="w-full navbar sticky bg-white left-0 top-0 right-0 z-80 shadow-lg  lg:px-24  ">
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <div className="flex-1 px-2 mx-2">Navbar Title</div>
                        <div className="flex-none hidden lg:block">
                            <ul className="menu menu-horizontal">
                                {/* Navbar menu content here */}
                                <div className="flex-1">
                                    <ul className="menu menu-md menu-horizontal px-1 uppercase">
                                        <li><a>Home</a></li>
                                        <li >
                                            <details >
                                                <summary>Membership</summary>
                                                <ul className="w-96 rounded-none" >
                                                    <li ><a>Thailand elite visa overview</a></li>
                                                    <li><a>Gold membership</a></li>
                                                    <li><a>Platinum membership</a></li>
                                                    <li><a>Diamond membership</a></li>
                                                    <li><a>Reserve membership</a></li>
                                                </ul>

                                            </details>

                                        </li>
                                        <li><a>News</a></li>
                                        <li><a>About Us</a></li>
                                        <li><a >Contact Us</a> </li>

                                    </ul>

                                </div>

                            </ul>
                        </div>
                    </div>
                    {/* Page content here
                    Content */}

                    <HomeBanner></HomeBanner>



                </div>
                <div className="drawer-side ">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay ">
                    </label>
                    <ul className="menu  w-10/12  min-h-full bg-white">
                        {/* Sidebar content here */}

                        <ul className="menu menu-lg  max-w-xs w-full">
                            <li><a>Home</a></li>
                            <li >
                                <details >
                                    <summary>Membership</summary>
                                    <ul className="w-10/12 rounded-none" >
                                        <li ><a>Thailand elite visa overview</a></li>
                                        <li><a>Gold membership</a></li>
                                        <li><a>Platinum membership</a></li>
                                        <li><a>Diamond membership</a></li>
                                        <li><a>Reserve membership</a></li>
                                    </ul>
                                </details>
                            </li>
                            <li><a>News</a></li>
                            <li><a>About Us</a></li>
                            <li><a >Contact Us</a> </li>

                        </ul>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;