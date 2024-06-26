import { ChangeEvent, useRef } from 'react';
import { CiSearch } from "react-icons/ci";

interface IInputWithUseDebaunce {
  onChange: (value: string) => void,
  value?:string
}

export const Input = ({onChange, value}: IInputWithUseDebaunce) => {
  const inputSearchRef = useRef(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  const handleFocus = () => {
    //@ts-expect-error: Ignore error
    window.scrollTo(0, inputSearchRef.current.offsetTop - 130);
  };

  return (
    <div className='relative my-4' ref={inputSearchRef}>
      <input
        className='block z-1 lg:w-1/3 md:w-2/4 w-full p-4 ps-12 text-sm outline-none text-white border border-gray-800 rounded-lg bg-black focus:ring-purpleshade-400 focus:border-purpleshade-400 dark:bg-grayshade-500 dark:border-grayshade-300 dark:placeholde-grayshade-50 dark:text-white dark:focus:ring-purpleshade-400 dark:focus:border-purpleshade-400'
        placeholder='Pesquisar ...'
        onFocus={handleFocus}
        onChange={handleChange}
        value={value}
        data-testid="default-input-testid"
      />
      <div className='absolute z-2 cursor-pointer inset-y-0 start-0 flex items-center ps-3'>
        <CiSearch className='p-1 w-7 h-7 text-white rounded-lg bg-orange-300' />
      </div>
    </div>
  );
};