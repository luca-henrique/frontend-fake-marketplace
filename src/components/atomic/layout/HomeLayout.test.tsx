import {render} from '@testing-library/react';
import {PageLayout} from './HomeLayout';

describe('test button', () => {
  render(<PageLayout title='TestPage'><h1>Exemplo</h1></PageLayout>);
});
