import { Button } from "./ui/button";
import Hamburger from "./hamburger.tsx";
import Modal from "./modal.tsx";
import { useState, useEffect } from "react";
import useMediaQuery from "@/hooks/useMediaQuery.ts";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const toggleNav = () => {
        setOpen(!open);
    }

    const isMobile = useMediaQuery('(max-width: 767px)');

    useEffect(() => {
        if (open) {
            document.body.style.position = "fixed"
        } else {
            document.body.style.position = "static"
        }
    }, [open])


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
            {
                isMobile && open && (<div className="fixed inset-0 backdrop-blur-sm bg-[#101828B2] z-[2]"></div>)
            }
            <div className="flex max-w-[1900px] mx-auto justify-between items-center">
                <img
                    src="/common/logo.png"
                    alt="logo"
                    className="sm:w-[17rem] relative z-[11] w-[11rem]"
                />

                <ul className={`flex ${open ? "translate-y-[0]" : "translate-y-[-105%] sm:translate-y-[0]"} transition-all duration-300 sm:flex-row flex-col bg-[#F5F5F5] px-[2.5rem]
                sm:px-[0] top-[0] sm:rounded-[0] rounded-b-[2rem] pb-[5rem] sm:pb-[0] left-[0] right-[0] shadow sm:shadow-none sm:h-auto sm:bg-transparent w-[100vw] sm:w-auto pt-[8rem] sm:pt-[0] z-[10] fixed sm:static sm:gap-[4rem] gap-[2.3rem] items-start`}>
                    {navItems.map((item, index) => (
                        <li {...(isMobile && { onClick: toggleNav })} key={index} className="sm:font-[500]  font-[600] sm:text-[1.6rem] text-[2.2rem] sm:text-[#737373] text-[#000000]">
                            <a href={item.link}>{item.name}</a>
                        </li>
                    ))}

                    <li className="sm:hidden mt-[4rem] w-full">
                        <Modal>
                            <Button
                                variant={"ghost"}
                                className="w-full bg-[#1B82E2] text-[1.6rem] rounded-[1rem] py-[2.2rem] px-[3rem] font-[600] text-[#000000]"
                            >
                                Contact Us
                            </Button>
                        </Modal>
                    </li>
                </ul>

                <Modal>
                    <Button
                        variant={"ghost"}
                        className="font-[500] hidden sm:flex text-[1.6rem] rounded-[1rem] py-[1.8rem] hover:bg-[#092E4F] hover:text-white transition-all duration-100 cursor-pointer px-[3rem] border border-[#595959] text-[#737373]"
                    >
                        Contact Us
                    </Button>
                </Modal>

                <Hamburger
                    toggleNav={toggleNav}
                    open={open}
                />
            </div>
        </nav>
    );
}

export default Navbar;