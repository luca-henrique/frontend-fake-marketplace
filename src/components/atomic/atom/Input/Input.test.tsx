import { render } from '@testing-library/react'
import { Input } from '..'
import {fireEvent, screen} from '@testing-library/react';

describe('test button', () => {
  const onChange = jest.fn();
  const {getByTestId, debug} = render(
    <Input onChange={onChange} />,
  );

  const input = getByTestId('default-input-testid');
   
  it('test button', () => {
    fireEvent.change(input, {target: {value: 'ahufdeuhfhu'}});
  })
  
  
  it('test button focus', () => {
    fireEvent.focus(input);
    fireEvent.input(input, {target: {value: 'blah'}});

    debug();
  });
  
  
  
})