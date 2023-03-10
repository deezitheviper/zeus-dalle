import React from 'react'

const FormField = ({labelName, type, name, value, handleChange, isSupriseMe, handleSupriseMe, placeholder,}) => {
  return (
    <div>
        <div className='flex items-center gap-2 mb-2'>
            <label 
            htmlFor={name}
            className="block text-sm font-medium text-gray-900"
            >
            {labelName}
            </label>
            {isSupriseMe &&
            <button 
            type='button' 
            onClick={handleSupriseMe} 
            className="font-semibold text-xs bg-[#ECECF1] py-1 px-2 rounded-[5px] text-black" 
>Random Prompt</button>
            }
        </div>
        <input 
            type={type}
            id={name}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
            required
            className='bg-gray-200 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#46acff] focus:border-[#46acff] outline-none block w-full p-3'
        />

    </div>
  )
}

export default FormField