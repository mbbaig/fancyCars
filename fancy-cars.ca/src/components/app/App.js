import React from 'react';
import './App.css';
import Card from '../card/Card';
import CardList from '../list/CardList';
import Header from '../header/Header';
import SortBar from '../sort-bar/SortBar';
import mockData from '../../utils/MOCK_DATA.json';

const App = () => (
    <div className="App">
        <Header logo="https://placeimg.com/80/80/any"
            title="FancyCars" />
        <SortBar labelSort="Sort By:" />
        <CardList cars={mockData} />
        {/* <Card imgUrl="https://source.unsplash.com/800x800/?cars"
            name="car1"
            make="car1"
            model="car1"
            availability="In Dealership" />
        <Card imgUrl="https://source.unsplash.com/800x800/?cars"
            name="car2"
            make="car2"
            model="car2"
            availability="Out of Stock" />
        <Card imgUrl="https://source.unsplash.com/800x800/?cars"
            name="car2"
            make="car2"
            model="car2"
            availability="In Dealership" />
        <Card imgUrl="https://source.unsplash.com/800x800/?cars"
            name="car2"
            make="car2"
            model="car2"
            availability="Out of Stock" />
        <Card imgUrl="https://source.unsplash.com/800x800/?cars"
            name="car1"
            make="car1"
            model="car1"
            availability="In Dealership" />
        <Card imgUrl="https://source.unsplash.com/800x800/?cars"
            name="car2"
            make="car2"
            model="car2"
            availability="Out of Stock" />
        <Card imgUrl="https://source.unsplash.com/800x800/?cars"
            name="car2"
            make="car2"
            model="car2"
            availability="In Dealership" />
        <Card imgUrl="https://source.unsplash.com/800x800/?cars"
            name="car2"
            make="car2"
            model="car2"
            availability="Out of Stock" /> */}
    </div>
);

export default App;
