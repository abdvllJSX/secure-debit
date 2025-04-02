import Customers from "./customers.tsx";
import Sales from "./sales.tsx";

interface CardProps {
  title: string;
  description: string;
  icon: string;
}

interface MethodsProps {
  title: string;
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

  const methods = [
    {
      title: "Reduced Risk of non-payment",
      icon: "risk",
    },
    {
      title: "Enhanced budgeting and cash flow control",
      icon: "payment",
    },
    {
      title: "Lower processing costs",
      icon: "reduce",
    },
    {
      title: "Increased security and fraud detection ",
      icon: "money-search",
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
      <Customers />
      <Sales />
      <div className="pt-[3.5rem] max-w-[1900px] mx-auto pb-[5rem] sm:pb-[7rem] sm:rounded-[4rem] rounded-[2rem] mt-[5rem] sm:px-[4rem] bg-[#F5F5F5]">
        <h3 className="text-center text-[2rem] sm:text-[3rem]">
          Direct <span className="text-[#1B82E2] font-[600]">Debit</span>{" "}
          Services
        </h3>

        <p className="sm:mt-[2.5rem] mt-[1rem] sm:w-[80%] w-[92%] text-[1.7rem] sm:text-[1.8rem] text-center mx-auto text-[#737373]">
          The methods available for loan collections are just as diverse as the
          borrowers themselves. One method that stands out for its reliability
          and directness is Direct Debit. This payment method, accessible to
          lenders, facilitates the retrieval of funds from a customer's account
          precisely when their loan payment is due.
        </p>

        <p className="w-[80%] text-[1.7rem] sm:text-[1.8rem] text-center mx-auto text-[#737373]">
          with direct debit as a payment method, sellers gain a predictable and
          efficient way to collect payments directly from customers’ accounts.
        </p>

        <div className="mt-[9rem]">
          <p className="text-center text-[1.8rem] sm:text-[2rem] font-[500] text-[#737373] w-[80%] mx-auto">
            Why you should use Direct Debit Collection Method
          </p>

          <div className="grid mt-[3rem] px-[1rem] grid-cols-2 sm:grid-cols-4 sm:gap-[2rem] gap-[1.2rem]">
            {methods.map((method, index) => (
              <Methods key={index} {...method} />
            ))}
          </div>
        </div>
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

const Methods = ({ title, icon }: MethodsProps) => {
  return (
    <div className="bg-[#FFFFFF] rounded-[1.5rem] py-[3rem]">
      <img
        src={`/services/${icon}.svg`}
        alt="icon"
        className="mb-[2rem] mx-auto sm:w-[5rem] w-[3.5rem] h-[3.5rem] sm:h-[5rem]"
      />
      <p className="sm:max-w-[18rem] sm:w-[100%] w-[87%] mx-auto sm:text-[1.8rem] text-[1.4rem] text-center font-[500]">
        {title}
      </p>
    </div>
  );
};
export default Services;
