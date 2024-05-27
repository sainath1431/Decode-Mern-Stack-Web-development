// ***** show the above pattern by using for loop


/*
below code is print the pattern in vertical line because the console.log() this is not used for horizontal pattern of *

for (i = 1; i <= 5; i++) {
    console.log("* ");
}

*
*
*
*
*

*/

// solution of above problem is done by process.stdout.write("* ")

/*

for (i = 1; i <= 5; i++) {
    process.stdout.write("* ")
}

* * * * *

*/

/*
Question : * * * * *
           * * * * *
           * * * * *
           * * * * *
           * * * * *
*/

/*

Approach 1 :

for (row = 1; row <= 5; row++) {
    for (col = 1; col <= 5; col++) {
        process.stdout.write("* ");
    }
    console.log()
}

* * * * *
* * * * *
* * * * *
* * * * *
* * * * *

*/

/*
for (row = 1; row <= 5; row++) {
    row_content = ""
    for (col = 1; col <= 5; col++) {
        row_content = row_content + "* "
    }
    console.log(row_content)
}

output : 

* * * * *
* * * * *
* * * * *
* * * * *
* * * * *

*/

/*

*
* *
* * *
* * * *
* * * * *

for (row = 1; row <= 5; row++) {
    for (col = 1; col <= row; col++) {
        process.stdout.write("* ")
    }
    console.log()
}

*/
/*

for (row = 5; row >= 1; row--) {
    for (col = row; col >= 1; col--) {
        process.stdout.write("* ")
    }
    console.log()
}

*/


