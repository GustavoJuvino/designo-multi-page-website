import React from 'react';

interface InputProps {
    type: string,
    name: string,
    value: string,
}

const Input: React.FC<InputProps> = ({
    type,
    name,
    value
}) => {
  return (
    <div>
        <input 
            id={name}
            name={name}
            type={type}
            placeholder={value}
            className={`
                w-[380px]
                h-[38px]
                mb-[25px]
                bg-transparent
                text-base
                text-white
                outline-none
                pl-5
                duration-300
                border-b-[1px]
                hover:border-b-[3px]
            `}
            
        />
    </div>
  )
}

export default Input;