import React, { Component } from 'react';
import Header from './components/Header'
import Results from './components/Results'
import * as Api from './api/Api';
import Recipe from './models/Recipe';
import Search from './models/Search';
import RecipeDetail from "./components/RecipeDetail";
import Shopping from "./components/Shopping";

export default class App extends Component {

    constructor(props) {
        super(props);
            this.state = {
                query: "",
                results: [],
                currentPage: 1,
                resPerPage: 4,
                recipe: {}
        };
    }

    render() {
        return (
            <div className="container">
                <Header onQueryChange={this.handleQueryChange}
                        onResultChange={this.handleResultChange} />
                <Results    query={this.state.query}
                            results={this.state.results}
                            currentPage={this.state.currentPage}
                            resPerPage={this.state.resPerPage}
                            onGotoPageClick={this.handleGotoPageClick}/>
                <RecipeDetail recipe={this.state.recipe}
                              onDecreaseServingsClick={this.handleDecreaseServingsClick}
                              onIncreaseServingsClick={this.handleIncreaseServingsClick} />
                <Shopping recipe={this.state.recipe} />
            </div>
        );
    }

    handleQueryChange = query => { this.setState({ query }); }
    handleResultChange = results => { this.setState({ results }); };
    handleGotoPageClick = gotoPage => { this.setState({ currentPage: gotoPage }); };
    handleDecreaseServingsClick = () => {
        this.state.recipe.updateServings('dec');
        this.setState({ recipe: this.state.recipe });
    }
    handleIncreaseServingsClick = () => {
        this.state.recipe.updateServings('inc');
        this.setState({ recipe: this.state.recipe });
    }

    componentDidMount() {
        ['hashchange', 'load'].forEach(event => window.addEventListener(event, this.controlRecipe));
    };
    controlRecipe = async () => {
        //const recipe = await Api.getRecipe('36453');
        //console.log(recipe);

        // Get ID from url
        const id = window.location.hash.replace('#', '');

        if (id) {
            // Prepare UI for changes
            // renderLoader(elements.recipe);
            //
            // // Highlight selected search item
            // if (state.search) searchView.highlightSelected(id);
            //
            // Create new recipe object
            const recipe = new Recipe(id);

            try {
                // Get recipe data and parse ingredients
                await recipe.getRecipe();
                recipe.parseIngredients();

                // Calculate servings and time
                recipe.calcTime();
                recipe.calcServings();

                // Render recipe
                //clearLoader();
                this.setState({ recipe: recipe });
            } catch (error) {
                console.log(`error in controlRecipe: ${error}`);
            }
        }
    };

    controlList = () => {
        // // Create a new list IF there in none yet
        // if (!state.list) state.list = new List();
        //
        // // Add each ingredient to the list and UI
        // state.recipe.ingredients.forEach(el => {
        //     const item = state.list.addItem(el.count, el.unit, el.ingredient);
        //     listView.renderItem(item);
        // });
    }
}