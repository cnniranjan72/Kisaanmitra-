import { ButtonHTMLAttributes, FC, ReactNode } from "react";

interface AnimatedButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  bgColor?: string;       // background color class
  textColor?: string;     // text color class
  hoverTextColor?: string;// text color on hover
}

const AnimatedButton: FC<AnimatedButtonProps> = ({
  children,
  bgColor = "bg-white",
  textColor = "text-primary",
  hoverTextColor = "hover:text-white",
  className = "",
  ...props
}) => {
  return (
    <button
      {...props}
      className={`
        ${bgColor} ${textColor} font-semibold px-6 py-3 rounded-xl shadow-lg
        transition-all duration-300 ease-in-out transform
        hover:-translate-y-1 hover:scale-105 hover:shadow-2xl ${hoverTextColor} ${className}
      `}
    >
      {children}
    </button>
  );
};

export default AnimatedButton;
