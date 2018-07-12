import { key } from './config';
import axios from 'axios';

export const getResults = async (query) => {
    try {
        const result = await axios(`/api/search?key=${key}&q=${query}`);
        return result.data.recipes;
    } catch (error) {
        alert(`error in getResults: ${error}`);
    }
}

export const getRecipe = async (id) => {
    try {
        const result = await axios(`/api/get?key=${key}&&rId=${id}`);
        return result.data.recipe;
    } catch (error) {
        console.log(`error in getRecipe: ${error}`);
    }
}