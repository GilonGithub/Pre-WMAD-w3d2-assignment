// write a function that joins the array items together into one string, and log it to the console
let brokenSentence = ['I', 'am', 'a', 'broken', 'sentence'];
let str = "";

const joinSentence= function (arr) {
    
    arr.forEach(element => {
        str += element;
    });
};

joinSentence(brokenSentence);
console.log(str);