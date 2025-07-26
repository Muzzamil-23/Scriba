import React from 'react'

const Button = ({
    children,
    type = 'submit',
    textColor = 'text-white',
    bgColor = 'bg-gradient-to-r from-blue-600 to-purple-600',
    width = '',
    ...props
}) => {
  return (
    <button className={`rounded-lg hover:cursor-pointer hover:from-blue-700 hover:to-purple-700 shadow-xl hover:shadow-2xl transition-all duration-300 px-8 py-3 text-md ${textColor} ${bgColor} ${width}`} {...props}>
        {children}
    </button>
  )
}

export default Button