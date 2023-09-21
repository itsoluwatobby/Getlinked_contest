import { ChangeEvent } from 'react'

type FieldInputProp = {
  name: string,
  value: string,
  title?: string,
  placeholder: string,
  type?: 'text' | 'tel' | 'email',
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export const FieldInput = ({ type='text', value, title, placeholder, name, handleChange }: FieldInputProp) => {

  return (
    <div className='flex flex-col w-full gap-0.5'>
      <label htmlFor={name} className='text-[12px] mobile:text-sm'>{title}</label>
      <input 
        type={type} 
        id={name}
        placeholder={placeholder}
        name={name}
        value={value}
        autoComplete='off'
        onChange={handleChange}
        className='bg-[#150E28] mobile:text-sm placeholder:text-gray-600 rounded-[5px] p-2.5 focus:outline-none w-full px-4 border border-gray-300'
      />
    </div>
  )
}
