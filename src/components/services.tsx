interface CardProps {
  title: string;
  description: string;
  icon: string;
}

const Services = () => {
  const Cards: CardProps[] = [
    {
      title: "Risk Assessment Support",
      description:
        "Identify creditworthy borrowers, manage the risk involved in extending credit and recover unpaid debt.",
      icon: "risk-assessment",
    },
    {
      title: "Know Your Customer (KYC)",
      description:
        "Know Your Customer (KYC) is a product used to assess and verify the identity of a customer. This involves collecting basic information such as names, Government identity numbers, date of birth, addresses, phone number, national identification number or a valid driver’s licence. This information could also be verified from our credit information database. Our KYC product is a key tool for prequalifying your borrowers.",
      icon: "KYC",
    },
    {
      title: "Credit Reporting",
      description:
        "Our Credit Report helps determine the credit rating and standing of customers before approving credit lines to them. It also gives an insight into all of an individual’s or corporate entity’s credit account summary, with details of open, closed (paid-off), good standing (performing) accounts broken down throughout the report.",
      icon: "credit_reporting",
    },
  ];

  return (
    <section
      id="services"
      className="sm:pt-[2rem] px-[2rem] pb-[2rem] sm:px-[7rem]"
    >
      <h2 className="text-[3rem] leading-[3rem] font-[600] text-[#1B82E2] text-center">
        Services
      </h2>
      <div className="mt-[3rem] sm:hidden  max-w-[1900px] mx-auto">
        <h3 className="text-[2rem] font-[600]">
          <span className="uppercase text-[#1B82E2]">kyc - </span> Credit and
          Background Checks
        </h3>
      </div>

      <div className="mt-[3rem] hidden sm:block  max-w-[1900px] mx-auto">
        <h3 className="uppercase text-[1.6rem] text-[#1B82E2] font-[600]">
          kyc
        </h3>
        <h3 className="text-[2.5rem] font-[500]">
          Credit and Background Checks
        </h3>
      </div>
      <div className="sm:mt-[5rem] mt-[2rem] max-w-[1900px] mx-auto grid sm:grid-cols-3  gap-[2rem]">
        {Cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </section>
  );
};
const Card = ({ title, description, icon }: CardProps) => {
  return (
    <div className="bg-[#F5F5F5] rounded-[2rem] pt-[4rem] pb-[5rem] px-[2.5rem]">
      <div className="sm:mb-[9rem] mb-[7rem]">
        <img src={`/services/${icon}.png`} alt="icon" className="w-[9rem]" />
      </div>
      <h2 className="text-[2.5rem] font-[500]">{title}</h2>
      <p className="sm:text-[1.8rem] text-[1.7rem] text-[#595959]">
        {description}
      </p>
    </div>
  );
};

export default Services;
