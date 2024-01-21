import React from 'react'

const Button = ({children, className}) => {
  return (
    <div>
        <button className={`red px-[10px] py-[8px] bg-[#f4ede530] rounded-[12px] border border-[#F4EDE5] ${className}`} >
                {children}
        </button>
    </div>
  )
}

export default Button