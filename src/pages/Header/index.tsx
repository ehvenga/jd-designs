import React from "react";

import { Button, Img, List, PagerIndicator, Text } from "components";

const HeaderPage: React.FC = () => {
  return (
    <>
      <div className="bg-blue_gray-100 font-inter h-[1500px] mx-auto md:pl-10 sm:pl-5 pl-[125px] relative w-full">
        <div className="absolute flex flex-col h-max inset-y-[0] items-center justify-start left-[8%] my-auto w-[44%]">
          <div className="flex flex-col md:gap-10 gap-[213px] items-start justify-start w-full">
            <div className="flex flex-col md:gap-10 gap-[163px] items-start justify-start w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between md:ml-[0] ml-[5px] w-full">
                <div className="bg-white-A700 flex flex-col h-[136px] md:h-auto items-center justify-center rounded-[40px] shadow-bs w-[136px]">
                  <div className="flex flex-col items-center justify-start w-[43%]">
                    <div className="flex flex-col items-start justify-start w-full">
                      <div className="flex flex-row items-center justify-evenly w-full">
                        <Img
                          className="h-[29px] w-[29px]"
                          src="images/img_volume.svg"
                          alt="volume"
                        />
                        <Img
                          className="h-[29px] w-[29px]"
                          src="images/img_volume_deep_orange_300.svg"
                          alt="volume_One"
                        />
                      </div>
                      <div className="flex flex-row items-center justify-evenly w-full">
                        <Img
                          className="h-[29px] w-[29px]"
                          src="images/img_vector.svg"
                          alt="vector"
                        />
                        <div className="bg-light_blue-400 h-[29px] rounded-[14px] w-[29px]"></div>
                      </div>
                      <div className="bg-green-A400 h-[29px] w-[29px]"></div>
                    </div>
                  </div>
                </div>
                <Button className="bg-white-A700_3f cursor-pointer leading-[normal] min-w-[795px] md:min-w-full md:mt-0 my-[23px] py-[15px] rounded-[45px] text-5xl sm:text-[38px] md:text-[44px] text-black-900 text-center">
                  Landing Page Figma Template
                </Button>
              </div>
              <Text
                className="leading-[152.00px] md:text-5xl text-[152.97px] text-black-900 tracking-[-3.69px]"
                size="txtInterMedium15297"
              >
                <>
                  Architecture
                  <br />
                  Landing
                  <br />
                  Page
                </>
              </Text>
            </div>
            <div className="flex flex-col gap-8 items-start justify-start max-w-[788px] md:ml-[0] ml-[5px] w-full">
              <div className="flex sm:flex-col flex-row gap-6 items-center justify-start w-full">
                <Button className="bg-white-A700_3f flex h-12 items-center justify-center p-3 rounded-[16px] w-12">
                  <Img src="images/img_checkmark.svg" alt="checkmark" />
                </Button>
                <Text
                  className="flex-1 text-5xl sm:text-[38px] md:text-[44px] text-black-900 w-auto"
                  size="txtInterRegular48"
                >
                  Local style ready
                </Text>
              </div>
              <div className="flex sm:flex-col flex-row gap-6 items-center justify-start w-full">
                <Button className="bg-white-A700_3f flex h-12 items-center justify-center p-3 rounded-[16px] w-12">
                  <Img src="images/img_checkmark.svg" alt="checkmark_One" />
                </Button>
                <Text
                  className="flex-1 text-5xl sm:text-[38px] md:text-[44px] text-black-900 w-auto"
                  size="txtInterRegular48"
                >
                  High Resolution
                </Text>
              </div>
              <div className="flex sm:flex-col flex-row gap-6 items-center justify-start w-full">
                <Button className="bg-white-A700_3f flex h-12 items-center justify-center p-3 rounded-[16px] w-12">
                  <Img src="images/img_checkmark.svg" alt="checkmark_Two" />
                </Button>
                <Text
                  className="flex-1 text-5xl sm:text-[38px] md:text-[44px] text-black-900 w-auto"
                  size="txtInterRegular48"
                >
                  Well organized layer
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-[0] h-[5075px] sm:h-[5151px] md:h-[5197px] right-[0] w-[54%] md:w-full">
          <div className="absolute bg-white-A700 h-[1582px] right-[0] shadow-bs1 top-[0] w-[70%] md:w-full">
            <Img
              className="h-[1582px] m-auto object-cover w-full"
              src="images/img_automate1.png"
              alt="automateOne"
            />
            <Img
              className="absolute h-[1582px] inset-[0] justify-center m-auto object-cover w-full"
              src="images/img_home31.png"
              alt="homeThirtyOne"
            />
          </div>
          <div className="absolute bottom-[0] flex flex-col items-center justify-start left-[0] pb-[1008px] shadow-bs1 w-[70%]">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="h-[3397px] md:h-[3642px] sm:h-[3925px] relative w-full">
                <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <div className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-end justify-start p-[11px] w-[85%] md:w-full">
                      <div
                        className="bg-cover bg-no-repeat flex flex-col h-[18px] items-center justify-start ml-12 md:ml-[0] p-1.5 w-[3%] md:w-full"
                        style={{
                          backgroundImage: "url('images/img_group19.svg')",
                        }}
                      >
                        <Img
                          className="h-0.5 w-0.5"
                          src="images/img_vector_light_blue_a700_2x2.svg"
                          alt="vector_Three"
                        />
                      </div>
                      <Img
                        className="h-[13px] mb-1 ml-2 md:ml-[0] w-3.5"
                        src="images/img_clock.svg"
                        alt="clock"
                      />
                      <Img
                        className="h-[9px] md:mt-0 my-1 w-[9px]"
                        src="images/img_lock.svg"
                        alt="lock"
                      />
                      <Img
                        className="h-3.5 mb-1"
                        src="images/img_vector_light_blue_a700_14x4.svg"
                        alt="vector_Four"
                      />
                      <Img
                        className="h-[9px] md:mt-0 my-1 w-[9px]"
                        src="images/img_ticket.svg"
                        alt="ticket"
                      />
                      <Img
                        className="h-[13px] md:mt-0 mt-[5px]"
                        src="images/img_location.svg"
                        alt="location"
                      />
                      <Img
                        className="h-1.5 md:ml-[0] ml-[272px] md:mt-0 my-[5px]"
                        src="images/img_signal.svg"
                        alt="signal"
                      />
                      <Img
                        className="h-1.5 md:ml-[0] ml-[23px] md:mt-0 my-[5px]"
                        src="images/img_signal_gray_800.svg"
                        alt="signal_One"
                      />
                      <Img
                        className="h-2 ml-6 md:ml-[0] md:mt-0 my-1"
                        src="images/img_car.svg"
                        alt="car"
                      />
                      <Img
                        className="h-[13px] ml-0.5 md:ml-[0] md:mt-0 my-0.5 w-[13px]"
                        src="images/img_arrowdown.svg"
                        alt="arrowdown"
                      />
                      <Img
                        className="h-1.5 md:ml-[0] ml-[23px] md:mt-0 my-[5px]"
                        src="images/img_car_gray_800.svg"
                        alt="car_One"
                      />
                    </div>
                    <Img
                      className="h-[593px] md:h-auto object-cover w-full"
                      src="images/img_clippathgroup_593x835.png"
                      alt="clippathgroup"
                    />
                    <div className="bg-gray-100 flex flex-col items-center justify-end p-14 md:px-10 sm:px-5 w-full">
                      <div className="flex md:flex-col flex-row gap-[23px] items-center justify-start mb-3.5 mt-5 w-full">
                        <div className="flex md:flex-1 flex-col gap-[22px] items-start justify-start w-[49%] md:w-full">
                          <div className="h-[77px] relative w-[52%]">
                            <Img
                              className="absolute h-[77px] inset-[0] justify-center m-auto"
                              src="images/img_vector_gray_900_77x179.svg"
                              alt="vector_Five"
                            />
                            <Img
                              className="absolute h-[35px] right-[0] top-[0]"
                              src="images/img_lightbulb.svg"
                              alt="lightbulb"
                            />
                          </div>
                          <Img
                            className="h-[243px] sm:h-auto object-cover w-full"
                            src="images/img_clippathgroup_243x349.png"
                            alt="clippathgroup_One"
                          />
                          <Img
                            className="h-9"
                            src="images/img_vector_gray_800.svg"
                            alt="vector_Six"
                          />
                        </div>
                        <List
                          className="flex flex-col gap-[23px] w-[49%]"
                          orientation="vertical"
                        >
                          <div className="bg-light_blue-A700 flex flex-col items-start justify-end p-[13px] w-full">
                            <div className="flex flex-col gap-[19px] items-start justify-start ml-1 md:ml-[0] mt-1.5 w-[87%] md:w-full">
                              <Img
                                className="h-5"
                                src="images/img_vector_white_a700_20x158.svg"
                                alt="vector"
                              />
                              <Img
                                className="h-[34px]"
                                src="images/img_vector_white_a700_34x278.svg"
                                alt="vector_One"
                              />
                              <div className="flex flex-row gap-[23px] items-center justify-start w-4/5 md:w-full">
                                <div className="bg-white-A700 flex flex-col items-center justify-end p-3 w-[45%]">
                                  <Img
                                    className="h-1.5"
                                    src="images/img_vector_light_blue_a700.svg"
                                    alt="vector_Two"
                                  />
                                </div>
                                <div className="flex h-[31px] justify-end relative w-[45%]">
                                  <Img
                                    className="h-2 mb-2.5 mt-auto mx-auto"
                                    src="images/img_car_white_a700.svg"
                                    alt="car"
                                  />
                                  <Img
                                    className="absolute h-[31px] inset-[0] justify-center m-auto"
                                    src="images/img_menu.svg"
                                    alt="menu"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-teal-700 flex flex-col items-start justify-end p-[13px] w-full">
                            <div className="flex flex-col items-start justify-start ml-1 md:ml-[0] mt-1.5 w-[87%] md:w-full">
                              <Img
                                className="h-[19px]"
                                src="images/img_volume_white_a700.svg"
                                alt="volume"
                              />
                              <Img
                                className="h-5 mt-[26px]"
                                src="images/img_vector_white_a700_20x256.svg"
                                alt="vector"
                              />
                              <Img
                                className="h-[34px] mt-[19px]"
                                src="images/img_vector_white_a700_34x278.svg"
                                alt="vector_One"
                              />
                              <div className="flex flex-row gap-[23px] items-center justify-start mt-[17px] w-4/5 md:w-full">
                                <div className="bg-white-A700 flex flex-col items-center justify-start p-[9px] w-[45%]">
                                  <Img
                                    className="h-1.5 my-[3px]"
                                    src="images/img_menu_teal_700.svg"
                                    alt="menu"
                                  />
                                </div>
                                <div className="h-[31px] relative w-[45%]">
                                  <Img
                                    className="h-1.5 m-auto"
                                    src="images/img_signal_white_a700.svg"
                                    alt="signal"
                                  />
                                  <Img
                                    className="absolute h-[31px] inset-[0] justify-center m-auto"
                                    src="images/img_menu.svg"
                                    alt="menu_One"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </List>
                      </div>
                    </div>
                  </div>
                  <div className="h-[2212px] relative w-full">
                    <div className="bg-white-A700 flex flex-col items-center justify-start mb-[-0.01px] mx-auto p-14 md:px-10 sm:px-5 w-full z-[1]">
                      <div className="flex flex-col items-center justify-start mb-[13px] mt-5 w-full">
                        <div className="flex flex-row gap-[11px] items-center justify-center w-[27%] md:w-full">
                          <Img
                            className="h-[26px]"
                            src="images/img_vector_gray_900.svg"
                            alt="vector_Ten"
                          />
                          <Img
                            className="h-[26px]"
                            src="images/img_vector_light_blue_a700_26x122.svg"
                            alt="vector_Eleven"
                          />
                        </div>
                        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-[53px] w-full">
                          <div className="md:h-[217px] h-[218px] relative w-[24%] md:w-full">
                            <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                              <div className="flex flex-col items-center justify-start w-full">
                                <Img
                                  className="h-[120px] md:h-auto object-cover w-full"
                                  src="images/img_clippathgroup_120x169.png"
                                  alt="clippathgroup_Seven"
                                />
                                <Img
                                  className="h-[97px]"
                                  src="images/img_group_1.svg"
                                  alt="group_Four"
                                />
                              </div>
                            </div>
                            <Button className="absolute bg-teal-700 bottom-[40%] flex h-[23px] items-center justify-center p-1.5 right-[13%] rounded-[11px] w-[23px]">
                              <Img
                                className="h-[9px]"
                                src="images/img_plus.svg"
                                alt="plus"
                              />
                            </Button>
                          </div>
                          <div className="flex md:flex-1 flex-col items-center justify-start w-[24%] md:w-full">
                            <div className="h-[120px] relative w-full">
                              <Img
                                className="h-[120px] m-auto object-cover w-full"
                                src="images/img_clippathgroup_4.png"
                                alt="clippathgroup_Eight"
                              />
                              <div className="absolute bottom-[37%] flex flex-col gap-2.5 inset-x-[0] items-center justify-start mx-auto w-2/5">
                                <Img
                                  className="h-2"
                                  src="images/img_signal_white_a700_8x66.svg"
                                  alt="signal_Four"
                                />
                                <Img
                                  className="h-[9px] w-[9px]"
                                  src="images/img_plus.svg"
                                  alt="plus_One"
                                />
                              </div>
                            </div>
                            <Img
                              className="h-[97px]"
                              src="images/img_group_2.svg"
                              alt="group_Five"
                            />
                          </div>
                          <List
                            className="md:flex-1 sm:flex-col flex-row gap-[13px] grid grid-cols-2 w-[49%] md:w-full"
                            orientation="horizontal"
                          >
                            <div className="md:h-[217px] h-[218px] sm:ml-[0] relative w-full">
                              <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                                <div className="flex flex-col items-center justify-start w-full">
                                  <Img
                                    className="h-[120px] md:h-auto object-cover w-full"
                                    src="images/img_clippathgroup_5.png"
                                    alt="clippathgroup"
                                  />
                                  <Img
                                    className="h-[97px]"
                                    src="images/img_group_3.svg"
                                    alt="group"
                                  />
                                </div>
                              </div>
                              <Button className="absolute bg-teal-700 bottom-[40%] flex h-[23px] items-center justify-center p-1.5 right-[13%] rounded-[11px] w-[23px]">
                                <Img
                                  className="h-[9px]"
                                  src="images/img_plus.svg"
                                  alt="plus"
                                />
                              </Button>
                            </div>
                            <div className="md:h-[217px] h-[218px] sm:ml-[0] relative w-full">
                              <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                                <div className="flex flex-col items-center justify-start w-full">
                                  <Img
                                    className="h-[120px] md:h-auto object-cover w-full"
                                    src="images/img_clippathgroup_6.png"
                                    alt="clippathgroup"
                                  />
                                  <Img
                                    className="h-[97px]"
                                    src="images/img_group_4.svg"
                                    alt="group"
                                  />
                                </div>
                              </div>
                              <Button className="absolute bg-teal-700 bottom-[40%] flex h-[23px] items-center justify-center p-1.5 right-[13%] rounded-[11px] w-[23px]">
                                <Img
                                  className="h-[9px]"
                                  src="images/img_plus.svg"
                                  alt="plus"
                                />
                              </Button>
                            </div>
                          </List>
                        </div>
                        <div className="h-[31px] md:h-[63px] mt-8 relative w-[14%]">
                          <Img
                            className="h-1.5 m-auto"
                            src="images/img_signal_light_blue_a700_6x67.svg"
                            alt="signal_Five"
                          />
                          <Img
                            className="absolute h-[31px] inset-[0] justify-center m-auto"
                            src="images/img_ticket_light_blue_a700.svg"
                            alt="ticket_One"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start mt-auto mx-auto w-full">
                      <div className="bg-light_blue-A700 flex flex-col items-center justify-start pb-[69px] w-full">
                        <div className="flex flex-col gap-[51px] h-[835px] md:h-auto items-center justify-start w-[835px] md:w-full">
                          <Img
                            className="h-[301px] md:h-auto object-cover w-full"
                            src="images/img_clippathgroup_301x835.png"
                            alt="clippathgroup_Two"
                          />
                          <div className="flex flex-col items-center justify-start w-[87%] md:w-full">
                            <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
                              <Img
                                className="h-[35px] mt-0.5"
                                src="images/img_vector_white_a700_35x200.svg"
                                alt="vector_Seven"
                              />
                              <div className="h-[31px] relative w-[14%]">
                                <Img
                                  className="h-1.5 m-auto"
                                  src="images/img_vector_white_a700.svg"
                                  alt="vector_Eight"
                                />
                                <Img
                                  className="absolute h-[31px] inset-[0] justify-center m-auto"
                                  src="images/img_menu.svg"
                                  alt="menu"
                                />
                              </div>
                            </div>
                            <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-[45px] w-full">
                              <Img
                                className="h-[264px] md:h-auto object-cover"
                                src="images/img_clippathgroup_264x169.png"
                                alt="clippathgroup_Three"
                              />
                              <Img
                                className="h-[264px] md:h-auto object-cover"
                                src="images/img_clippathgroup_1.png"
                                alt="clippathgroup_Four"
                              />
                              <Img
                                className="h-[264px] md:h-auto object-cover"
                                src="images/img_clippathgroup_2.png"
                                alt="clippathgroup_Five"
                              />
                              <Img
                                className="h-[264px] md:h-auto object-cover"
                                src="images/img_clippathgroup_3.png"
                                alt="clippathgroup_Six"
                              />
                            </div>
                            <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                              <Img
                                className="h-[97px]"
                                src="images/img_group.svg"
                                alt="group"
                              />
                              <Img
                                className="h-[97px]"
                                src="images/img_group_white_a700.svg"
                                alt="group_One"
                              />
                              <Img
                                className="h-[97px]"
                                src="images/img_group_white_a700_97x169.svg"
                                alt="group_Two"
                              />
                              <Img
                                className="h-[97px]"
                                src="images/img_group_97x169.svg"
                                alt="group_Three"
                              />
                            </div>
                            <PagerIndicator
                              className="flex h-1 justify-center mt-8 w-[23px]"
                              count={3}
                              activeCss="inline-block cursor-pointer h-1 bg-gray-900_01 w-1"
                              activeIndex={1}
                              inactiveCss="inline-block cursor-pointer h-1 bg-white-A700 w-1"
                              selectedWrapperCss="inline-block md:ml-[0] mx-[2.32px] sm:ml-[0]"
                              unselectedWrapperCss="inline-block md:ml-[0] mx-[2.32px] sm:ml-[0]"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="h-[797px] relative w-full">
                        <div className="bg-gray-900_01 flex flex-col gap-[33px] items-center justify-end mb-[-0.01px] mx-auto p-[69px] md:px-10 sm:px-5 w-full z-[1]">
                          <div
                            className="bg-cover bg-no-repeat flex flex-col h-[58px] items-start justify-start mt-[5px] pt-8 sm:px-5 px-8 w-[78%] md:w-full"
                            style={{
                              backgroundImage: "url('images/img_group17.svg')",
                            }}
                          >
                            <Img
                              className="h-[26px] md:ml-[0] ml-[145px]"
                              src="images/img_lightbulb.svg"
                              alt="lightbulb_One"
                            />
                          </div>
                          <div className="h-[31px] relative w-[15%]">
                            <Img
                              className="h-1.5 m-auto"
                              src="images/img_signal_white_a700_6x37.svg"
                              alt="signal_Three"
                            />
                            <Img
                              className="absolute h-[31px] inset-[0] justify-center m-auto"
                              src="images/img_menu.svg"
                              alt="menu_One"
                            />
                          </div>
                        </div>
                        <div className="bg-white-A700 flex flex-col items-center justify-end mt-auto mx-auto p-14 md:px-10 sm:px-5 w-full">
                          <div className="flex flex-col gap-[45px] items-center justify-start mb-3 mt-5 w-full">
                            <div className="flex flex-row gap-2.5 items-start justify-center w-[33%] md:w-full">
                              <Img
                                className="h-[35px]"
                                src="images/img_vector_gray_900_35x139.svg"
                                alt="vector_Nine"
                              />
                              <Img
                                className="h-[26px]"
                                src="images/img_signal_light_blue_a700.svg"
                                alt="signal_Two"
                              />
                            </div>
                            <div className="flex flex-col items-center justify-start w-full">
                              <div className="md:gap-5 gap-[23px] grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-[13px] w-full">
                                  <div className="flex flex-row gap-3.5 items-center justify-start w-[94%] md:w-full">
                                    <Img
                                      className="h-[111px] md:h-auto object-cover w-[47%]"
                                      src="images/img_clippathgroup_111x139.png"
                                      alt="clippathgroup"
                                    />
                                    <div className="flex flex-col gap-3 items-start justify-start w-1/2">
                                      <div className="flex flex-row items-start justify-start w-[86%] md:w-full">
                                        <Img
                                          className="h-[9px] w-[9px]"
                                          src="images/img_instagram.svg"
                                          alt="instagram"
                                        />
                                        <Img
                                          className="h-[5px] ml-[5px] mt-0.5"
                                          src="images/img_vector_gray_800_5x42.svg"
                                          alt="vector"
                                        />
                                        <Img
                                          className="h-[9px] ml-[19px] w-[9px]"
                                          src="images/img_save.svg"
                                          alt="save"
                                        />
                                        <Img
                                          className="h-[5px] ml-[5px] mt-0.5"
                                          src="images/img_vector_gray_800_5x36.svg"
                                          alt="vector_One"
                                        />
                                      </div>
                                      <Img
                                        className="h-[33px]"
                                        src="images/img_vector_gray_900_33x148.svg"
                                        alt="vector_Two"
                                      />
                                      <Img
                                        className="h-9"
                                        src="images/img_vector_gray_800_36x147.svg"
                                        alt="vector_Three"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-[13px] w-full">
                                  <div className="flex flex-row gap-3.5 items-center justify-start w-[94%] md:w-full">
                                    <Img
                                      className="h-[111px] md:h-auto object-cover w-[47%]"
                                      src="images/img_clippathgroup_111x139.png"
                                      alt="clippathgroup"
                                    />
                                    <div className="flex flex-col items-start justify-start w-1/2">
                                      <div className="flex flex-row items-start justify-start w-[86%] md:w-full">
                                        <Img
                                          className="h-[9px] w-[9px]"
                                          src="images/img_instagram.svg"
                                          alt="instagram"
                                        />
                                        <Img
                                          className="h-[5px] ml-[5px] mt-0.5"
                                          src="images/img_vector_gray_800_5x42.svg"
                                          alt="vector"
                                        />
                                        <Img
                                          className="h-[9px] ml-[19px] w-[9px]"
                                          src="images/img_save.svg"
                                          alt="save"
                                        />
                                        <Img
                                          className="h-[5px] ml-[5px] mt-0.5"
                                          src="images/img_vector_gray_800_5x36.svg"
                                          alt="vector_One"
                                        />
                                      </div>
                                      <Img
                                        className="h-[30px] mt-3"
                                        src="images/img_vector_gray_900_30x132.svg"
                                        alt="vector_Two"
                                      />
                                      <Img
                                        className="h-9 mt-4"
                                        src="images/img_vector_gray_800_36x147.svg"
                                        alt="vector_Three"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-[13px] w-full">
                                  <div className="flex flex-row gap-3.5 items-center justify-start w-[94%] md:w-full">
                                    <Img
                                      className="h-[111px] md:h-auto object-cover w-[47%]"
                                      src="images/img_clippathgroup_111x139.png"
                                      alt="clippathgroup"
                                    />
                                    <div className="flex flex-col gap-3 items-start justify-start w-1/2">
                                      <div className="flex flex-row items-start justify-start w-[86%] md:w-full">
                                        <Img
                                          className="h-[9px] w-[9px]"
                                          src="images/img_instagram.svg"
                                          alt="instagram"
                                        />
                                        <Img
                                          className="h-[5px] ml-[5px] mt-0.5"
                                          src="images/img_vector_gray_800_5x42.svg"
                                          alt="vector"
                                        />
                                        <Img
                                          className="h-[9px] ml-[19px] w-[9px]"
                                          src="images/img_save.svg"
                                          alt="save"
                                        />
                                        <Img
                                          className="h-[5px] ml-[5px] mt-0.5"
                                          src="images/img_vector_gray_800_5x36.svg"
                                          alt="vector_One"
                                        />
                                      </div>
                                      <Img
                                        className="h-[33px]"
                                        src="images/img_vector_gray_900_33x138.svg"
                                        alt="vector_Two"
                                      />
                                      <Img
                                        className="h-9"
                                        src="images/img_vector_gray_800_36x147.svg"
                                        alt="vector_Three"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-[13px] w-full">
                                  <div className="flex flex-row gap-3.5 items-center justify-start w-[94%] md:w-full">
                                    <Img
                                      className="h-[111px] md:h-auto object-cover w-[47%]"
                                      src="images/img_clippathgroup_111x139.png"
                                      alt="clippathgroup"
                                    />
                                    <div className="flex flex-col gap-3 items-start justify-start w-1/2">
                                      <div className="flex flex-row items-start justify-start w-[86%] md:w-full">
                                        <Img
                                          className="h-[9px] w-[9px]"
                                          src="images/img_instagram.svg"
                                          alt="instagram"
                                        />
                                        <Img
                                          className="h-[5px] ml-[5px] mt-0.5"
                                          src="images/img_vector_gray_800_5x42.svg"
                                          alt="vector"
                                        />
                                        <Img
                                          className="h-[9px] ml-[19px] w-[9px]"
                                          src="images/img_save.svg"
                                          alt="save"
                                        />
                                        <Img
                                          className="h-[5px] ml-[5px] mt-0.5"
                                          src="images/img_vector_gray_800_5x36.svg"
                                          alt="vector_One"
                                        />
                                      </div>
                                      <Img
                                        className="h-[33px]"
                                        src="images/img_vector_gray_900_33x124.svg"
                                        alt="vector_Two"
                                      />
                                      <Img
                                        className="h-9"
                                        src="images/img_vector_gray_800_36x147.svg"
                                        alt="vector_Three"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bg-light_blue-A700 flex flex-row gap-[5px] items-center justify-center p-[13px] right-[0] top-[0] w-[16%]">
                  <Img
                    className="h-[13px] ml-[9px] w-[13px]"
                    src="images/img_clippathgroup.svg"
                    alt="clippathgroup_Nine"
                  />
                  <Img
                    className="h-1.5 mr-11"
                    src="images/img_signal_white_a700_6x26.svg"
                    alt="signal_Six"
                  />
                </div>
                <Img
                  className="absolute h-[3207px] inset-x-[0] mx-auto object-cover top-[0] w-full"
                  src="images/img_home31_3207x835.png"
                  alt="homeThirtyOne_One"
                />
              </div>
              <div className="flex flex-col relative w-full">
                <div className="bg-gray-900_01 flex flex-col items-center justify-end mx-auto p-[46px] md:px-10 sm:px-5 w-full">
                  <div className="flex flex-col items-start justify-start mt-0.5 w-[95%] md:w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:ml-[0] ml-[3px] w-[93%] md:w-full">
                      <div
                        className="bg-cover bg-no-repeat flex flex-col h-[18px] items-center justify-start p-1.5 w-[3%] md:w-full"
                        style={{
                          backgroundImage: "url('images/img_group19.svg')",
                        }}
                      >
                        <Img
                          className="h-0.5 w-0.5"
                          src="images/img_vector_light_blue_a700_2x2.svg"
                          alt="vector_Twelve"
                        />
                      </div>
                      <Img
                        className="h-[13px] ml-2 md:ml-[0] w-3.5"
                        src="images/img_bookmark.svg"
                        alt="bookmark"
                      />
                      <Img
                        className="h-[9px] md:mt-0 mt-1 w-[9px]"
                        src="images/img_signal_white_a700_9x9.svg"
                        alt="signal_Seven"
                      />
                      <Img
                        className="h-3.5"
                        src="images/img_vector_white_a700_14x4.svg"
                        alt="vector_Thirteen"
                      />
                      <Img
                        className="h-[9px] md:mt-0 mt-[5px] w-[9px]"
                        src="images/img_computer.svg"
                        alt="computer"
                      />
                      <Img
                        className="h-[13px] md:mt-0 mt-[5px]"
                        src="images/img_cut.svg"
                        alt="cut"
                      />
                      <Img
                        className="h-2.5 md:ml-[0] ml-[233px]"
                        src="images/img_car_white_a700_10x68.svg"
                        alt="car_Two"
                      />
                      <Img
                        className="h-2.5 md:ml-[0] ml-[61px]"
                        src="images/img_signal_white_a700_10x37.svg"
                        alt="signal_Eight"
                      />
                      <Img
                        className="h-2 md:ml-[0] ml-[72px]"
                        src="images/img_car_white_a700_8x98.svg"
                        alt="car_Three"
                      />
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-1.5 w-full">
                      <Img
                        className="h-[50px]"
                        src="images/img_vector_white_a700_50x228.svg"
                        alt="vector_Fourteen"
                      />
                      <div className="flex flex-col items-start justify-start">
                        <div className="flex flex-row items-start justify-start w-[87%] md:w-full">
                          <Img
                            className="h-1.5 mt-[3px]"
                            src="images/img_signal_6x37.svg"
                            alt="signal_Nine"
                          />
                          <Img
                            className="h-2 ml-[93px] mt-[3px]"
                            src="images/img_signal_white_a700_8x48.svg"
                            alt="signal_Ten"
                          />
                          <Img
                            className="h-[13px] ml-[60px] w-[13px]"
                            src="images/img_call.svg"
                            alt="call"
                          />
                          <Img
                            className="h-1.5 ml-[9px] mt-[3px]"
                            src="images/img_vector_white_a700_6x73.svg"
                            alt="vector_Fifteen"
                          />
                        </div>
                        <div className="flex flex-row items-start justify-start mt-[9px] w-[87%] md:w-full">
                          <Img
                            className="h-1.5 mt-[3px]"
                            src="images/img_signal_white_a700_6x23.svg"
                            alt="signal_Eleven"
                          />
                          <Img
                            className="h-2 ml-[106px] mt-[3px]"
                            src="images/img_vector_white_a700_8x17.svg"
                            alt="vector_Sixteen"
                          />
                          <Img
                            className="h-[13px] ml-[91px] w-[13px]"
                            src="images/img_mail.svg"
                            alt="mail"
                          />
                          <Img
                            className="h-2 ml-[9px] mt-[3px]"
                            src="images/img_car_white_a700_8x74.svg"
                            alt="car_Four"
                          />
                        </div>
                        <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start mt-3 w-full">
                          <Img
                            className="h-2"
                            src="images/img_signal_white_a700_8x49.svg"
                            alt="signal_Twelve"
                          />
                          <Img
                            className="h-1.5 ml-20 sm:ml-[0]"
                            src="images/img_signal_white_a700_6x44.svg"
                            alt="signal_Thirteen"
                          />
                          <Img
                            className="h-[13px] sm:ml-[0] ml-[65px] sm:mt-0 mt-[3px] w-[13px]"
                            src="images/img_location_black_900.svg"
                            alt="location_One"
                          />
                          <Img
                            className="h-[22px] ml-2.5 sm:ml-[0]"
                            src="images/img_vector_white_a700_22x125.svg"
                            alt="vector_Seventeen"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-start w-[51%] md:w-full">
                      <Button className="bg-light_blue-A700 flex h-[23px] items-center justify-center mt-[5px] p-[5px] w-[23px]">
                        <Img src="images/img_twitter.svg" alt="twitter" />
                      </Button>
                      <Img
                        className="h-[11px] ml-[17px]"
                        src="images/img_facebook.svg"
                        alt="facebook"
                      />
                      <div className="h-2.5 ml-6 relative w-2.5">
                        <Img
                          className="h-1 m-auto w-1"
                          src="images/img_vector_light_blue_a700_4x4.svg"
                          alt="vector_Eighteen"
                        />
                        <div
                          className="absolute bg-cover bg-no-repeat flex flex-row h-full inset-[0] items-center justify-center m-auto p-0.5 w-2.5"
                          style={{
                            backgroundImage: "url('images/img_group16.svg')",
                          }}
                        >
                          <Img
                            className="h-px mb-1.5 w-px"
                            src="images/img_vector_light_blue_a700_1x1.svg"
                            alt="vector_Nineteen"
                          />
                        </div>
                      </div>
                      <div className="h-2 ml-[21px] relative w-[4%]">
                        <Img
                          className="h-0.5 m-auto w-0.5"
                          src="images/img_vector_2x2.svg"
                          alt="vector_Twenty"
                        />
                        <Img
                          className="absolute h-2 inset-[0] justify-center m-auto"
                          src="images/img_videocamera.svg"
                          alt="videocamera"
                        />
                      </div>
                      <Img
                        className="h-1.5 ml-[197px]"
                        src="images/img_signal_white_a700_6x44.svg"
                        alt="signal_Fourteen"
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-gray-900_01 flex h-8 justify-end mt-[-0.01px] mx-auto w-full z-[1]">
                  <Img
                    className="h-2 mb-[11px] mt-auto mx-auto"
                    src="images/img_vector_white_a700_8x198.svg"
                    alt="vector_TwentyOne"
                  />
                  <Img
                    className="absolute h-8 inset-[0] justify-center m-auto"
                    src="images/img_maskgroup.svg"
                    alt="maskgroup"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderPage;
