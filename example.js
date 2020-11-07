let inputDate = new Date();
console.log(inputDate);
inputDate.setDate(8);
console.log("Setted date : " + inputDate);

if (inputDate.getDay() < new Date()) {
    console.log("past date");
} else {
    console.log("current or future date");
}