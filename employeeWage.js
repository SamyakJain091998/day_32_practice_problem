console.log("---------Hello! Welcome to employee wage calculator---------");
console.log("\n");

//UC1
{
    const IS_ABSENT = 0;
    let empCheck = Math.floor(Math.random() * 10) % 2;

    if (empCheck == IS_ABSENT) {
        console.log("Employee is absent. Exiting the program!!!");
    } else {
        console.log("Employee is present");
    }
}