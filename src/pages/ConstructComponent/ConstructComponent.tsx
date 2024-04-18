import { Product } from './Product/Product'

export const ConstructComponent = () => {
  
  return(
    <div style={{height:"100vh", width:"100vw", alignItems:"center", justifyContent:"center", display:"flex", flexDirection:"column"}}>
      <Product />
    </div>
  )
}