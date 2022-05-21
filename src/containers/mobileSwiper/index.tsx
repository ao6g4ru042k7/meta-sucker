import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import classNames from "classnames";

import icon1 from "../../assets/btn_nft1.png";
import icon2 from "../../assets/btn_nft2.png";
import icon3 from "../../assets/btn_nft3.png";
import icon4 from "../../assets/btn_nft4.png";
import icon5 from "../../assets/btn_nft5.png";
import icon6 from "../../assets/btn_nft6.png";
import icon7 from "../../assets/btn_nft7.png";
import icon8 from "../../assets/btn_nft8.png";
import icon9 from "../../assets/btn_nft9.png";
import icon10 from "../../assets/btn_nft10.png";
import arrow from "../../assets/arrow.png";
import { useRef } from "react";

const nftIcons = [icon1, icon2, icon3, icon4, icon10, icon5, icon6, icon7, icon8, icon9];

const MobileSwiper = () => {
  const rightArrowDom = useRef(null);
  const leftArrowDom = useRef(null);
  return (
    <Swiper
      className=" w-full relative"
      modules={[Autoplay, Navigation]}
      slidesPerView={5}
      navigation={{
        nextEl: rightArrowDom.current,
        prevEl: leftArrowDom.current,
      }}
      onBeforeInit={(swiper: any) => {
        swiper.params.navigation.prevEl = leftArrowDom.current;
        swiper.params.navigation.nextEl = rightArrowDom.current;
      }}
      centeredSlides
      loop
      autoplay>
      {nftIcons.map((icon, index) => (
        <SwiperSlide className="flex justify-center" key={index}>
          {({ isActive }) => (
            <img
              className={classNames(
                "w-[90px] p-1",
                {
                  "border-2 rounded-full border-[#00A5B5]": isActive,
                },
                {
                  "opacity-50": !isActive,
                }
              )}
              src={icon}
              alt="nftIcon"
            />
          )}
          {/* <div className="flex justify-center border-2 rounded-full border-red-400"> */}

          {/* </div> */}
        </SwiperSlide>
      ))}
      <img
        ref={rightArrowDom}
        className="w-9 h-[30px] cursor-pointer absolute top-8 right-0 z-10"
        src={arrow}
        alt="arrow"
      />
      <img
        ref={leftArrowDom}
        className="w-9 h-[30px] cursor-pointer absolute rotate-180 top-8 z-10"
        src={arrow}
        alt="arrow"
      />
    </Swiper>
  );
};

export default MobileSwiper;
