import { BrowserRouter } from 'react-router-dom';
import { create } from 'react-test-renderer';
import Navbar from '../components/Navbar';

test('should render the Navbar correctly', () => {
  const tree = create(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
