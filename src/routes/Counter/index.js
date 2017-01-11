import { injectReducer } from '../../store/reducers'
import asyncComponent from 'containers/AsyncComponent'

export default (store) => asyncComponent(() => new Promise((resolve) => {
  /*  Webpack - use 'require.ensure' to create a split point
  and embed an async module loader (jsonp) when bundling   */
  require.ensure([], (require) => {
    /*  Webpack - use require callback to define
    dependencies for bundling   */
    const Counter = require('./containers/CounterContainer').default
    const reducer = require('./modules/counter').default

    /*  Add the reducer to the store on key 'counter'  */
    injectReducer(store, { key: 'counter', reducer })

    /*  Return getComponent   */
    resolve(Counter)
    /* Webpack named bundle   */
  }, 'counter')
}))
