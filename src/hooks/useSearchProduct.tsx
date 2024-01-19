import { searchProductRequest } from '@/store/reducer/product/actions';
import { useEffect, useState } from 'react';
import { useAppDispatch } from './useAppDispatch';

export const useSearchProduct = () => {
  const [inputSearch, setInputSearch] = useState<string>('');
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(searchProductRequest(inputSearch))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputSearch])
  
  return { setInputSearch }
}