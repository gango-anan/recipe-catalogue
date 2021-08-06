import { create } from 'react-test-renderer';
import FilterRecipes from '../components/FilterRecipes';

test('should render Recipe', () => {
  const categories = [{ strCategory: 'Chicken', idCategory: '1' }];
  const onChange = () => 'recipe-catalogue';
  const tree = create(<FilterRecipes categories={categories} onChange={onChange} />).toJSON();
  expect(tree).toMatchSnapshot();
});
