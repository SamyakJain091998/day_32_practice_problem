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
let dailyWageMap = new Map();
let dailyHoursMap = new Map();

while (totalWorkingHours < 160 && totalNumberOfDays <= 20) {
    let employeeCheck = Math.floor(Math.random() * 10) % 3;
    let employeeHours = getWorkingHours(employeeCheck);
    dailyWageArray.push(calculateTotalWage(employeeHours));
    totalWorkingHours += employeeHours;
    totalNumberOfDays += 1;
    dailyWageMap.set(totalNumberOfDays, calculateTotalWage(employeeHours));
    dailyHoursMap.set(totalNumberOfDays, employeeHours);
}

let localTotalWage = 0;
for(let index in dailyWageArray){
    localTotalWage+=dailyWageArray[index];
}
console.log("Total employee wage is using array is : " + localTotalWage);

function totalWagesReduceFunction(totalWage, dailyWage){
    return totalWage + dailyWage;
}

console.log("Total wage using reduce function : " + dailyWageArray.reduce(totalWagesReduceFunction, 0));

let dailyCounter = 0;

function mapDayWithWage(dailyWage){
    dailyCounter++;
    return dailyCounter + "=" + dailyWage;
}

let mapDayWithWageArray = dailyWageArray.map(mapDayWithWage);
console.log(mapDayWithWageArray);

function fullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}

let fullyDayWageArray = mapDayWithWageArray.filter(fullTimeWage);
console.log(fullyDayWageArray);

console.log("First time occurence of wage 160 ----> day " + mapDayWithWageArray.find(fullTimeWage));

function isAllFullTimeWage(dailyWage){
    return dailyWage.includes("160");
}

console.log("Is every full time working day contains wage 160 ? " + fullyDayWageArray.every(isAllFullTimeWage));

function isSomePartTimeWage(dailyWage){
    return dailyWage.includes("80");
}

console.log("Is there any day which was a part time working day ? " + mapDayWithWageArray.some(isSomePartTimeWage));


function numberOfDaysEmployeeWorked(numOfDays, dailyWage){
    if(dailyWage > 0) return numOfDays+1;
    return numOfDays;
}

console.log("Calculating number of days employee worked using a function ----> " + dailyWageArray.reduce(numberOfDaysEmployeeWorked, 0));
console.log("\n");
console.log("=========PRINTING DAILY WAGE MAP==========");

for(let [key, value] of dailyWageMap){
    console.log(key + "=" + value);
}
console.log("-----daily hours map-----");
for(let [key, value] of dailyHoursMap){
    console.log(key + "=" + value);
}


/*
function filterDailyWageArray(localDailyWage){
    return (localDailyWage > 0);
}
*/
console.log("---------> " + dailyWageArray.filter(dailyWage => dailyWage > 0)
    .reduce(totalWagesReduceFunction, 0));

let nonWorkingDays = new Array();
let halfWorkingDays = new Array();
let fullWorkingDays = new Array();

function calculatorfunction(value, key, map) {

    if (value == 8) {
        fullWorkingDays.push(key);
    }
    else if (value == 4) {
        halfWorkingDays.push(key);
    }
    else {
        nonWorkingDays.push(key);
    }

}

dailyHoursMap.forEach(calculatorfunction);

console.log("non working days array -----> " + nonWorkingDays);
console.log("half working days array -----> " + halfWorkingDays);
console.log("full working days array -----> " + fullWorkingDays);
