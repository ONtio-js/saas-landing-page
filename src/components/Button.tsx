import React from 'react'

const Button = ({text, icon, className, variant}: {text: string, icon?: React.ReactNode, className: string, variant: 'primary' | 'secondary' | 'outline'}) => {
  return (
    <button className={`bg-blue-500  px-4 py-2  ${className} ${variant === 'primary' ? 'hover:bg-blue-600 text-white' : variant === 'secondary' ? 'bg-gray-500 text-gray-700' : 'bg-transparent hover:bg-gray-200 text-gray-700 border border-gray-500'} duration-300 ease-in-out transition-all`}>
        {text}
        {icon}
    </button>
  )
}

export default Button