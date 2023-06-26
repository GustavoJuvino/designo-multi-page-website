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
    <div className="mb-[25px]">
        {type === "text-area" ? 
            <textarea 
                placeholder="Your Message"
                className="
                    xl:w-[380px]
                    sm:w-[573px]
                    w-full
                    h-[102px]
                    pb-16
                    bg-transparent
                    text-base
                    text-white
                    outline-none
                    pl-5
                    border-b-[1px]
                    hover:border-b-[3px]
                    overflow-y-hidden
                    resize-none
                "
            />
        : 
            <input 
                id={name}
                type={type}
                placeholder={value}
                className={`
                    xl:w-[380px]
                    sm:w-[573px]
                    w-full
                    h-[38px]
                    pb-3
                    bg-transparent
                    text-base
                    text-white
                    outline-none
                    pl-5
                    border-b-[1px]
                    hover:border-b-[3px]
                    z-40
                `}
            />  
        }
    </div>
  )
}

export default Input;