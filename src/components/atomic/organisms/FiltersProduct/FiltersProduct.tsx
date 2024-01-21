import { useAppDispatch } from '@/hooks/useAppDispatch';
import { useAppSelector } from '@/hooks/useAppSelector';
import { readProductsRequest, searchProductByCategoryRequest } from '@/store/reducer/product/actions';
import { Category } from '@/types/Category';
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export const FiltersProduct = () => {
  const { categories } = useAppSelector(state => state.product);
  const dispatch = useAppDispatch()
  
  const searchProductsByCategory = (category:string) => {
    if (category === 'all'){
      dispatch(readProductsRequest())
    }else{
      dispatch(searchProductByCategoryRequest(category))
    }
  }

  return (
    <div className='rounded-xl p-8 mt-10 max-h-32 sm:max-h-max overflow-y-auto sm:overflow-y-clip'>
      <p className='font-semibold mb-4'>Filtros</p>
      <RadioGroup defaultValue="all" onValueChange={searchProductsByCategory}>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value='all' id="all" />
          <Label htmlFor='all' className='font-semibold'>Todos</Label>
        </div>
        {categories.map((category: Category) =>
          <div className="flex items-center space-x-2" key={category.id}>
            <RadioGroupItem value={category.id} id="option-one" />
            <Label htmlFor={category.id} className='font-semibold' >{category.name}</Label>
          </div>
        )}
      </RadioGroup>
    </div>
  )

}