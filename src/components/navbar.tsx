import { Button } from "./ui/button";


const Navbar = () => {
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
        <nav className="w-[100vw] py-[2.2rem] bg-[#FFFFFF] shadow px-[7rem]">
            <div className="flex max-w-[1900px] mx-auto justify-between items-center">
                <img
                    src="/common/logo.png"
                    alt="logo"
                    className="w-[17rem]"
                />

                <ul className="flex gap-[4rem] items-center">
                    {navItems.map((item, index) => (
                        <li key={index} className="font-[500] text-[1.6rem] text-[#737373]">
                            <a href={item.link}>{item.name}</a>
                        </li>
                    ))}
                </ul>
                <Button
                    variant={"ghost"}
                    className="font-[500] text-[1.6rem] rounded-[1rem] py-[1.8rem] px-[3rem] border border-[#595959] text-[#737373]"
                >
                    Contact Us
                </Button>
            </div>
        </nav>
    );
}

export default Navbar;