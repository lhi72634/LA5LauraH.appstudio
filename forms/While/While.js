/*
First program - create a program that uses a 'while' loop and outputs each iteration as shown: 
> scenario:
form named 'while'
output to console: 
This is loop iteration 1.
This is loop iteration 2.
etc....
*/
let iteration = ['1', '2', '3'];
 
for (let i = 0; i < iteration.length; i++)
    console.log(`This is loop iteration ${iteration[i]}`)