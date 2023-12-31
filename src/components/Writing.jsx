import img1 from "../assets/wring.png";
import CustomButton from "../utils/CustomButton";

const Writing = () => {
  return (
    <div className="w-full h-full">
      <div className="sm:py-[80px] sm:justify-end flex flex-col sm:flex-row items-center relative">
        <div className="sm:w-[360px] sm:h-[360px] sm:absolute sm:left-[250px] ">
          <img src={img1} alt="presentation" className="w-full h-full" />
        </div>
        <div className="flex flex-col gap-5 bg-bg-light py-5 px-5  sm:py-[100px] sm:pl-[200px] sm:w-[1000px] ">
          <p className="text-dark-20 font-bold sm:text-4xl text-xl text-center">
            Perfect your writing with MegaTongue
          </p>
          <span className="text-[rgba(18, 17, 39, 0.56)] font-normal text-lg opacity-50 max-w-xl">
            Fix grammar and punctuation mistakes, rephrase sentences, express
            nuances, and find your perfect tone of voice.
          </span>
          <CustomButton className="w-fit mx-auto sm:mx-0">Start Writing</CustomButton>
        </div>
      </div>
    </div>
  );
};

export default Writing;
