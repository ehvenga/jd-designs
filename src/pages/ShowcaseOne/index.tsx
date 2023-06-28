import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Img, Text } from "components";

const ShowcaseOnePage: React.FC = () => {
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
                                src="images/img_frame9141_504x252.png"
                                alt="frame9141_Two"
                              />
                            </div>
                          </div>
                          <div className="absolute bg-white-A700 bottom-[0] h-[852px] right-[0] rounded-[3px] w-[82%] md:w-full">
                            <Img
                              className="h-[852px] m-auto object-cover rounded-[3px] w-full"
                              src="images/img_frame9141_852x739.png"
                              alt="frame9141_Three"
                            />
                            <div className="absolute bg-white-A700 flex flex-col h-full inset-[0] items-center justify-center m-auto rounded-[3px] w-full">
                              <Img
                                className="h-[852px] md:h-auto object-cover rounded-[3px] w-full"
                                src="images/img_frame9141_1.png"
                                alt="frame9141_Four"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="absolute bg-white-A700 flex flex-col items-center justify-start right-[6%] rounded-[3px] top-[0] w-3/5">
                          <Img
                            className="h-[323px] md:h-auto object-cover rounded-[3px] w-full"
                            src="images/img_frame9141_323x546.png"
                            alt="frame9141_Five"
                          />
                        </div>
                        <div className="absolute bg-white-A700 bottom-[0] flex flex-col items-center justify-start left-[0] rounded-[3px] w-[53%]">
                          <Img
                            className="h-[504px] md:h-auto object-cover rounded-[3px] w-full"
                            src="images/img_frame9141_504x481.png"
                            alt="frame9141_Six"
                          />
                        </div>
                      </div>
                      <div className="bg-white-A700 flex flex-col items-center justify-start mt-[-177.08px] mx-auto rounded-[3px] w-[55%] z-[1]">
                        <Img
                          className="h-[504px] md:h-auto object-cover rounded-[3px] w-full"
                          src="images/img_frame9141_504x496.png"
                          alt="frame9141_Seven"
                        />
                      </div>
                    </div>
                    <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start mb-[750px] md:mt-0 mt-[143px] rounded-[3px] w-[13%] md:w-full">
                      <Img
                        className="h-[504px] md:h-auto object-cover rounded-[3px] w-full"
                        src="images/img_home321.png"
                        alt="home321"
                      />
                    </div>
                  </div>
                  <div className="absolute bg-white-A700 flex flex-col items-center justify-start pb-[61px] right-[0] rounded-[3px] top-[10%] w-1/2">
                    <Img
                      className="h-[858px] md:h-auto object-cover rounded-tl-[3px] rounded-tr-[3px] w-full"
                      src="images/img_frame9141_858x585.png"
                      alt="frame9141_Eight"
                    />
                  </div>
                </div>
                <div className="absolute bg-white-A700 flex flex-col items-center justify-start right-[0] rounded-[3px] top-[0] w-[32%]">
                  <Img
                    className="h-80 md:h-auto object-cover rounded-[3px] w-full"
                    src="images/img_frame9141_320x370.png"
                    alt="frame9141_Nine"
                  />
                </div>
              </div>
              <div className="absolute bg-white-A700 flex flex-col items-center justify-start left-[0] rounded-[3px] top-[0] w-[38%]">
                <Img
                  className="h-[371px] md:h-auto object-cover rounded-[3px] w-full"
                  src="images/img_frame9141_371x439.png"
                  alt="frame9141_Ten"
                />
              </div>
            </div>
            <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[7%] w-[86%]">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="bg-black-900 flex flex-col items-center justify-center outline outline-[1px] outline-white-A700 p-[59px] md:px-10 sm:px-5 rounded-lg w-full">
                  <div className="flex flex-col font-inter items-center justify-start mt-[5px]">
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
                    className="leading-[80.00px] mt-[42px] md:text-5xl text-[70px] text-center text-white-A700 w-full"
                    size="txtMontserratRegular70"
                  >
                    <span className="text-white-A700 font-inter font-medium">
                      Build your{" "}
                    </span>
                    <span className="text-white-A700 font-inter font-medium">
                      Architecture{" "}
                    </span>
                    <span className="text-white-A700 font-inter font-medium">
                      website in minutes
                    </span>
                  </Text>
                  <div className="flex sm:flex-col flex-row font-notosans gap-[21px] items-center justify-center mb-[3px] mt-[57px] w-[66%] md:w-full">
                    <div className="flex flex-col items-center justify-end py-[21px]">
                      <Text
                        className="mt-1.5 sm:text-[34.53px] md:text-[36.53px] text-[38.53px] text-center text-white-A700"
                        size="txtNotoSansRegular3853"
                      >
                        Well Organized
                      </Text>
                      <Text
                        className="sm:text-[21.35px] md:text-[23.35px] text-[25.35px] text-center text-white-A700"
                        size="txtNotoSansRegular2535"
                      >
                        Layers
                      </Text>
                    </div>
                    <div className="flex flex-col gap-2.5 items-center justify-end p-[22px] sm:px-5 w-[49%] sm:w-full">
                      <Img
                        className="h-10 mt-[7px] w-10"
                        src="images/img_fitscreen.svg"
                        alt="fitscreen"
                      />
                      <Text
                        className="sm:text-[21.35px] md:text-[23.35px] text-[25.35px] text-center text-white-A700"
                        size="txtNotoSansRegular2535"
                      >
                        High Resolution
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowcaseOnePage;
