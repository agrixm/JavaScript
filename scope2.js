//Nested Scope


function one(){
    const username = "agrim"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    //console.log(website);
    two()
}
one()


//In this example, the function `two` is nested inside the function `one`, and it can access the variable `username` defined in `one`. However, `one` cannot access the variable `website` defined in `two` because it is out of scope.
//This demonstrates how nested functions can access variables from their parent scope, but not the other way around.


if(true){
    const username1 = "agrim1"
    if(username1 === "agrim1"){
        const website1 = "youtube1"
        console.log(username1+website1);
    }
    //console.log(website1); // This will throw an error because website1 is not accessible here

}
//console.log(username1); 
// // This will throw an error because username1 is not accessible here




