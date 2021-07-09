import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Join from './components/Join.js';
import Chat from './components/Chat.js';

const App = () => {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Join} />
            <Route path="/chat" component={Chat} />
        </BrowserRouter>
    )
}

export default App;