import { Button } from "./ui/button";

const Hero = () => {
    return (
        <section id="hero" className="bg-[#F5F5F5] flex overflow-y-hidden flex-col items-center">
            <div className="flex sm:pb-[20rem] pt-[5rem] pb-[3rem] sm:pt-[8rem] flex-col max-w-[1900px] px-[2rem] relative mx-auto w-[100%] items-center">

                <img 
                    src="/hero/hero.png" 
                    alt="hero" 
                    className="absolute hidden sm:block w-[100%] inset-0 z-[0]" 
                />
                <div className="sm:max-w-[60rem] flex flex-col">
                    <div className="flex mx-auto sm:gap-[3rem] gap-[2rem]">
                        {
                            Array.from({ length: 3 }, (_, i) => (
                                <img
                                    src={`/hero/model${i + 1}.png`} alt="avater"
                                    className="sm:w-[5rem] 4-[3rem] h-[4rem] rounded-full sm:h-[5rem]"
                                />
                            ))
                        }
                    </div>
                    <h1 className="sm:text-[5.5rem] text-[3.5rem] leading-[4.2rem] mt-[2rem] sm:leading-[6.5rem] text-center text-[#000000] font-[700]">
                        B2B Financial Technology <span className="text-[#1B82E2]">Solutions</span>
                    </h1>
                    <p className="sm:text-[2rem] text-[1.6rem] w-[90%] mt-[2rem] sm:w-[75%] mx-auto text-center leading-[1.9rem] sm:leading-[2.7rem] text-[#737373] font-[500]">
                        Providing KYC and Direct Debit services for Mortgage Banks & Property Development Firms serving Diaspora customers
                    </p>
                </div>
                <Button className="bg-[#1B82E2] w-full mt-[2rem] sm:mt-[4rem] px-[2.5rem] rounded-[.5rem] text-[1.6rem] text-black sm:py-[2rem] py-[2.5rem] font-[600]">
                    Contact Us
                </Button>
            </div>
        </section>
    );
}

export default Hero;