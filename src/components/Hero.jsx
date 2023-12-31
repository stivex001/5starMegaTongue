/* eslint-disable react/no-unknown-property */
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { apiBaseUrl } from "../Store/apiBaseUrl";
import { Spinner } from "./Spinner";
import { TranslationIcon } from "../icons/TranslationIcon";

const Hero = () => {
  const flexBetween = "flex items-center justify-between";
  const [text, setText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setIsLoading] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [selectedOutputLanguage, setSelectedOutputLanguage] = useState("es");
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [showOuputLanguageDropdown, setShowOutputLanguageDropdown] =
    useState(false);
  const [activeTab, setActiveTab] = useState("text");

  const user = JSON.parse(localStorage.getItem("user"));

  const userData = user?.data?.user;
  const token = user?.data?.access_token;
  const apiKey = user?.data?.user?.api_key;

  console.log(userData, "auth");

  const languages = [
    { code: "fr", name: "French" },
    { code: "en", name: "English" },
    { code: "es", name: "Spanish" },
    { code: "de", name: "German" },
    { code: "rs", name: "Russian" },
    { code: "hu", name: "Hausa" },
    { code: "yor", name: "Yoruba" },
  ];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const selectedLanguageName = languages?.find(
    (lang) => lang?.code === selectedLanguage
  )?.name;

  const selectedOutputLanguageName = languages?.find(
    (lang) => lang?.code === selectedOutputLanguage
  )?.name;

  const handleDropdownToggle = () => {
    setShowLanguageDropdown(!showLanguageDropdown);
  };

  const handleOutputDropdownToggle = () => {
    setShowOutputLanguageDropdown(!showOuputLanguageDropdown);
  };

  const handleLanguageSelect = (languageCode) => {
    setSelectedLanguage(languageCode);
    setShowLanguageDropdown(false);
  };

  const handleOutputLanguageSelect = (languageCode) => {
    setSelectedOutputLanguage(languageCode);
    setShowLanguageDropdown(false);
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files && e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);

      handleFileTranslate();
    }
  };

  console.log(file?.name);

  const handleDrop = (e) => {
    e.preventDefault();
    const selectedFile = e.dataTransfer.files && e.dataTransfer.files[0]?.name;
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const preventDefault = (e) => {
    e.preventDefault();
  };

  const handleTranslate = async () => {
    setIsLoading(true);

    try {
      const response = await axios.post(
        `${apiBaseUrl}/translator`,
        {
          q: text,
          source: selectedLanguage,
          target: selectedOutputLanguage,
          format: "text",
        },
        {
          headers: {
            authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
            apikey: apiKey,
          },
        }
      );
      console.log(response.data.message);
      setOutputText(response?.data?.message);
      setIsLoading(false);
    } catch (error) {
      toast.error(error?.data?.message || error.message);
      setIsLoading(false);
    }
  };

  const handleFileTranslate = async () => {
    setIsLoading(true);

    try {
      const response = await axios.post(
        `${apiBaseUrl}/translatefile`,
        { csvfile: file },
        {
          headers: {
            authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
            apikey: apiKey,
          },
        }
      );
      console.log(response.data.message);
      setOutputText(response?.data?.message);
      setIsLoading(false);
    } catch (error) {
      toast.error(error?.data?.message || error.message);
      setIsLoading(false);
    }
  };

  return (
    <section className={`w-full mx-auto sm:w-5/6 py-32 md:h-full md:pb-0`}>
      <div className="flex flex-col gap-2 w-full">
        <div className="flex gap-16  ">
          <div
            className={`cursor-pointer ${
              activeTab === "text" ? "underline" : ""
            }`}
            onClick={() => handleTabClick("text")}
          >
            <p className="text-center text-xl font-medium">Translate Text</p>
            <span className="text-center text-sm font-normal">
              31 languages
            </span>
          </div>
          <div
            className={`cursor-pointer ${
              activeTab === "file" ? "underline" : ""
            }`}
            onClick={() => handleTabClick("file")}
          >
            <p className="text-purple-20 text-center text-xl font-medium">
              Translate files
            </p>
            <span className="text-center text-sm font-normal">
              .pdf, .docx, .pptx
            </span>
            {!userData && (
              <h6 className="text-red-20 text-xs font-normal">
                *Authentication is required*
              </h6>
            )}
          </div>
        </div>
        {activeTab === "text" ? (
          <div className={`bg-white shadow-md py-5 sm:px-[50px] sm:py-9 `}>
            <div className={`flex flex-col sm:flex-row justify-between gap-2`}>
              <div className="flex flex-col gap-4 flex-1">
                <div className={`${flexBetween} border-b-2`}>
                  <div className="flex items-center gap-4 py-3">
                    <p className=" text-center text-black text-base font-semibold font-['Inter']">
                      Detect language{" "}
                    </p>
                    <p className=" text-center text-purple-20 text-base font-semibold font-['Inter']">
                      {selectedLanguageName}{" "}
                    </p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="20"
                      viewBox="0 0 22 20"
                      fill="none"
                      className={`cursor-pointer ${
                        showLanguageDropdown ? "rotate-180" : ""
                      }`}
                      onClick={handleDropdownToggle}
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.6481 12.4599C11.4762 12.6086 11.2431 12.6922 11 12.6922C10.7569 12.6922 10.5238 12.6086 10.3519 12.4599L5.16632 7.97238C5.07877 7.8992 5.00894 7.81167 4.9609 7.71489C4.91285 7.61811 4.88757 7.51401 4.88651 7.40868C4.88545 7.30335 4.90865 7.1989 4.95474 7.10141C5.00083 7.00392 5.06889 6.91535 5.15496 6.84086C5.24103 6.76638 5.34338 6.70748 5.45603 6.66759C5.56869 6.62771 5.68939 6.60764 5.81111 6.60855C5.93282 6.60947 6.05311 6.63135 6.16494 6.67292C6.27678 6.7145 6.37793 6.77493 6.46249 6.8507L11 10.7774L15.5375 6.8507C15.7104 6.7062 15.9419 6.62624 16.1823 6.62805C16.4226 6.62985 16.6525 6.71328 16.8225 6.86036C16.9924 7.00744 17.0889 7.2064 17.0909 7.41439C17.093 7.62238 17.0006 7.82277 16.8337 7.97238L11.6481 12.4599Z"
                        fill="black"
                      />
                    </svg>
                    {showLanguageDropdown && (
                      <select
                        value={selectedLanguage}
                        onChange={(e) => handleLanguageSelect(e.target.value)}
                      >
                        {languages?.map((language) => (
                          <option key={language?.code} value={language?.code}>
                            {language?.name}
                          </option>
                        ))}
                      </select>
                    )}
                  </div>
                  {loading ? (
                    <Spinner />
                  ) : user ? (
                    <button
                      className="  cursor-pointer hover:scale-105 ease-in"
                      onClick={handleTranslate}
                    >
                      <TranslationIcon />
                    </button>
                  ) : (
                    <button
                      className=" cursor-not-allowed opacity-50 hover:scale-105 ease-in"
                      disabled={!user}
                    >
                      <TranslationIcon />
                    </button>
                  )}
                </div>

                <div className=" border-r-2 flex flex-col gap-5 py-4">
                  <textarea
                    placeholder="Type to translate"
                    value={text}
                    onChange={handleTextChange}
                    className="text-xl text-[rgba(0, 0, 0, 0.49)] font-normal border border-transparent rounded-lg p-2 focus:outline-none"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-4 flex-1 px-4">
                <div className="border-b-2 flex items-center gap-4 py-3">
                  <p className="text-center text-purple-20 text-base font-semibold font-['Inter']">
                    {selectedOutputLanguageName}{" "}
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="20"
                    viewBox="0 0 22 20"
                    fill="none"
                    className={`cursor-pointer ${
                      showLanguageDropdown ? "rotate-180" : ""
                    }`}
                    onClick={handleOutputDropdownToggle}
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.6481 12.4599C11.4762 12.6086 11.2431 12.6922 11 12.6922C10.7569 12.6922 10.5238 12.6086 10.3519 12.4599L5.16632 7.97238C5.07877 7.8992 5.00894 7.81167 4.9609 7.71489C4.91285 7.61811 4.88757 7.51401 4.88651 7.40868C4.88545 7.30335 4.90865 7.1989 4.95474 7.10141C5.00083 7.00392 5.06889 6.91535 5.15496 6.84086C5.24103 6.76638 5.34338 6.70748 5.45603 6.66759C5.56869 6.62771 5.68939 6.60764 5.81111 6.60855C5.93282 6.60947 6.05311 6.63135 6.16494 6.67292C6.27678 6.7145 6.37793 6.77493 6.46249 6.8507L11 10.7774L15.5375 6.8507C15.7104 6.7062 15.9419 6.62624 16.1823 6.62805C16.4226 6.62985 16.6525 6.71328 16.8225 6.86036C16.9924 7.00744 17.0889 7.2064 17.0909 7.41439C17.093 7.62238 17.0006 7.82277 16.8337 7.97238L11.6481 12.4599Z"
                      fill="black"
                    />
                  </svg>
                  {showOuputLanguageDropdown && (
                    <select
                      value={selectedOutputLanguage}
                      onChange={(e) =>
                        handleOutputLanguageSelect(e.target.value)
                      }
                    >
                      {languages?.map((language) => (
                        <option key={language?.code} value={language?.code}>
                          {language?.name}
                        </option>
                      ))}
                    </select>
                  )}
                </div>
                <div className=" border-r-2 flex flex-col gap-5 py-4">
                  <input
                    type="text"
                    value={outputText}
                    readOnly
                    className="text-xl text-[rgba(0, 0, 0, 0.49)] font-normal border border-transparent rounded-lg p-2 focus:outline-none"
                  />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className={`bg-white shadow-md py-5 sm:px-[50px] sm:py-9 `}>
            <div className={`flex flex-col sm:flex-row justify-between gap-2`}>
              <div className="flex flex-col gap-4 flex-1">
                <div className={`${flexBetween} border-b-2`}>
                  <div className="flex items-center gap-4 py-3">
                    <p className=" text-center text-black text-base font-semibold font-['Inter']">
                      Detect language{" "}
                    </p>
                    <p className=" text-center text-purple-20 text-base font-semibold font-['Inter']">
                      {selectedLanguageName}{" "}
                    </p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="20"
                      viewBox="0 0 22 20"
                      fill="none"
                      className={`cursor-pointer ${
                        showLanguageDropdown ? "rotate-180" : ""
                      }`}
                      onClick={handleDropdownToggle}
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.6481 12.4599C11.4762 12.6086 11.2431 12.6922 11 12.6922C10.7569 12.6922 10.5238 12.6086 10.3519 12.4599L5.16632 7.97238C5.07877 7.8992 5.00894 7.81167 4.9609 7.71489C4.91285 7.61811 4.88757 7.51401 4.88651 7.40868C4.88545 7.30335 4.90865 7.1989 4.95474 7.10141C5.00083 7.00392 5.06889 6.91535 5.15496 6.84086C5.24103 6.76638 5.34338 6.70748 5.45603 6.66759C5.56869 6.62771 5.68939 6.60764 5.81111 6.60855C5.93282 6.60947 6.05311 6.63135 6.16494 6.67292C6.27678 6.7145 6.37793 6.77493 6.46249 6.8507L11 10.7774L15.5375 6.8507C15.7104 6.7062 15.9419 6.62624 16.1823 6.62805C16.4226 6.62985 16.6525 6.71328 16.8225 6.86036C16.9924 7.00744 17.0889 7.2064 17.0909 7.41439C17.093 7.62238 17.0006 7.82277 16.8337 7.97238L11.6481 12.4599Z"
                        fill="black"
                      />
                    </svg>
                    {showLanguageDropdown && (
                      <select
                        value={selectedLanguage}
                        onChange={(e) => handleLanguageSelect(e.target.value)}
                      >
                        {languages?.map((language) => (
                          <option key={language?.code} value={language?.code}>
                            {language?.name}
                          </option>
                        ))}
                      </select>
                    )}
                  </div>
                  {loading ? (
                    <Spinner />
                  ) : user ? (
                    <button
                      className="hidden sm:block cursor-pointer hover:scale-105 ease-in"
                      onClick={handleTranslate}
                    >
                      <TranslationIcon />
                    </button>
                  ) : (
                    <button
                      className="hidden sm:block cursor-not-allowed opacity-50 hover:scale-105 ease-in"
                      disabled={!user}
                    >
                      <TranslationIcon />
                    </button>
                  )}
                </div>

                <div className=" border-r-2 flex flex-col gap-5 py-4">
                  <div
                    className="drop-zone "
                    onDrop={handleDrop}
                    onDragOver={preventDefault}
                  >
                    <label
                      htmlFor="file-input"
                      className="text-light-gray font-normal text-center text-base max-w-lg cursor-pointer"
                    >
                      Drag and drop to translate PDF, Word (.docx), and
                      PowerPoint (.pptx) files with our document translator
                    </label>

                    <input
                      type="file"
                      accept=".pdf, .docx, .pptx"
                      id="file-input"
                      onChange={handleFileChange}
                      style={{ display: "none" }}
                    />
                  </div>
                  {file && <p>Selected File: {file.name}</p>}
                </div>
              </div>

              <div className="flex flex-col gap-4 flex-1 px-4">
                <div className="border-b-2 flex items-center gap-4 py-3">
                  <p className="text-center text-purple-20 text-base font-semibold font-['Inter']">
                    {selectedOutputLanguageName}{" "}
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="20"
                    viewBox="0 0 22 20"
                    fill="none"
                    className={`cursor-pointer ${
                      showLanguageDropdown ? "rotate-180" : ""
                    }`}
                    onClick={handleOutputDropdownToggle}
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.6481 12.4599C11.4762 12.6086 11.2431 12.6922 11 12.6922C10.7569 12.6922 10.5238 12.6086 10.3519 12.4599L5.16632 7.97238C5.07877 7.8992 5.00894 7.81167 4.9609 7.71489C4.91285 7.61811 4.88757 7.51401 4.88651 7.40868C4.88545 7.30335 4.90865 7.1989 4.95474 7.10141C5.00083 7.00392 5.06889 6.91535 5.15496 6.84086C5.24103 6.76638 5.34338 6.70748 5.45603 6.66759C5.56869 6.62771 5.68939 6.60764 5.81111 6.60855C5.93282 6.60947 6.05311 6.63135 6.16494 6.67292C6.27678 6.7145 6.37793 6.77493 6.46249 6.8507L11 10.7774L15.5375 6.8507C15.7104 6.7062 15.9419 6.62624 16.1823 6.62805C16.4226 6.62985 16.6525 6.71328 16.8225 6.86036C16.9924 7.00744 17.0889 7.2064 17.0909 7.41439C17.093 7.62238 17.0006 7.82277 16.8337 7.97238L11.6481 12.4599Z"
                      fill="black"
                    />
                  </svg>
                  {showOuputLanguageDropdown && (
                    <select
                      value={selectedOutputLanguage}
                      onChange={(e) =>
                        handleOutputLanguageSelect(e.target.value)
                      }
                    >
                      {languages?.map((language) => (
                        <option key={language?.code} value={language?.code}>
                          {language?.name}
                        </option>
                      ))}
                    </select>
                  )}
                </div>
                <div className=" border-r-2 flex flex-col gap-5 py-4">
                  <input
                    type="text"
                    value={outputText}
                    readOnly
                    className="text-xl text-[rgba(0, 0, 0, 0.49)] font-normal border border-transparent rounded-lg p-2 focus:outline-none"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
