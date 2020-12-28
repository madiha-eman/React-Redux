import React from 'react'
import { Provider } from 'react-redux'
import Store from '../store'
import CounterButton from './counterButton'
import VeiwButton from './VeiwButton'


const App = () => {
    return (
        <Provider store={Store}>
        <div>
            <VeiwButton/>
            <CounterButton/>
        </div>
        </Provider>
    )
}

export default App
