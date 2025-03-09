import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi
} from "./ui/carousel";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTrigger,
} from "@/components/ui/dialog"

import { useEffect, useState } from "react";
import useMediaQuery from "@/hooks/useMediaQuery";

const Team = () => {
    const isMobile = useMediaQuery("(max-width: 768px)");
    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = useState(0)
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (!api) {
            return
        }

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])

    const members = [
        {
            name: "Olufemi Fajebe",
            role: "",
            img: "olufemi",
            about: ["Olufemi Fajebe brings expertise in accounting, auditing, taxation, and financial consulting. As a chartered accountant and member of The Institute of Chartered Accountants England and Wales (ICAEW), The Institute of Chartered Accountant of Nigeria and Certified Information   Systems Auditor (CISA), Olufemi has extensive experience working with SMEs, multinational corporations, and government institutions. His strong background in financial due diligence, revenue assurance, and risk management positions him at the forefront of Securedebit Limited’s mission to revolutionize financial technology solutions for Africans in diaspora."]
        },
        {
            name: "Titus Ayodele",
            role: "",
            img: "titus",
            about: ["seasoned financial expert with over 20 years of experience in accountancy, taxation, and financial advisory. As the Managing Partner at Julius and Julius & Associates LLP, he has demonstrated excellence in strategic financial management, corporate governance, and business leadership. A Fellow of multiple professional bodies, including the Institute of Financial Accountants, Titus provides valuable financial oversight and strategic guidance to Securedebit Limited."]
        },
        {
            name: "Dr. Gabriel Olayinka Aloku",
            role: "(IMChemE, CEng)",
            img: "gabriel",
            about: ["Dr. Gabriel Olayinka Aloku is a highly accomplished Executive, Senior Project Manager and Consultant with over 20 years of experience leading complex, high-value projects across Oil & Gas, Engineering Consultancy, Petrochemicals, IT, Finance, Manufacturing, and Academia. His career spans major multinational organizations, including BP, Chevron, Shell, NNPC, Saudi Aramco, Grant Thornton, and NatWest, where he has successfully overseen multi-million to multi-billion dollar projects", "Currently serving as a Senior Project Manager at Grant Thornton and Co-Founder of Melon Technologies, Dr. Aloku specializes in data governance, compliance,financial technology solutions, and business transformation.", "He has played a pivotal role in developing and implementing enterprise-wide data governance strategies, ensuring regulatory compliance, and optimizing business processes for enhanced efficiency. Dr.Aloku holds a PhD in Chemical Engineering from the University of Manchester, UK, and a First - Class BSc(Hons) in Industrial Chemistry from the University of Lagos, Nigeria.His academic and professional expertise extends into computational fluid dynamics(CFD), process engineering, financial structuring, and risk management.Throughout his career, he has been instrumental in engineering process optimization, regulatory compliance, and business strategy development, ensuring seamless project execution across industries."]
        },

    ]
    return (
        <section className="sm:pt-[4rem] pt-[3rem] sm:pb-[5rem] px-[2rem] sm:px-[7rem]">
            <h2 className="text-center sm:mb-[4rem] sm:text-[3rem] text-[2.8rem] text-[#000000] font-[500]">Meet <span className="text-[#1B82E2]">Our</span> Team</h2>
            {
                !isMobile ? (
                    <>
                        <Carousel
                            className="mx-auto max-w-[1500px] w-[80%] flex"
                            opts={{
                                dragFree: true,
                                loop: true,
                            }}
                            setApi={setApi}
                        >
                            <CarouselContent className="">
                                {
                                    members.map((item, index) => {
                                        return (
                                            <CarouselItem className="" key={index}>
                                                <TeamMember {...item} />
                                            </CarouselItem>
                                        )
                                    })
                                }
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                        <div className="flex mt-[3rem] mx-0 gap-[1.5rem] sm:gap-[3rem] justify-center">
                            {
                                Array.from({ length: count }, (_, index) => (
                                    <button key={index} className={`cursor-pointer  ${current == index + 1 ? "bg-[#1B82E2]" : "bg-[#F5F5F5]"} size-[1.5rem] rounded-full`}></button>
                                ))
                            }
                        </div>
                    </>
                ) : (
                    <div className="flex mt-[2rem] flex-col gap-[4rem]">
                        {
                            members.map((item, index) => {
                                return (
                                    <TeamMember
                                        {...item}
                                        key={index}
                                    />
                                )
                            })
                        }
                    </div>
                )
            }
        </section>
    );
}

const TeamMember = ({ name, role, img, about }: { name: string, role: string, img: string, about: string[] }) => {
    return (
        <div className="flex sm:flex-row flex-col pb-[4rem] sm:pb-[0] bg-[#F5F5F5] rounded-[2.8rem] gap-[.5rem] mx-auto items-center">
            <img
                src={`/team/${img}.png`}
                alt="team member"
                className="sm:w-[50rem]"
            />
            <div className="text-center mt-[2.5rem] sm:mt-[0] sm:px-[4.5rem] h-full">
                <h2 className="sm:text-[2.8rem] text-[2.3rem] font-[600] text-[#000000]">{name}</h2>
                {role && <h2 className="sm:text-[2.8rem] text-[2.3rem] font-[600] text-[#000000]">{role}</h2>}
                {
                    about.map((item, index) => {
                        if (index === 0) {
                            return (
                                <p className="sm:max-w-[40rem] max-w-[28rem]  text-[#737373] sm:mt-[1rem] mt-[1rem] sm:text-[1.9rem]" key={index}>{item}{about.length >  1 && <span className="">...</span>}{about.length > 1 && (
                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <span className="text-[#1B82E2] hover:cursor-pointer">Learn More</span>
                                        </DialogTrigger>
                                        <DialogContent className="p-0 sm:max-w-[80rem] pr-[3.5rem] pb-[3rem]">
                                            <DialogHeader className="flex gap-[2.4rem] items-start flex-row">
                                                <img
                                                    src={`/team/${img}.png`}
                                                    alt="member"
                                                    className="w-[35rem]"
                                                />
                                                <div className="pt-[2rem]">
                                                    <h2 className="sm:text-[2.3rem] text-[2.3rem] font-[600] text-[#000000]">{name}</h2>
                                                    <h2 className="sm:text-[2.3rem] text-[2.3rem] font-[600] text-[#000000]">{role}</h2>

                                                    <div className="mt-[2rem] text-[#737373] text-[1.53rem]">
                                                        <p className="">{about[0]}</p>
                                                        <p className="">{about[1]}</p>
                                                    </div>
                                                </div>
                                            </DialogHeader>
                                            <DialogDescription className="mt-[2rem] text-[#737373] text-[1.53rem] pl-[3.5rem]">
                                                <p className="">{about[2]}</p>
                                            </DialogDescription>
                                        </DialogContent>

                                    </Dialog>
                                )}</p>
                            )
                        }
                    })
                }
            </div>
        </div>
    )
}

export default Team;