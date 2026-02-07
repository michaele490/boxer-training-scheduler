# Boxer Training Schedule

This application simulates the training routine for a boxer based on the selected day of the week<br>
The purpose of this app was to review working with conditions in JavaScript<br>
***

### Choice of Conditional Workflow
When working with conditions in JavaScript there are a couple options to choose from<br>
1. If/Else If/Else statements
2. Switch statement
3. The ternary operator

Depending on the situation a certain option may be the best.<br>
For example, if statements are best when the program's output depends on evaluating a combination of conditions or<br>
the conditions need to be checked sequentially.<br>
The ternary operator works well when assigning a value to a variable in which we only checking a single condition,<br>
for example, `let onWorkTrip = (hasVisa) ? true : false`.<br>
<br>
For this app, a I used both if and switch statements. Switch statements take a variable and each case checks for a certain<br>
using the strict equality operator. The code for which the case value matches the variable's value is ran.<br>
This means switch statements are best when comparing one value against many options. So a switch statement was used<br>
to get the morning and evening training routine for each day of the week apart from Thursday and Sunday which are rest days.<br>
A simple if statement was used to set the rest days:

`    if (day === "Thursday" || day === "Sunday") {
        restDay = true;
    }`

Further details are within the methods `setMorningTraining()` and `setEveningTraining()`.

### Code Execution
In the html the user enters a value for the day by choosing one of a couple options within a select tag.<br>
Aside from it probably being easier for a user to enter the input this way, I figured that by doing this<br>
I can work with the value passed to JavaScript right away and there'd be no need for methods to clean the<br>
value such as `trim()` or `toLowerCase()` as long as there were not any typos in the options.