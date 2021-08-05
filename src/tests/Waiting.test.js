import { create } from 'react-test-renderer';
import Waiting from '../components/Waiting';

test('Should render Waiting component correctly', () => {
  const tree = create(<Waiting />).toJSON();
  expect(tree).toMatchSnapshot();
});
