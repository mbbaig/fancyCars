import React from 'react';
import './App.css';
import BodyFilter from '../../containers/sort-results/BodyFilter';
import Header from '../header/Header';

const App = () => (
    <div className="App">
        <Header logo="https://placeimg.com/80/80/any"
            title="FancyCars" />
        <BodyFilter />
    </div>
);

export default App;
