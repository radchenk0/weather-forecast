import React from 'react';
import Search from './components/Search';
import Capitals from './components/Capitals';
import Weather from './components/Weather';

function App() {
    return (
        <div>
            <h1>Weather forecast</h1>
            <Search />
            <Capitals />
            <Weather />
        </div>
    );
}

export default App;
