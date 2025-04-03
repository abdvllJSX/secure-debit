const data = [
  {
    text: "KYC and Background checks for new customers living in UK, Europe and US",
    image: "/sales/verify.png",
  },
  {
    text: "Credit Reports on customers seeking mortgage facility for credit evaluation purposes",
    image: "/sales/credit-card.png",
  },
  {
    text: "Automated Direct Debit to aid Efficient collections in foreign currencies.",
    image: "/sales/robotic-process-automation 1.png",
  },
];

const Sales = () => {
  return (
    <section className="sm:pt-[2rem] px-[2rem] pb-[2rem] sm:px-[7rem]">
      <div className="mx-auto px-4 py-8 max-w-[1900px]">
        <h2 className="text-center sm:mb-[4rem] text-[2.8rem] sm:text-[3rem] leading-[3rem] text-[#1B82E2] font-[500]">
          Sales
        </h2>
        <p className="text-center font-medium text-[1.6rem] sm:text-[2.5rem]  leading-[100%] tracking-[-2%] pt-10 pb-[5rem] sm:pb-[10rem]  sm:px-[38rem] ">
          {" "}
          SecureDebit offers the following Services that will suit your business
        </p>
        <div className="max-w-[1900px] mx-auto space-y-8">
          {data.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col-reverse items-center text-center space-y-4 sm:space-y-0 sm:flex-row  ${
                index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
              }`}
            >
              <img
                src={item.image}
                alt={`Image ${index + 1}`}
                className={`rounded-[4rem] w-[33rem] sm:w-[45rem] sm:h-[36.8rem] h-[26.8rem] pb-5 `}
              />
              <div className="flex items-start flex-col sm:px-[30rem]">
                <div className="flex  justify-center items-center  w-[38.8px] h-[38.8px] rounded-full border border-[#1B82E2] text-black font-bold ">
                  {index + 1}
                </div>
                <div className="py-5 font-medium text-left flex items-start leading-relaxed text-[1.8rem] sm:text-[2.5rem]">
                  {item.text}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sales;
