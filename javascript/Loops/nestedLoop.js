/**
 * We have 5 persons in program each person to server 3 food items so that we have to write logic/code by using the nested loop
 */

// outer loop for persons
for (person = 1; person <= 5; person++) {
    console.log("Welcome Person " + person);
    // inner for loop to feed the 3 food items to each person
    for (food = 1; food <= 3; food++) {
        console.log("feeding food item " + food);
    }
}

/** output

Welcome Person 1
feeding food item 1
feeding food item 2
feeding food item 3
Welcome Person 2
feeding food item 1
feeding food item 2
feeding food item 3
Welcome Person 3
feeding food item 1
feeding food item 2
feeding food item 3
Welcome Person 4
feeding food item 1
feeding food item 2
feeding food item 3
Welcome Person 5
feeding food item 1
feeding food item 2
feeding food item 3
**/

