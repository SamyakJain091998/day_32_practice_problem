console.log("---------Hello! Welcome to employee wage calculator---------");
console.log("\n");

//UC1
{
    const IS_ABSENT = 0;
    let employeeCheck = Math.floor(Math.random() * 10) % 2;

    if (employeeCheck == IS_ABSENT) {
        console.log("<-------Employee is absent. Exiting the program!!!------->");
        return;
    } else {
        console.log("<-------Employee is present------->");
    }
}

console.log("\n");

//UC2 refactored to UC3 refactored to UC4 refactored to UC5
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;


function getWorkingHours(employeeCheckIndex) {
    switch (employeeCheckIndex) {
        case IS_PART_TIME:
            return PART_TIME_HOURS;

        case IS_FULL_TIME:
            return FULL_TIME_HOURS;

        default:
            return 0;
    }
}

function calculateTotalWage(workingHours) {
    return workingHours * WAGE_PER_HOUR;
}

let totalNumberOfDays = 0;
let totalWorkingHours = 0;
let dailyWageArray = new Array(); //Daily wage array

while (totalWorkingHours < 160 && totalNumberOfDays <= 20) {
    let employeeCheck = Math.floor(Math.random() * 10) % 3;
    let employeeHours = getWorkingHours(employeeCheck);
    dailyWageArray.push(calculateTotalWage(employeeHours));
    totalWorkingHours += employeeHours;
    totalNumberOfDays += 1;
}

let localTotalWage = 0;
for(let index in dailyWageArray){
    localTotalWage+=dailyWageArray[index];
}
console.log("Total employee wage is using array is : " + localTotalWage);
