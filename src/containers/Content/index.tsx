import logo from "../../assets/logo_end.png";
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
import { useMediaQuery } from "react-responsive";
import MobileSwiper from "../mobileSwiper";

const nftIcons = [icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon8, icon9, icon10];

const Content = () => {
  const isMDView = useMediaQuery({ minWidth: 640, maxWidth: 767 });
  const isPCView = useMediaQuery({ minWidth: 768 });
  const isSMView = useMediaQuery({ maxWidth: 639 });

  return (
    <div className="bg-black flex items-center flex-col pb-[86px] lg:pb-[36px]">
      {isMDView && (
        <div className="py-[30px] px-[10px] w-[600px] flex flex-col">
          <div className="flex">
            {nftIcons.slice(0, 5).map((icon, index) => (
              <img className="ml-[60px] first:ml-0 w-[60px]" key={index} src={icon} alt="nftIcon" />
            ))}
          </div>
          <div className="flex mt-5 ml-auto">
            {nftIcons.slice(5, 10).map((icon, index) => (
              <img className="ml-[60px] first:ml-0 w-[60px]" key={index} src={icon} alt="nftIcon" />
            ))}
          </div>
        </div>
      )}
      {isPCView && (
        <div className="flex py-10 justify-center xl:justify-around w-full">
          {nftIcons.map((icon, index) => (
            <img
              className="ml-12 xl:ml-0 first:ml-0 lg:w-[60px]"
              key={index}
              src={icon}
              alt="nftIcon"
            />
          ))}
        </div>
      )}
      {isSMView && <MobileSwiper />}

      <div className="font-light max-w-[1080px] lg:max-w-[720px] md:max-w-auto md:px-10">
        <h3 className="text-[48px] text-[#00A5B5]">About</h3>
        <p className="text-[18px] text-slate-400">
          Web3 and The Metaverse have been used as buzzwords to exaggerate development progress of
          various related technologies and projects for public relations purposes. Information
          privacy, user addiction, and user safety are concerns within the metaverse, stemming from
          challenges facing the social media and video game industries as a whole.
        </p>
        <h3 className="text-[48px] text-[#00A5B5] mt-10">Lottery</h3>
        <p className="text-[18px] text-slate-400">
          Lottery Web3 and The Metaverse have been used as buzzwords to exaggerate development
          progress of various related technologies and projects for public relations purposes.
          Information privacy, user addiction, and user safety are concerns within the metaverse,
          stemming from challenges facing the social media and video game industries as a whole.
        </p>
        <h3 className="text-[48px] text-[#00A5B5] mt-10">HereWeGo</h3>
        <p className="text-[18px] text-slate-400">
          HereWeGo Web3 and The Metaverse have been used as buzzwords to exaggerate development
          progress of various related technologies and projects for public relations purposes.
          Information privacy, user addiction, and user safety are concerns within the metaverse,
          stemming from challenges facing the social media and video game industries as a whole.
        </p>
      </div>
      <img className="mt-[86px] lg:mt-[36px]" src={logo} alt="logo" />
    </div>
  );
};

export default Content;
