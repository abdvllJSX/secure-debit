// THE BELOW IS A COMPONENT IT SHOULD BE PASACAL CASED (STARTS WITH A CAPITAL LETTER)
// todo: 
//   * CHANGE THE COMPONENT NAME TO Customers


const customers = () => {
  return (
    <div className="sm:pt-[4rem] pt-[3rem] sm:pb-[5rem]">
      <h2 className="text-center sm:mb-[4rem] sm:text-[3rem] text-[2.8rem] text-[#000000] font-[500]">
        <span className="text-[#1B82E2]">Our</span> Customers
      </h2>

      {/*
       * todo:
       *  EXTRACT THE BELOW INTO A SUB COMPONENT YOU CAN CKECK THE PREVIOUS CODE I HAVE WRITTEN AS REFERENCE (you can do it with chat gpt if you dont know how)
       * DOWNLOAD THE IMAGES FROM FIGMA, PUT IN PUBLIC FOLDER AND REFRENCE THEM IN THE CODE
       * DO NOT STYLE IN PIXELS USE THE REM EQUILENT INSTEAD 
       */}
      <div className="sm:mt-[5rem] mt-[2rem] max-w-[1900px] mx-auto grid sm:grid-cols-2  gap-[2rem]">
        <div className=" max-w-[1900px] h-auto sm:h-[768px] bg-[#F5F5F5] rounded-[24.31px] sm:rounded-[40px]">
          <img

            src="https://www.figma.com/file/vLCmfMtgaGiBdNBpgSm0aK/image/185159130e4ab0ea3a7ada5683e75d0f79836507"
            alt="sample image"
            className="  w-full h-[186.58px] sm:h-[307px] object-cover rounded-t-[24.31px]"
          />
          <div className="m-7 md:m-10  h-auto gap-[16.41px]  sm:gap-[27px] sm:ml-[50px] sm:mt-[16px] ">
            {/* 
            THE FONT SIZE ID TOO BIG CHECK HOW I HAVE STYLED PREVIOUYS HEADINGS AND ADJUST ACCORDINGLY
             */}
            <h1 className="p-5 md:p-8 text-[20px] md:text-[32px] leading-[100%] tracking-[-2%] font-semibold">
              Property Development
            </h1>
            <ul className=" ml-8 sm:ml-15 space-y-[16.41px] sm:space-y-[27px]">
              <li className="flex items-start text-[14px] sm:text-[24px]  font-normal leading-[100%] tracking-[-2%] ">
                <span className=" mr-5 ">&bull;</span>
                <span className="text-[14px] md:text-[24px]  font-normal leading-[100%] tracking-[-2%]">
                  For your properties in Nigeria, you are marketing and
                  targeting Diaspora
                </span>
              </li>
              <li className="flex items-start">
                <span className=" mr-5">&bull;</span>{" "}
                <span className="text-[14px] sm:text-[24px]  font-normal leading-[100%] tracking-[-2%]">
                  Your customers pay in installments
                </span>
              </li>
              <li className="flex items-start">
                <span className=" mr-5">&bull;</span>{" "}
                <span className="text-[14px] md:text-[24px]  font-normal leading-[100%] tracking-[-2%]">
                  For money laundering and counter terrorism financing
                  compliance, you desire to conduct KYC and Background checks on
                  prospects at the point of application and on-boarding
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-[1900px] h-auto sm:h-[768px] bg-[#F5F5F5] rounded-[24.31px] sm:rounded-[40px]">
          <img
            src="https://s3-alpha-sig.figma.com/img/8100/f833/5352a01f84137703583cecce57006c88?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=uBQPCPBinQ8vvA6GPLs~SKiYjX44tc57p9Nsxq5e2N3vjclnelgsjQ-EQ2gTVUUYeJ1czsbCYdGIZ~19hOdzeALzNkbazWe3viRemPLNFa7ypTvOSO9m8WasuqECHwSWY3V21jQ3iAYAr9XSbYNrJ3sPuJDULBmqJST5jPghiORsrTbzX1LVSEnVbwJ4VTzf005Y7PyLs6TV-64ZeyiIIJACurIcVCCaFdr65nujj8gXs5529ZAz8nFkaPON95UoOOB7ztECvMWSIfLjrTi6I-V1henJMRv-PjVjKJvjDt4t8w-otyXNCbaLo43AYxYWJe8mO8bIQxGnTnVAUwuR8A__"
            alt="sample image"
            className="  w-full h-[186.58px] sm:h-[307px] object-cover rounded-t-[24.31px]"
          />
          <div className="m-7 sm:m-10  gap-[16.41px]  sm:gap-[27px] sm:ml-[50px] sm:mt-[16px] ">
            <h1 className="p-5 md:p-8 text-[20px] md:text-[32px] leading-[100%] tracking-[-2%] font-semibold">
              Financial Institutions
            </h1>
            <ul className=" ml-8 md:ml-15 space-y-[16.41px] md:space-y-[27px]">
              <li className="flex items-start ">
                <span className=" mr-5">&bull;</span>
                <span className="text-[14px] md:text-[24px]  font-normal leading-[100%] tracking-[-2%]">
                  Your customers are in diaspora and looking to buy properties
                  in Nigeria using mortgage financing
                </span>
              </li>
              <li className="flex items-start">
                <span className=" mr-5">&bull;</span>{" "}
                <span className="text-[14px] md:text-[24px]  font-normal leading-[100%] tracking-[-2%]">
                  Your are required by the Central Bank to conduct mandatory KYC
                  checks before account opening and on-boarding customers in
                  diaspora
                </span>
              </li>
              <li className="flex items-start">
                <span className=" mr-5">&bull;</span>{" "}
                <span className="text-[14px] md:text-[24px]  font-normal leading-[100%] tracking-[-2%]">
                  For Credit Risk Management purposes, you will like to have
                  Automated Direct Debit mandates deployed for collections of
                  mortgage repayments
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default customers;
