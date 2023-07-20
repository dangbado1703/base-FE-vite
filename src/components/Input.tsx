import React from 'react'
interface Props extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  errorMessage?: string
}

const Input = React.forwardRef(({ errorMessage, ...rest }: Props, ref: any) => {
  return (
    <div className='mt-2'>
      <input
        {...rest}
        className='p-3 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm text-sm'
        ref={ref}
      />
      <div className='mt-1 text-red-600 min-h-[1.25rem] text-sm'>{errorMessage}</div>
    </div>
  )
})

export default Input
