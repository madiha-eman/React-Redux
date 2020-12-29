import React from 'react'
import { Provider } from 'react-redux'
import Store from '../store'
import CounterButton from './counterButton'


const App = () => {
    return (
        <Provider store={Store}>
        <div>
            
            <CounterButton/>
        </div>
        </Provider>
    )
}

export default App
