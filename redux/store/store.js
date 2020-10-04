import {createStore} from 'redux';
import {reducer} from '../reducers/todos';

const store = createStore(reducer);
export default store;
