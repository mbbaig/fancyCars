import React, { Component } from 'react';
import './App.css';
import BodyFilter from '../../containers/sort-results/BodyFilter';
import Header from '../header/Header';

export default class App extends Component {
    componentDidMount() {
        this.props.loadData();
    }

    render() {
        return (
            <div className="App">
                <Header logo="https://placeimg.com/80/80/any"
                    title="FancyCars" />
                <BodyFilter />
            </div>
        );
    }
}
