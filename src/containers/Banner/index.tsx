import nftImage from "../../assets/nftImage.png";
import nftTitle from "../../assets/nftTitle.svg";
import nftSmallTitle from "../../assets/nftTitle_2.png";
import btnMint from "../../assets/btn_mint.png";
import { useMediaQuery } from "react-responsive";
import Countdown from "react-countdown";

interface Props {
  mintedCount: number | string;
  mintedLimitCount: number | string;
  endDate: number | Date;
  onClickMintNow: () => void;
}

const Banner = ({ mintedCount, mintedLimitCount, endDate, onClickMintNow }: Props) => {
  const isMDView = useMediaQuery({ maxWidth: 767 });
  const isSMView = useMediaQuery({ maxWidth: 639 });

  const countDownRenderer = ({
    days,
    hours,
    minutes,
    seconds,
  }: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }) => (
    <span>
      {days} days {hours} : {String(minutes).padStart(2, "0")} : {String(seconds).padStart(2, "0")}
    </span>
  );

  return (
    <>
      <div className="bg-gradient-to-b from-[#000000] to-[#044248] flex justify-center">
        <div className="flex w-[1080px] lg:w-[720px] md:w-[600px] sm:justify-center">
          <img className="lg:w-[306px]" src={nftImage} alt="nftImage" />
          {!isSMView && (
            <div className="ml-10 text-white flex flex-col font-light">
              <picture>
                <source srcSet={nftSmallTitle} media="(max-width: 767px)" />
                <img className="lg:w-[340px] md:w-[200px]" src={nftTitle} alt="nftTitle" />
              </picture>
              <div className="mt-auto whitespace-nowrap">
                <span className="text-[56px] lg:text-[42px] ">
                  {mintedCount} / {mintedLimitCount}{" "}
                </span>
                <span className="text-[30px] lg:text-[24px] md:text-[15px]">MINTED</span>
              </div>
              {isMDView ? (
                <div>
                  <p className="text-[30px]">TIME LEFT</p>
                  <p className="text-[24px]">
                    <Countdown date={endDate} renderer={countDownRenderer} />
                  </p>
                </div>
              ) : (
                <h3 className="text-[30px] lg:text-[24px]">
                  TIME LEFT - <Countdown date={endDate} renderer={countDownRenderer} />
                </h3>
              )}
              <img
                className="w-[300px] mt-[30px] mb-[40px] lg:mb-[30px] lg:w-[220px] cursor-pointer"
                src={btnMint}
                alt="btnMint"
                onClick={onClickMintNow}
              />
            </div>
          )}
        </div>
      </div>
      {isSMView && (
        <div className="bg-black flex flex-col items-center py-5 text-white  font-light">
          <img className="w-[340px]" src={nftTitle} alt="nftTitle" />
          <div className="mt-6 text-center">
            <span className="text-[56px] weight">
              {mintedCount} / {mintedLimitCount}{" "}
            </span>
            <span className="text-[30px]">MINTED</span>
          </div>
          <h3 className="text-[24px]">
            TIME LEFT - <Countdown date={endDate} renderer={countDownRenderer} />
          </h3>
          <img
            className="w-[300px] mt-7 cursor-pointer"
            src={btnMint}
            alt="btnMint"
            onClick={onClickMintNow}
          />
        </div>
      )}
    </>
  );
};

export default Banner;
