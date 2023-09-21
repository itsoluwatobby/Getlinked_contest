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
      <label htmlFor={name} className='text-[12px]'>{title}</label>
      <input 
        type={type} 
        id={name}
        placeholder={placeholder}
        name={name}
        pattern={type === 'tel' ? "[0-9]{3}-[0-9]{3}-[0-9]{4}" : '*'} 
        value={value}
        onChange={handleChange}
        className='bg-[#150E28] placeholder:text-gray-600 rounded-[4px] p-2 focus:outline-none w-full px-4 border border-gray-400'
      />
    </div>
  )
}
