import React from 'react'

const Button = ({
    children,
    type = 'submit',
    textColor = 'text-white',
    bgColor = 'bg-gradient-to-r from-blue-600 to-purple-600',
    hover = 'hover:from-blue-700 hover:to-purple-700',
    className='',
    ...props
}) => {
  return (
    <button className={`flex justify-center items-center rounded-lg hover:cursor-pointer ${hover} shadow-xl hover:shadow-2xl transition-all duration-300 text-md ${textColor} ${bgColor} ${className}`} {...props}>
        {children}
    </button>
  )
}

export default Button