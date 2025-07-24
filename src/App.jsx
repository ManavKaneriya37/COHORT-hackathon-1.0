import './App.css'
import AppRoutes from './screens/AppRoutes.jsx'
import Loader from './screens/Loader/Loader.jsx'
import { store } from './app/store.js'
import {Provider} from 'react-redux'

function App() {

  return (
    <>
      <Provider store={store}>
        <AppRoutes />
      </Provider>
    </>
  )
}

export default App
