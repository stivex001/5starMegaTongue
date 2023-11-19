/* eslint-disable react/no-unknown-property */
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

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

  // const user = JSON.parse(localStorage.getItem("user"));
  const user = true
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
        `http://newmegatongueapi.staging.5starcompany.com.ng/api/translator`,
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
        `http://newmegatongueapi.staging.5starcompany.com.ng/api/translatefile`,
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
          <div className="cursor-pointer">
            <p className="text-center text-xl font-medium">Translate Text</p>
            <span className="text-center text-sm font-normal">
              31 languages
            </span>
          </div>
          <div className="cursor-pointer">
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
                  "Translating..."
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="21"
                    viewBox="0 0 25 21"
                    fill="none"
                    className="hidden sm:block cursor-pointer hover:scale-105 ease-in"
                    onClick={handleTranslate}
                  >
                    <path
                      d="M5.28971 1.96201C5.5034 1.74085 5.61974 1.44833 5.61421 1.14609C5.60868 0.843839 5.48172 0.555462 5.26006 0.341709C5.03841 0.127955 4.73938 0.00551454 4.42596 0.000181763C4.11255 -0.00515102 3.80922 0.10704 3.57989 0.31312L0.353804 3.42423C0.127252 3.64298 0 3.93951 0 4.24868C0 4.55784 0.127252 4.85437 0.353804 5.07312L3.57989 8.18423C3.69064 8.29886 3.8242 8.39079 3.9726 8.45456C4.121 8.51832 4.28119 8.55261 4.44363 8.55538C4.60607 8.55814 4.76742 8.52932 4.91806 8.47065C5.0687 8.41197 5.20554 8.32463 5.32042 8.21385C5.4353 8.10306 5.52586 7.9711 5.58671 7.82583C5.64755 7.68056 5.67743 7.52496 5.67457 7.36831C5.6717 7.21166 5.63615 7.05717 5.57002 6.91406C5.5039 6.77095 5.40857 6.64215 5.28971 6.53534L4.12832 5.41534H20.5652C20.8861 5.41534 21.1938 5.29243 21.4206 5.07363C21.6475 4.85484 21.775 4.5581 21.775 4.24868C21.775 3.93926 21.6475 3.64251 21.4206 3.42372C21.1938 3.20493 20.8861 3.08201 20.5652 3.08201H4.12832L5.28971 1.96201ZM19.7103 12.7576C19.4837 12.9763 19.3565 13.2728 19.3565 13.582C19.3565 13.8912 19.4837 14.1877 19.7103 14.4065L20.8717 15.5265H4.4348C4.11394 15.5265 3.80623 15.6494 3.57935 15.8682C3.35248 16.087 3.22502 16.3837 3.22502 16.6931C3.22502 17.0025 3.35248 17.2993 3.57935 17.5181C3.80623 17.7369 4.11394 17.8598 4.4348 17.8598H20.8717L19.7103 18.9798C19.5914 19.0866 19.4961 19.2154 19.43 19.3585C19.3639 19.5016 19.3283 19.6561 19.3254 19.8128C19.3226 19.9694 19.3524 20.125 19.4133 20.2703C19.4741 20.4155 19.5647 20.5475 19.6796 20.6583C19.7945 20.7691 19.9313 20.8564 20.0819 20.9151C20.2326 20.9738 20.3939 21.0026 20.5564 20.9998C20.7188 20.9971 20.879 20.9628 21.0274 20.899C21.1758 20.8352 21.3094 20.7433 21.4201 20.6287L24.6462 17.5176C24.8727 17.2988 25 17.0023 25 16.6931C25 16.384 24.8727 16.0874 24.6462 15.8687L21.4201 12.7576C21.1933 12.5391 20.8858 12.4164 20.5652 12.4164C20.2446 12.4164 19.9371 12.5391 19.7103 12.7576Z"
                      fill="black"
                    />
                  </svg>
                )}
              </div>

              <div className=" border-r-2 flex flex-col gap-5 py-4">
                <textarea
                  placeholder="Type to translate"
                  value={text}
                  onChange={handleTextChange}
                  className="text-xl text-[rgba(0, 0, 0, 0.49)] font-normal border border-transparent rounded-lg p-2 focus:outline-none"
                />
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
    </section>
  );
};

export default Hero;
