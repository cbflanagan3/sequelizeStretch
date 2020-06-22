const db = require('./dbConfig');
const { Sequelize, DataTypes } = require('sequelize');

//YOUR CODE GOES HERE
const Recipe = db.define('Recipe', {
    name : {
        type: DataTypes.STRING,
        allowEmpty: false,
    },
    cookTime: {
       type: DataTypes.INTEGER,

    },

    vegan: {
        type: DataTypes.BOOLEAN,
    }
})
//--------------------
module.exports = Recipe;
