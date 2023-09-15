//Array_Exercises

var people = ["Greg", "Mary", "Devon", "James"];
//1.Using a loop, iterate through this array and console.log all of the people.

var people = ["Greg", "Mary", "Devon", "James"];
for (var list of people) {
    console.log(list);
}

//2.Write the command to remove “Greg” from the array.

var people = ["Greg", "Mary", "Devon", "James"];
people.shift();

//3.Write the command to remove “James” from the array.

var people = ["Greg", "Mary", "Devon", "James"];
people.pop();

//4.Write the command to add “Matt” to the front of the array.

var people = ["Greg", "Mary", "Devon", "James"];
people.unshift(Matt) 

//5.Write the command to add your name to the end of the array.

var people = ["Greg", "Mary", "Devon", "James"];
people.push(Chol);

//6.Using a loop, iterate through this array and after 1. console.log-ing “Mary”, exit from the loop.

var people = ["Greg", "Mary", "Devon", "James"];

for (var list of people) {
    console.log(Mary);
    break;
}

//7.Write the command to make a copy of the array using slice. The copy should NOT include “Mary” or “Matt”.

var people = ["Matt", "Greg", "Mary", "Devon", "James"];
people.slice(3);

//8.Write the command that gives the indexOf where “Mary” is located.

var people = ["Matt", "Greg", "Mary", "Devon", "James"]
people.indexOf(Mary);

//9.Write the command that gives the indexOf where “Foo” is located (this should return -1).

var people = ["Greg", "Mary", "Devon", "James"]
people.indexOf(Foo);

//10.Redefine the people variable with the value you started with. Using the splice command, remove “Devon” from the array and add “Elizabeth” and “Artie”. Your array should look like this when you are done ["Greg", "Mary", "Elizabeth", "Artie", "James"].

var people = ["Greg", "Mary", "Devon", "James"];
people.splice(2,1,"Elizabeth","Artie");

//11.Create a new variable called withBob and set it equal to the people array concatenated with the string of "Bob".

var withBob = people.concat("Bob");