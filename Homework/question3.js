
//For loop
/*
function Main(){
    let i;
    for(i=0;i<10;i++)
    {
        console.log("hello");
    }
}
Main();


//for each loop
const fruits=["apple","mango","grapes"];

fruits.forEach(myFruits);
function myFruits(item)
{
    console.log(item);

}

*/

//map() in an array
//map method makes the new array and perform the operation it does not perform operation into an empty array
/*const number=[2,4,6,8];
const newArr=number.map(myFunction);
function myFunction(number)
{
    return number/2;
}
console.log(newArr);
console.log(number);


//filter

const arr=[5,1,2,4,7];
//filter odd value
function isOdd(x){
    return x%2;
}
const output=arr.filter(isOdd)
console.log(output);

//reduce
const output1=arr.reduce(function(acc,curr){
    acc=acc+curr;
    return acc;
},0);
console.log(output1);
*/

const array=["sanjay","aman","karan"];
array.sort();
console.log(array);