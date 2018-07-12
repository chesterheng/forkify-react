import React, { Component } from 'react';
import ShoppingItem from "./ShoppingItem";

export default class Shopping extends Component {

    render () {
        const recipe = this.props.recipe;
        if(Object.keys(recipe).length === 0){
            return (
                <div className="shopping">
                    <h2 className="heading-2">My Shopping List</h2>
                    <ul className="shopping__list"></ul>

                    <div className="copyright">
                        &copy; by Jonas Schmedtmann. Powered by
                        <a href="http://food2fork.com" target="_blank" className="link">Food2Fork.com</a>.
                    </div>
                </div>);
        }

        const items = recipe.ingredients;
        const renderItems = items.map(item => (
            <ShoppingItem
                key={'item-' + item.id}
                id={item.id}
                count={item.count}
                unit={item.unit}
                ingredient={item.ingredient}
            />
        ));

        return (
            <div className="shopping">
                <h2 className="heading-2">My Shopping List</h2>

                <ul className="shopping__list">
                    {renderItems}
                </ul>

                <div className="copyright">
                    &copy; by Jonas Schmedtmann. Powered by
                    <a href="http://food2fork.com" target="_blank" className="link">Food2Fork.com</a>.
                </div>
            </div>

        );
    }

}