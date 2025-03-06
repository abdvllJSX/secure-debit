import { Button } from "./ui/button";

const footer = () => {

    const socials = [
        {
            link: "https://www.facebook.com/SecureDebit/",
        },
        {
            link: "https://twitter.com/SecureDebit",
        },
        {
            link: "https://www.linkedin.com/company/securedebit/",
        },
    ]

    return (
        <footer className="sm:px-[7rem] px-[2rem] shadow-[#0000001A] pt-[4rem] pb-[7rem]">
            <div className="max-w-[1900px] mx-auto items-start flex sm:flex-row justify-between flex-col">
                <div className="">
                    <h2 className="text-[2.5rem] text-center sm:text-start font-[600]">Stay up-to-date!</h2>
                    <p className="text-[1.8rem] text-center sm:text-start text-[#737373] mt-[1.5rem] max-w-[40rem]">Subscribe to our email list and be the first to know about new features, articles, resources and other exciting news.</p>

                    <div className="bg-[#F5F5F5] rounded-[1rem] mt-[2rem] flex justify-between py-[.5rem] pl-[1rem] pr-[.5rem]">
                        <input
                            type="text"
                            className="text-[1.6rem] w-[70%] focus:ring-0 focus:outline-none"
                            placeholder="Your E-mail Address"
                        />
                        <Button
                            className="py-[2.3rem] px-[1.6rem] bg-[#1B82E2] text-[#000000] sm:text-[1.4rem] rounded-[1rem]"
                        >
                            Get Notified
                        </Button>
                    </div>
                </div>

                <div className="mt-[3rem] sm:mt-[0]">
                    <div className="">
                        <h2 className="text-[2.5rem] font-[600]">Contact</h2>
                        <div className="">
                            <div className="text-[#737373] text-[1.7rem] my-[1rem]">
                                <p className="">info@securedebit.com</p>
                                <p className="">+44 12 3456 7890</p>
                            </div>

                            <div className="flex items-center gap-[2rem]">
                                {
                                    socials.map(({ link }, i) => (
                                        <a
                                            href={link}
                                            target="_blank"
                                            key={i}
                                            className=""
                                        >
                                            <img
                                                src={`/common/social${i + 1}.svg`}
                                                alt="social_iocn"
                                                className="sm:w-[3rem] w-[2.5rem]
                                                h-[2.5rem] sm:h-[3rem]"
                                            />
                                        </a>
                                    ))
                                }
                            </div>
                        </div>
                    </div>

                    <div className="mt-[3rem]">
                        <h2 className="text-[2.5rem] font-[600]">Office</h2>
                        <div className="text-[#737373] text-[1.7rem] my-[1rem]">
                            <p className="">SecureDebit Ltd.</p>
                            <p className="">123 Financial Street, London, UK</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default footer;