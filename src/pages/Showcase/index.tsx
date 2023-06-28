import React from "react";

import { Img, Text } from "components";

const ShowcasePage: React.FC = () => {
  return (
    <>
      <div className="bg-blue_gray-900 flex flex-col items-center justify-end mx-auto pt-[43px] md:px-10 sm:px-5 px-[43px] w-full">
        <div className="flex flex-col font-inter items-center justify-start">
          <Text
            className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
            size="txtInterBold28"
          >
            <>
              STRUCTURA <br />
              DESIGN C0.
            </>
          </Text>
        </div>
        <Text
          className="mt-4 md:text-5xl text-[63.3px] text-center text-white-A700"
          size="txtInterRegular633"
        >
          Architecture Template Kit
        </Text>
        <Text
          className="mt-[5px] sm:text-[19.24px] md:text-[21.24px] text-[23.24px] text-center text-white-A700"
          size="txtManropeRegular2324"
        >
          Modern page in one package. Ready to use.
        </Text>
        <div className="h-[1663px] md:h-[1726px] max-w-[1006px] mt-[63px] mx-auto relative w-full">
          <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[8%] w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
              <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start rounded-[3px] shadow-bs2 w-[42%] md:w-full">
                <Img
                  className="h-[530px] md:h-auto object-cover rounded-[3px] w-full"
                  src="images/img_frame9141.png"
                  alt="frame9141"
                />
              </div>
              <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start rounded-[3px] shadow-bs2 w-[42%] md:w-full">
                <Img
                  className="h-[530px] md:h-auto object-cover rounded-[3px] w-full"
                  src="images/img_frame9141_530x414.png"
                  alt="frame9141_One"
                />
              </div>
            </div>
          </div>
          <Img
            className="absolute h-[1663px] inset-[0] justify-center m-auto object-cover w-[42%]"
            src="images/img_home33.png"
            alt="homeThirtyThree"
          />
        </div>
      </div>
    </>
  );
};

export default ShowcasePage;
