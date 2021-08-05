import { create } from 'react-test-renderer';
import SearchRecipe from '../components/SearchRecipe';

test('should render SearchRecipe', () => {
  const tree = create(<SearchRecipe />).toJSON();
  expect(tree).toMatchSnapshot();
});
