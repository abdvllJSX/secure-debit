import { Button } from "./ui/button";

const Hero = () => {
    return (
        <section className="bg-[#F5F5F5] flex  overflow-y-hidden flex-col items-center">
            <div className="flex pb-[20rem] pt-[8rem] flex-col max-w-[1900px] relative mx-auto w-[100%] items-center">

                <img 
                    src="/hero/hero.png" 
                    alt="hero" 
                    className="absolute w-[100%] inset-0 z-[0]" 
                />
                <div className="max-w-[60rem] flex flex-col">
                    <div className="flex mx-auto gap-[3rem]">
                        {
                            Array.from({ length: 3 }, (_, i) => (
                                <img
                                    src={`/hero/model${i + 1}.png`} alt="avater"
                                    className="w-[5rem] rounded-full h-[5rem]"
                                />
                            ))
                        }
                    </div>
                    <h1 className="text-[5.5rem] mt-[2rem] leading-[6.5rem] text-center text-[#000000] font-[700]">
                        B2B Financial Technology <span className="text-[#1B82E2]">Solutions</span>
                    </h1>
                    <p className="text-[2rem] mt-[2rem] w-[75%] mx-auto text-center text-[#737373] font-[500]">
                        Providing KYC and Direct Debit services for Mortgage Banks & Property Development Firms serving Diaspora customers
                    </p>
                </div>
                <Button className="bg-[#1B82E2] mt-[4rem] px-[2.5rem] rounded-[.5rem] text-black py-[2rem] font-[600]">
                    Contact Us
                </Button>
            </div>
        </section>
    );
}

export default Hero;