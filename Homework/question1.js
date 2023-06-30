/* in var we can redeclare the variable with the sam value*/

/*
var name="prashnat";
console.log(name);
var name="prashant";
console.log(name);
*/

/* In let we can not redeclare the variable with same vales*/
/*
let name="shivam";
console.log(name);
let name="shivam";
console.log(name);
*/

/* the scope of var function is through out the programme*/

/*

var name="shivam";
function welcome(){

    function hello()
    {
        var name="prashant";
        console.log(name);
    }
    hello();
 }

 console.log(name);
welcome();

/* the scope of let to the block*/
/*

function Welcome()
{
    let name="prashant";
    console.lag(name);
}

*/
// in constant we can not redefined the value
const Number=45;
console.log(Number);
Number=97;