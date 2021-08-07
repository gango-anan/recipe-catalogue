import { create } from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Recipe from '../components/Recipe';

test('should render Recipe', () => {
  const category = 'Chicken';
  const imageUrl = 'imageUrl';
  const tree = create(
    <BrowserRouter>
      <Recipe category={category} imageUrl={imageUrl} />
    </BrowserRouter>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
