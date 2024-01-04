/* eslint-disable react/prop-types */
import { useState } from "react";
import { Spinner } from "./Spinner";
import { TranslationIcon } from "../icons/TranslationIcon";
import { toast } from "react-toastify";
import { apiBaseUrl } from "../Store/apiBaseUrl";
import axios from "axios";

export const FileTranslateInput = ({
  apiKey,
  token,
  selectedLanguageName,
  showLanguageDropdown,
  handleDropdownToggle,
  selectedOutputLanguageName,
  selectedLanguage,
  handleLanguageSelect,
  user,
  languages,
  handleOutputDropdownToggle,
  showOuputLanguageDropdown,
  selectedOutputLanguage,
  handleOutputLanguageSelect,
}) => {
  const flexBetween = "flex items-center justify-between";
  const [file, setFile] = useState(null);
  const [outputText, setOutputText] = useState("");
  const [loading, setIsLoading] = useState(false);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files && e.target.files[0];
    if (selectedFile) {
      console.log("Selected File:", selectedFile);
      setFile(selectedFile);
    }
  };
  

  const handleDrop = (e) => {
    e.preventDefault();
    const selectedFile = e.dataTransfer.files && e.dataTransfer.files[0]?.name;
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleFileTranslate = async () => {
    setIsLoading(true);
  
    try {
      console.log("File to be translated:", file);
  
      const formData = new FormData();
      formData.append("csvfile", file);
  
      const response = await axios.post(
        `${apiBaseUrl}/translatefile`,
        formData,
        {
          headers: {
            authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
            apikey: apiKey,
          },
        }
      );
  
      console.log("Translation Response:", response);
      setOutputText(response);
      setIsLoading(false);
    } catch (error) {
      console.error("Translation Error:", error);
      toast.error(error?.data?.message || error.message);
      setIsLoading(false);
    }
  };
  
  const preventDefault = (e) => {
    e.preventDefault();
  };

  return (
    <div>
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
                  onClick={handleFileTranslate}
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
                  Drag and drop to translate PDF, Word (.docx), and PowerPoint
                  (.pptx) files with our document translator
                </label>

                <input
                  type="file"
                  accept=".csv"
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
                  onChange={(e) => handleOutputLanguageSelect(e.target.value)}
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
    </div>
  );
};
