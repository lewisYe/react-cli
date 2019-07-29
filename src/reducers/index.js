import { combineReducers } from 'redux'

const context = require.context('./', true, /\.js$/)
const keys = context.keys().filter(item => item !== './index.js')
const reducers = {}
for (let i = 0; i < keys.length; i += 1) {
  reducers[keys[i].replace(/^\.\/(.*)\.js$/, "$1").replace(/(\/)/g, "_")] = context(keys[i]).default
}


const rootReducer = combineReducers({
  ...reducers
})
export default rootReducer