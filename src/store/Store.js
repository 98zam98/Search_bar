import { createStore } from 'redux'
import SearchTokenReducer from './SearchTokenReducer'

const Store = createStore(SearchTokenReducer);

export default Store