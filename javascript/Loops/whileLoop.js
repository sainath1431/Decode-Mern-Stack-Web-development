
/*

#while is a keyword.
#inside while boolean condition returns two values true or flase.
#until the boolean condition returns true then excuted the while loop if the boolean condition returns false then while loop will be terminate

age = 11;
while (age < 19) {
    console.log("age = " + age + " drinking is not allowed  ")
    age = age + 1
}

output:

age = 11 drinking is not allowed
age = 12 drinking is not allowed
age = 13 drinking is not allowed
age = 14 drinking is not allowed
age = 15 drinking is not allowed
age = 16 drinking is not allowed
age = 17 drinking is not allowed
age = 18 drinking is not allowed
age = 19 terminate the while loop

*/

/*
Infinite Loop Example

age = 11

while(true){
    console.log("drinking is not allowed");
    age = age+1
}

output : 

drinking is not allowed
...
...
..
...infinte times

Here always boolean condition is true so that never loop is terminated.

 */

/*
Inside while we can use the breake and continue to the control the flow of code.

*/

/*
age = 11

while (true) {
    console.log("drinking is not allowed age " + age)
    age = age + 1
    if (age >= 20) {
        break;
    }
}

drinking is not allowed age 11
drinking is not allowed age 12
drinking is not allowed age 13
drinking is not allowed age 14
drinking is not allowed age 15
drinking is not allowed age 16
drinking is not allowed age 17
drinking is not allowed age 18
drinking is not allowed age 19
while loop is terminated at age is 20

*/

/*
Here We wont to occur right swaps for right swaps greater than or equal to 10 but not for 3, 7, 9


right_swaps = 10

while (right_swaps >= 0) {
    if (right_swaps == 3 || right_swaps == 7 || right_swaps == 9) {
        right_swaps = right_swaps - 1
        continue
    }
    right_swaps = right_swaps - 1
    console.log("Keep Swiping right. Swap " + right_swaps)
}

output : 
Keep Swiping right. Swap 9
Keep Swiping right. Swap 7
Keep Swiping right. Swap 5
Keep Swiping right. Swap 4
Keep Swiping right. Swap 3
Keep Swiping right. Swap 1
Keep Swiping right. Swap 0
Keep Swiping right. Swap -1

*/