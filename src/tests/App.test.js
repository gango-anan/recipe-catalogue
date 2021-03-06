import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { create } from 'react-test-renderer';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/index';
import App from '../components/App';

test('App component renders correctly', () => {
  const store = createStore(rootReducer, applyMiddleware(thunk));
  const tree = create(
    <Provider store={store}>
      <App />
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
