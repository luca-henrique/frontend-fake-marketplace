import { useAppDispatch } from '@/hooks/useAppDispatch';
import { useAppSelector } from '@/hooks/useAppSelector';
import { readCategoriesRequest } from '@/store/reducer/product/actions';
import { Category } from '@/types/Category';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export const FiltersProduct = () => {
  const { categories } = useAppSelector(state => state.product);
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(readCategoriesRequest())
  }, [])


  return (
    <RadioGroup defaultValue="option-one">
      {categories.map((category: Category) =>
        <div className="flex items-center space-x-2" key={category.id}>
          <RadioGroupItem value={category.id} id="option-one" />
          <Label htmlFor={category.id}>{category.name}</Label>
        </div>
      )}
    </RadioGroup>
  )

}