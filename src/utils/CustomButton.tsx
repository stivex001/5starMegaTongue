import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
};

function CustomButton({ children, className, onClick }: Props) {
  const defaultClassName =
    "rounded-lg py-[14px] px-8 bg-purple-20 text-white cursor-pointer hover:bg-purple-25 transition hover:duration-150 ease-in-out";

  const combinedClassName = className
    ? `${defaultClassName} ${className}`
    : defaultClassName;

  return (
    <div className={combinedClassName} onClick={onClick}>
      {children}
    </div>
  );
}

export default CustomButton;
