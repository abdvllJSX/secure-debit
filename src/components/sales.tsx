const sales = () => {
  return (
    <div className="sm:pt-[4rem] pt-[3rem] sm:pb-[5rem]">
      <h2 className="text-center sm:mb-[4rem] sm:text-[3rem] text-[2.8rem] text-[#000000] font-[500]">
        <span className="text-[#1B82E2]">Sales</span>
      </h2>
      <div className="flex items-center justify-center">
        <div className=" text-center font-medium text-[18px] md:text-[24px] leading-[100%] tracking-[-2%] w-[467px]  ">
          <h3>
            SecureDebit offers the following Services that will suit your
            business
          </h3>
        </div>
      </div>
      <div className="grid  max-w-[1900px] gap-4 mx-auto w-auto h-auto  mt-[3rem]">
        <div className="grid grid-cols-1 sm:grid-cols-2 ">
          <div className="text-[20px] font-medium leading-[100%] tracking-[-2%] order-1 sm:order-2">
            <div className="flex items-center justify-center w-[38.8px] h-[38.8px] rounded-full border border-[#1B82E2] text-black font-bold ">
              1
            </div>
            <div>
              KYC and Background checks for new customers living in UK, Europe
              and US
            </div>
          </div>
          <div className="w-[382.25px] h-[318.35px] rounded-[31.68px] bg-[#2184E2] order-2 sm:order: 1"></div>
        </div>
      </div>
    </div>
  );
};

export default sales;
