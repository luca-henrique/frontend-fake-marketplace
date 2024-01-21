import { render } from '@testing-library/react'
import { Input } from '..'

describe('test button', () => {
  it('test button', () => {
    render(<Input value="" onChange={(value:string) => {console.log(value)}} />)
  })
})