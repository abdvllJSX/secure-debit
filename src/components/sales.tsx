interface CardProps {
  text: string;
  image: string;
  idx: number;
};


const Sales = () => {

  const data = [
    {
      text: "KYC and Background checks for new customers living in UK, Europe and US",
      image: "/sales/kyc.svg",
    },
    {
      text: "Credit Reports on customers seeking mortgage facility for credit evaluation purposes",
      image: "/sales/credit.svg",
    },
    {
      text: "Automated Direct Debit to aid Efficient collections in foreign currencies.",
      image: "/sales/automated.svg",
    },
  ];

  
  return (
    <section className="sm:pt-[2rem] px-[2rem] pb-[2rem] sm:px-[7rem]">
      <div className="mx-auto px-4 py-8 max-w-[1900px]">
        <h2 className="text-center sm:mb-[3rem] text-[2.8rem] sm:text-[3rem] leading-[3rem] text-[#1B82E2] font-[500]">
          Sales
        </h2>
        <p className="text-center font-medium text-[1.6rem] sm:text-[2.5rem]  leading-[100%] tracking-[-2%] pb-[5rem] sm:pb-[10rem]  sm:px-[38rem] ">
          {" "}
          SecureDebit offers the following Services that will suit your business
        </p>
        <div className="max-w-[1900px] mx-auto space-y-8">
          {data.map((item, index) => (
            <Card
              key={index}
              {...item}
              idx={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const Card = ({ text, image, idx }: CardProps) => {
  return (
    <div
      className={`flex flex-col-reverse sm:gap-[14rem] gap-[2rem] items-center text-center sm:flex-row  ${idx % 2 ? "sm:flex-row-reverse" : "sm:flex-row"
        }`}
    >
      <img
        src={image}
        alt={`Image ${idx + 1}`}
        className={`rounded-[4rem] w-[33rem] sm:w-[50rem] pb-5 `}
      />

      <div className="flex items-start sm:w-[40rem] flex-col">
        <div className="flex mb-[1rem] justify-center items-center  w-[38.8px] h-[38.8px] rounded-full border border-[#1B82E2] text-black font-bold ">
          <h2 className="tabular-nums font-[400] text-[2rem]">{idx + 1}</h2>
        </div>
        <p className="font-medium sm:mt-[2rem] text-left flex items-start leading-relaxed text-[1.8rem] sm:text-[2.5rem]">
          {text}
        </p>
      </div>
    </div>
  );
};

export default Sales;
