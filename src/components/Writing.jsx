import img1 from "../assets/wring.png";
import CustomButton from "../utils/CustomButton";

const Writing = () => {
  return (
    <div className="w-full h-full">
      <div className="py-[80px] justify-end flex items-center relative">
        <div className="w-[360px] h-[360px] absolute left-[250px] ">
          <img src={img1} alt="presentation" className="w-full h-full" />
        </div>
        <div className="flex flex-col gap-5 bg-bg-light  py-[100px] pl-[200px] w-[1000px] ">
          <p className="text-dark-20 font-bold text-4xl">
            Perfect your writing with MegaTounge
          </p>
          <span className="text-[rgba(18, 17, 39, 0.56)] font-normal text-lg opacity-50 max-w-xl">
            Fix grammar and punctuation mistakes, rephrase sentences, express
            nuances, and find your perfect tone of voice.
          </span>
          <CustomButton className="w-fit">Start Writing</CustomButton>
        </div>
      </div>
    </div>
  );
};

export default Writing;
