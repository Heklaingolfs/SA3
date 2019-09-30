const candies = require('../data/data').candies;
const NOT_FOUND = require('../resources/common').NOT_FOUND_INDICATOR;

/***
  Sér um sælgætis gögnin í kerfinu
 ***/

const candyService = () => {

    // Sækir allt sælgæti
    const getAllCandies = () => candies;

    // Býr til nýtt sælgæti í kerfið
    const createCandy = candy => {
        let highestId = 0;
        candies.forEach(c => { if (c.id > highestId) { highestId = c.id; }});
        const id = highestId + 1; const { name, description } = candy;
        const newCandy = { id, name, description, };
        candies.push(newCandy);
        return newCandy;
    };

    // Sækja ákv nammi eftir auðkenni
    const getCandyById = id => {
        const candy = candies.filter(c => c.id == id);
        // NOT_FOUND = -1
        if (candy.length === 0) { return NOT_FOUND; }
        // annars returna fyrsta stakinu
        return candy[0];
    };

    return {
        getAllCandies,
        getCandyById,
        createCandy
    };
};

module.exports = candyService();