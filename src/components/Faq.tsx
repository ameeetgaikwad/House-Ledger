import React, { useState } from "react";

const FAQ = () => {
  const faqData = [
    {
      question: "Any terms and conditions ?",
      answer: "You must own a web3 wallet for transaction",
    },
    { question: "How little can we start with ", answer: "As little as 10 $" },
    {
      question: "Who are my other other investors ?",
      answer:
        "Anyone who buys a token for this property will have a joint ownership of this property",
    },
    {
      question: "Do I have to pay this amount upfront",
      answer: "Yes ",
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div
      className={`min-h-[80vh] w-[90%] mx-auto flex flex-col text-white py-20 items-center justify-center border-br pt-40`}
    >
      <p className=" flex justify-center mb-10 font-bold text-4xl ml-10">
        <span className="text-[#1252AE]">F.A.Q.</span>
      </p>
      <div className=" mx-auto   text-white md:w-[40%] w-[80%]  overflow-hidden py-4 rounded-xl   ">
        {faqData.map((item, index) => (
          <div
            key={index}
            className=" rounded-3xl  bg-blue-500 my-4 select-none py-2 px-4 "
          >
            <div
              className="cursor-pointer flex items-center justify-between"
              onClick={() => toggleAnswer(index)}
            >
              <h3 className="font-bold  w-[750px] p-4 rounded-full border-b-4 border-r-4 border-p-dark cursor-pointer  ">
                {item.question}
              </h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="50"
                height="50"
                viewBox="0,0,256,256"
              >
                <g
                  fill="#ffffff"
                  fill-rule="nonzero"
                  stroke="none"
                  stroke-width="1"
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  stroke-miterlimit="10"
                  stroke-dasharray=""
                  stroke-dashoffset="0"
                  font-family="none"
                  font-weight="none"
                  font-size="none"
                  text-anchor="none"
                  className={` p-5 m-5 w-10 rounded-full cursor-pointer`}
                >
                  <g transform="scale(5.12,5.12)">
                    <path d="M25,2c-12.6907,0 -23,10.3093 -23,23c0,12.69071 10.3093,23 23,23c12.69071,0 23,-10.30929 23,-23c0,-12.6907 -10.30929,-23 -23,-23zM25,4c11.60982,0 21,9.39018 21,21c0,11.60982 -9.39018,21 -21,21c-11.60982,0 -21,-9.39018 -21,-21c0,-11.60982 9.39018,-21 21,-21zM24,13v11h-11v2h11v11h2v-11h11v-2h-11v-11z"></path>
                  </g>
                </g>
              </svg>
            </div>
            {activeIndex === index && <p className="my-2  ">{item.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
