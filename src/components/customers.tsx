interface CardProps {
  title: string;
  image: string;
  items: string[];
}


const Card = ({ image, items, title }: CardProps) => {
  return (
    <div className="bg-[#F5F5F5] sm:pb-[3rem] pb-[2rem] rounded-[2rem]">
      <img
        src={image}
        alt={title}
        className="w-full h-auto sm:h-full rounded-t-[2rem] object-cover max-h-[27rem]"
      />
      <div className="sm:p-[2rem] p-[1.5rem] grid gap-[1rem] sm:gap-[1.5rem]">
        <h3 className="text-[2.5rem] font-[600] sm:mt-[2rem] ml-[1rem] sm:ml-[1.8rem]">
          {title}
        </h3>
        <ul className="space-y-[1.5rem] sm:space-y-[2rem] ml-[1.5rem] sm:ml-[2.5rem]">
          {items.map((item, index) => (
            <li key={index} className="flex items-start max-w-[45rem]">
              <span className="mr-4">&bull;</span>
              <span className="sm:text-[1.8rem] text-[1.7rem] text-[#595959]">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Customers = () => {
  const cards = [
    {
      title: "Property Development",
      image: "/customer/customer1.png",
      items: [
        "For your development projects and customers on instalment payments",
        " Your customers pay in installments",
        "For money laundering, compliance, KYC and Background checks on prospecting buyers at the point of application and on-boarding",
      ],
    },
    {
      title: "Financial Institutions",
      image: "/customer/customer2.png",
      items: [
        "Mandatory KYC and AML checks before account opening and on-boarding customers",
        "For Credit Report checks and Automated Direct Debit mandates deployed for collections of mortgage repayments",
        "For Credit Risk Management purposes, you will like to have Automated Direct Debit mandates deployed for collections of mortgage repayments",
      ],
    },
  ];

  return (
    <section className="sm:pt-[2rem] sm:mt-[3rem] px-[2rem] pb-[2rem] sm:px-[7rem]">
      <div className="mx-auto px-4 py-8 max-w-[1900px]">
        <h2 className="text-center sm:mb-[4rem] sm:text-[3rem] text-[2.8rem] text-[#000000] font-[500]">
          <span className="text-[#1B82E2]">Our</span> Customers
        </h2>
        <div className="sm:mt-[5rem] mt-[2rem]  mx-auto grid sm:grid-cols-2  gap-[2rem]">
          {cards.map((card, index) => (
            <Card
              key={index}
              {...card}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Customers;
