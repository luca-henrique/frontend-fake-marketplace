import { ChangeEvent, useRef, useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { useDebaunce } from './useDebaunce';

interface IInputWithUseDebaunce {
  onChange: (value: string) => void,
}

export const InputWithDebounce = ({onChange}: IInputWithUseDebaunce) => {
  const [displayValue, setDisplayValue] = useState('');

  const debauncedChange = useDebaunce(onChange, 1500);
  const inputSearchRef = useRef(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDisplayValue(event.target.value);
    debauncedChange(event.target.value);
  };

  const handleFocus = () => {
    //@ts-expect-error: Ignore error
    window.scrollTo(0, inputSearchRef.current.offsetTop - 130);
  };

  return (
    <div ref={inputSearchRef}>
      <input
        placeholder='Pesquisar ...'
        onFocus={handleFocus}
        data-testid='debaunce-input-testid'
        onChange={handleChange}
        value={displayValue}
      />
      <CiSearch />
    </div>
  );
};