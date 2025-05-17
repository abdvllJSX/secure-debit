import { Button } from "./ui/button";
import Modal from "./modal";

const CTA = () => {
    return (
        <section className="sm:px-[7rem] px-[2rem] sm:pb-[7rem] mt-[4rem]">
            <div className="flex max-w-[1900px] overflow-hidden mx-auto justify-between rounded-[2rem] sm:pl-[4rem] px-[2rem] sm:px-[0] bg-[#B8D8F6] py-[5rem] sm:py-0 items-center">
                <div className="flex flex-col">
                    <h2 className="sm:text-[4rem] text-center sm:text-start text-[2.5rem] leading-[3.2rem] sm:leading-[4rem] sm:max-w-[45rem] font-[600] text-[#000000]">
                        Ready to streamline your financial processes?
                    </h2>
                    <p className="sm:text-[2rem] text-[1.6rem] text-center sm:text-start text-[#737373] font-[500] max-w-[55rem] mt-[2rem]">
                        Contact us today to learn how SecureDebit's KYC and Credit Debit services can benefit your business.
                    </p>

                    <Modal>
                        <Button className="mt-[3rem] sm:w-fit mx-auto hover:bg-[#092E4F] hover:text-white transition-all duration-100 sm:mx-[0] px-[3rem] rounded-[.5rem] cursor-pointer bg-[#1B82E2] text-[#000000]  text-[1.6rem] font-[600] sm:py-[2rem] py-[2.2rem]">
                            Contact Us
                        </Button>
                    </Modal>

                </div>

                <img
                    src="/common/logo2.svg"
                    alt="logo"
                    className="hidden sm:block w-[40rem]"
                />
            </div>
        </section>
    );
}

export default CTA;