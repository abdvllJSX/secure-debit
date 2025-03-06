const About = () => {
    return (
        <section id="about" className="sm:py-[6rem] px-[2rem] py-[7rem] sm:px-[7rem]">
            <div className="max-w-[1900px] mx-auto items-start flex flex-col sm:flex-row gap-[2rem]">
                <img
                    src="/about/explore1.png"
                    alt="About image"
                    className="w-[40rem]"
                />

                <div className="bg-[#F5F5F5] sm:translate-y-[4rem] rounded-[2rem] pt-[1.5rem] pb-[4rem]">
                    <h2 className="text-[3rem] text-center font-[600]">
                        About <span className="text-[#1B82E2]">Us</span>
                    </h2>
                    <div className="sm:text-[2rem] text-[1.7rem] sm:leading-[2.7rem] sm:mt-[2rem] mt-[.5rem] text-center sm:w-[82%] text-[#595959] w-[93%] mx-auto flex flex-col gap-[1.5rem]">
                        <p className="">
                            SecureDebit is a UK registered technology company that is focused on offering the following services:
                        </p>

                        <div className="">
                            <p className="">
                                • KYC (Credit & Background checks)
                            </p>
                            <p className="">
                                • Direct Debit (for Loan Repayments & Installment payments)
                            </p>
                        </div>


                        <p className="">
                            These are B2B services offerings targeted at Mortgage Banks & Property Development Firms in Nigeria who services Diaspora customers - Nigerians living in UK, Europe and the US
                        </p>
                    </div>
                </div>

                <img
                    src="/about/explore2.png"
                    alt="About image"
                    className="w-[40rem]"
                />
            </div>
        </section>
    );
}

export default About;