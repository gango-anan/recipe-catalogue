import { create } from 'react-test-renderer';
import FilterRecipes from '../components/FilterRecipes';

test('should render Recipe', () => {
  const categories = [{ id: 12345, categoryName: 'Chicken' }];
  const onChange = () => 'recipe-catalogue';
  const tree = create(<FilterRecipes categories={categories} onChange={onChange} />).toJSON();
  expect(tree).toMatchSnapshot();
});
