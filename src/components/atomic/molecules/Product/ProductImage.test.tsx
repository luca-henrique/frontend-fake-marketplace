import '@testing-library/jest-dom'
import { render } from "@testing-library/react"
import { ProductImage } from "./ProductImage"


describe('Render Image', () => {
 
  it("render default img", () => {
    const { getByTestId } = render(<ProductImage url="" />)
    const imgByTestId = getByTestId('product-image')
    expect(imgByTestId).toHaveClass('container-img')
  })
  
  it("render product img", () => {
    const { getByTestId } = render(<ProductImage url="https://i.imgur.com/9LFjwpI.jpeg" />)
    const imgByTestId = getByTestId('product-image')
    expect(imgByTestId).toHaveClass('container-img')
  })
})
