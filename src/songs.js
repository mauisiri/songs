//Exercise 1: Get the array of all Artists.
function getAllArtists(array){
    let result = array.map(object => object.artist);
    //console.log("Exercise 1 ->", result);
    return result;
};

//Exercise 2: Get the songs of a certain artist
function getSongsFromArtist(array, artist){
    let result = array.filter(object => artist=== object.artist);
     //console.log(result);
    return result;
};

//Exercise 3: Alphabetic order by title
function orderAlphabetically(array){
    let onlyTitle = array.map(object => object.title).sort().slice(0,10);
    return onlyTitle;
  

    /* OPCIÓN B


function orderAlphabetically(array){
    const result = array.map(object => object.title);
    result.sort().slice(0,10);
//const newResult = result.filter((sgtitle,ids) => ids <10);
    
    return result;
};

    */
};

//Exercise 4: Order by year, ascending
function orderByYear(array){
   
    let onlyYear = array.map(object => ({title:object.title, year:object.year})).sort((a, b) => a.title < b.title ? -1: a.title > b.title ? 1: 0).sort((a, b) => a.year < b.year ? -1: a.year > b.year ? 1: 0)
    console.log(onlyYear)
    return onlyYear;

    /* RECURSOS 

    RECURSO BUBBLE SORT: https://www.programiz.com/dsa/sorting-algorithm
    
    
    RECURSO PO: https://javascript.plainenglish.io/20-most-used-array-methods-in-javascript-c57276982377

        */

    /* OPCIÓN B (más limpia)


    let result = [...array].sort((a, b) => {
        return a.year - b.year || a.title.localeCompare(b.title);
    });



    */

    /* OPCIÓN C
    function orderByYear(array){
        let yearOrdered = array.map(object => object.year).sort(ascending);
        return yearOrdered; 
    }

    */

    /* OPCIÓN D
    
    function orderByYear(array){
    let result = [...array].sort((a, b) =>  {
        if (a.year === b.year && a.title && b.title) {
            if (a.title > b.title) return 1;
            if (b.title > a.title) return -1;
            return 0;
        }
        return a.year - b.year;
    });
    return result;
};


    */
};

//Exercise 5: Filter songs by genre
function songsByGenre() {
    //Write your code here
};

//Exercise 6: Modify the duration of songs to seconds
function minutsToSeconds() {
    //Write your code here
};

//Exercise 7: Get the longest song
function getLongestSong(){
    //Write your code here
};

//Exercise 8: Get the shortest song
//Write the getShortestSong() function




if(typeof module !== 'undefined') {
    module.exports = {
        getAllArtists,
        getSongsFromArtist,
        orderAlphabetically,
        orderByYear,
        songsByGenre,
        minutsToSeconds,
        getLongestSong
    };
};
