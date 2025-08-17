import React from "react";
import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

export const Button = ({ children, variant = "primary", className, ...props }: ButtonProps) => {
  return (
    <button
      className={clsx(
        "rounded-full font-semibold transition-all duration-200 flex items-center justify-center gap-2",
        variant === "primary"
          ? "bg-white text-[#343060] shadow-md hover:shadow-lg hover:bg-gray-50"
          : "bg-transparent border-2 border-[#343060] text-[#343060] hover:bg-[#343060]/5",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
