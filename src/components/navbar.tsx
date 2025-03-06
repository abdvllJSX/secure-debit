import { Button } from "./ui/button";
import Hamburger from "./hamburger.tsx";
import { useState } from "react";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const toggleNav = () => {
        setOpen(!open);
    }
        ;
    const navItems = [
        {
            name: "Home",
            link: "#hero",
        },
        {
            name: "About",
            link: "#about",
        },
        {
            name: "Services",
            link: "#services",
        },
    ];

    return (
        <nav className="w-[100vw] sm:py-[2.2rem] py-[2rem] bg-[#FFFFFF] shadow sm:px-[7rem] px-[2.5rem]">
            <div className="flex max-w-[1900px] mx-auto justify-between items-center">
                <img
                    src="/common/logo.png"
                    alt="logo"
                    className="sm:w-[17rem] relative z-[11] w-[11rem]"
                />

                <ul className={`flex ${open ? "translate-y-[0]" : "translate-y-[-100%]"} transition-all duration-300 sm:flex-row flex-col bg-[#F5F5F5] px-[2.5rem]
                sm:px-[0] top-[0] left-[0] right-[0] h-[35vh] shadow sm:shadow-none sm:h-auto sm:bg-transparent w-[100vw] sm:w-auto pt-[7rem] sm:pt-[0] z-[10] fixed sm:static sm:gap-[4rem] gap-[2rem] items-start`}>
                    {navItems.map((item, index) => (
                        <li key={index} className="font-[500] sm:text-[1.6rem] text-[2rem] text-[#737373]">
                            <a onClick={toggleNav} href={item.link}>{item.name}</a>
                        </li>
                    ))}
                </ul>
                <Button
                    variant={"ghost"}
                    className="font-[500] hidden text-[1.6rem] rounded-[1rem] py-[1.8rem] px-[3rem] border border-[#595959] text-[#737373]"
                >
                    Contact Us
                </Button>

                <Hamburger
                    toggleNav={toggleNav}
                    open={open}
                />
            </div>
        </nav>
    );
}

export default Navbar;