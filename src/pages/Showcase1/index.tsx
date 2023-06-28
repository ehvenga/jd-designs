import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Img } from "components";

const Showcase1Page: React.FC = () => {
  return (
    <>
      <div className="bg-gray-100 flex h-[780px] justify-end mx-auto relative w-full">
        <div className="bg-white-A700 flex flex-col h-full items-center justify-end ml-[150px] mt-auto md:px-5 rounded-[3px] w-[30%]">
          <Img
            className="h-[376px] md:h-auto object-cover rounded-[3px] w-full"
            src="images/img_frame9141_376x341.png"
            alt="frame9141"
          />
        </div>
        <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-end mx-auto rotate-[35deg] w-full">
          <div className="h-[1398px] md:h-[2146px] md:px-5 relative w-full">
            <div className="h-[1398px] md:h-[2146px] m-auto w-full">
              <div className="h-[1398px] md:h-[2146px] m-auto w-full">
                <div className="flex md:flex-col flex-row md:gap-10 h-full items-start justify-between m-auto w-full">
                  <div className="flex flex-col relative w-[78%] md:w-full">
                    <div className="h-[1070px] md:h-[852px] mx-auto w-full">
                      <div className="absolute h-[1045px] md:h-[852px] inset-[0] justify-center m-auto w-full">
                        <div className="absolute md:h-[504px] h-[742px] left-[0] top-[0] w-[28%]">
                          <Sidebar className="!sticky !w-[23px] flex h-screen md:hidden justify-start left-[0] overflow-auto rounded-[3px] top-[0]">
                            <Img
                              className="h-[415px] md:h-auto object-cover rounded-[3px] w-full"
                              src="images/img_frame9141_415x23.png"
                              alt="frame9141_One"
                            />
                          </Sidebar>
                          <div className="absolute bg-white-A700 bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto rounded-[3px] w-full">
                            <Img
                              className="h-[504px] md:h-auto object-cover rounded-[3px] w-full"
                              src="images/img_frame9141_2.png"
                              alt="frame9141_Two"
                            />
                          </div>
                        </div>
                        <div className="absolute bg-white-A700 bottom-[0] flex flex-col items-center justify-start right-[0] rounded-[3px] w-[82%]">
                          <Img
                            className="h-[852px] md:h-auto object-cover rounded-[3px] w-full"
                            src="images/img_frame9141_3.png"
                            alt="frame9141_Three"
                          />
                        </div>
                      </div>
                      <div className="absolute bg-white-A700 flex flex-col items-center justify-start right-[6%] rounded-[3px] top-[0] w-3/5">
                        <Img
                          className="h-[333px] md:h-auto object-cover rounded-[3px] w-full"
                          src="images/img_frame9141_333x546.png"
                          alt="frame9141_Four"
                        />
                      </div>
                      <div className="absolute bg-white-A700 bottom-[0] flex flex-col items-center justify-start left-[0] rounded-[3px] w-[53%]">
                        <Img
                          className="h-[504px] md:h-auto object-cover rounded-[3px] w-full"
                          src="images/img_frame9141_504x481.png"
                          alt="frame9141_Five"
                        />
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-col items-center justify-start mt-[-177.08px] mx-auto rounded-[3px] w-[55%] z-[1]">
                      <Img
                        className="h-[504px] md:h-auto object-cover rounded-[3px] w-full"
                        src="images/img_frame9141_504x496.png"
                        alt="frame9141_Six"
                      />
                    </div>
                  </div>
                  <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start mb-[750px] md:mt-0 mt-[143px] rounded-[3px] w-[13%] md:w-full">
                    <Img
                      className="h-[504px] md:h-auto object-cover rounded-[3px] w-full"
                      src="images/img_frame9141_504x141.png"
                      alt="frame9141_Seven"
                    />
                  </div>
                </div>
                <div className="absolute bg-white-A700 flex flex-col items-center justify-start pb-[61px] right-[0] rounded-[3px] top-[11%] w-1/2">
                  <Img
                    className="h-[858px] md:h-auto object-cover rounded-tl-[3px] rounded-tr-[3px] w-full"
                    src="images/img_frame9141_4.png"
                    alt="frame9141_Eight"
                  />
                </div>
              </div>
              <div className="absolute bg-white-A700 flex flex-col items-center justify-start right-[0] rounded-[3px] top-[0] w-[32%]">
                <Img
                  className="h-80 md:h-auto object-cover rounded-[3px] w-full"
                  src="images/img_frame9141_5.png"
                  alt="frame9141_Nine"
                />
              </div>
            </div>
            <div className="absolute bg-white-A700 flex flex-col items-center justify-start left-[0] rounded-[3px] top-[0] w-[38%]">
              <Img
                className="h-[381px] md:h-auto object-cover rounded-[3px] w-full"
                src="images/img_frame9141_381x439.png"
                alt="frame9141_Ten"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Showcase1Page;
