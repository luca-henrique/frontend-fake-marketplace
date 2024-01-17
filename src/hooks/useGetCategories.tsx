import { useEffect, useState } from 'react';
import { Category } from '../types/Category';

export const useGetCategories = () => {

  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    fetch(" https://api.escuelajs.co/api/v1/categories")
      .then((response) => response.json())
      .then((json) => setCategories(json));
  }, []);

  return { categories }
}