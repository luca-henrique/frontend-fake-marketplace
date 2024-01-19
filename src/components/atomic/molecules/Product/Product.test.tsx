import '@testing-library/jest-dom'
import { render, cleanup } from "@testing-library/react"
import { Product } from "./Product"

afterEach(cleanup);

const product = {
  "id": 8,
  "title": "Classic Red Jogger Sweatpants",
  "price": 98,
  "description": "Experience.",
  "images": [
    "https://i.imgur.com/9LFjwpI.jpeg",
  ],
  "category": {
    "id": 1,
    "name": "Clothes",
    "image": "https://i.imgur.com/QkIa5tT.jpeg",
    "creationAt": "2024-01-19T01:26:48.000Z",
    "updatedAt": "2024-01-19T01:26:48.000Z"
  }
}


describe('Render Product', () => {

  it("render Product", () => {
    const { getByTestId } = render(<Product onClick={() => {}} {...product} />)
    const imgByTestId = getByTestId('product-image')
    expect(imgByTestId).toHaveClass('container-img')
  })
  
 
})
