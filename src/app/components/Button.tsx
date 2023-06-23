import React from 'react';

type ButtonType = "light" | "dark"

interface ButtonProps {
  value: string;
  type: ButtonType;
}

const Button: React.FC<ButtonProps> = ({
  value,
  type,
}) => {
  return (
    <button className={`
          w-[152px]
          h-14
          rounded-lg
          text-base
          font-medium
          cursor-pointer
          duration-300
          hover:bg-light-peach
          hover:text-white
          ${type === "light" && "bg-white text-black"}
          ${type === "dark" && "bg-peach text-white"}
      `}
    >
        {value}
    </button>
  )
}

export default Button;