import {render} from '@testing-library/react';
import {InputWithDebounce} from '..';
import {fireEvent, screen} from '@testing-library/react';

describe('test button', () => {
  const onChange = jest.fn();
  const {getByTestId, debug} = render(
    <InputWithDebounce onChange={onChange} />,
  );

  const input = getByTestId('debaunce-input-testid');

  it('test button', () => {
    fireEvent.change(input, {target: {value: 'ahufdeuhfhu'}});
  });

  it('test button focus', () => {
    fireEvent.focus(input);
    fireEvent.input(input, {target: {value: 'blah'}});

    debug();
  });
});
