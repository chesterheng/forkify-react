import React, { Component } from 'react';
import ResultLink from './ResultLink';
import Loader from './Loader';
import Button from './Button';

export default class Results extends Component {

    render(){
        const results = this.props.results;
        if(results.length === 0 && this.props.query)
        {
            return (
                <div className="results">
                    <Loader />
                </div>
            );
        }

        const currentPage = this.props.currentPage;
        const resPerPage = this.props.resPerPage;

        // render results of currente page
        const start = (currentPage - 1) * resPerPage;
        const end = currentPage * resPerPage;
        const pages = Math.ceil(results.length / resPerPage);

        const renderRecipes = results.slice(start, end).map(recipe => (
            <ResultLink
                key={'recipe-' + recipe.recipe_id}
                recipe_id={recipe.recipe_id}
                title={recipe.title}
                publisher={recipe.publisher}
                image_url={recipe.image_url}
            />
        ));

        const buttons = [];
        if (currentPage === 1 && pages > 1) {
            // Only button to go to next page
            buttons.push(<Button key={currentPage+1}
                                 gotoPage={currentPage+1}
                                 type='next'
                                 onGotoPageClick={this.handleGotoPageClick} />);
            // button = createButton(page, 'next');
        } else if (currentPage < pages) {
            // Both buttons
            buttons.push(<Button key={currentPage-1}
                                 gotoPage={currentPage-1}
                                 type='prev'
                                 onGotoPageClick={this.handleGotoPageClick} />);
            buttons.push(<Button key={currentPage+1}
                                 gotoPage={currentPage+1}
                                 type='next'
                                 onGotoPageClick={this.handleGotoPageClick} />);
        } else if (currentPage === pages && pages > 1) {
            // Only button to go to prev page
            buttons.push(<Button key={currentPage-1}
                                 gotoPage={currentPage-1}
                                 type='prev'
                                 onGotoPageClick={this.handleGotoPageClick} />);
        }

        return (

            <div className="results">
                <ul className="results__list">
                    {renderRecipes}
                </ul>

                <div className="results__pages">
                    {buttons}
                </div>
            </div>
        );
    }

    handleGotoPageClick = gotoPage => { this.props.onGotoPageClick(gotoPage); };
};