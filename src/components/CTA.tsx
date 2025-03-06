import { Button } from "./ui/button";

const CTA = () => {
    return (
        <section className="px-[7rem] pb-[7rem] mt-[4rem]">
            <div className="flex max-w-[1900px] overflow-hidden mx-auto justify-between rounded-[2rem] pl-[4rem] bg-[#B8D8F6] items-center">
                <div className="">
                    <h2 className="text-[4rem] leading-[4rem] max-w-[45rem] font-[600] text-[#000000]">
                        Ready to streamline your financial processes?
                    </h2>
                    <p className="text-[2rem] text-[#737373] font-[500] max-w-[55rem] mt-[2rem]">
                        Contact us today to learn how SecureDebit's KYC and Direct Debit services can benefit your business.
                    </p>

                    <Button className="mt-[3rem] px-[3rem] rounded-[.5rem] bg-[#1B82E2] text-[#000000] font-[600] py-[2rem]">
                        Contact Us
                    </Button>
                </div>

                <img
                    src="/common/logo2.svg"
                    alt="logo"
                    className="w-[40rem]"
                />
            </div>
        </section>
    );
}

export default CTA;