#!/usr/bin/env node

const lib = require("./lib");

if (process.argv.length <= 3) {
    console.log("Insufficient parameter!");
    process.exit(1);
}

let command = process.argv[2];

let numbers = process.argv
    .slice(3, process.argv.length)
    .map((n) => parseFloat(n));

if (numbers.some((n) => isNaN(n))) {
    console.log("Some arguments are not numbers!");
    process.exit(1);
}

let result;
switch (command) {
    case "sum":
        result = lib.sum(numbers);
        break;
    case "avg":
        result = lib.avg(numbers);
        break;
    case "max":
        result = lib.max(numbers);
        break;
    case "min":
        result = lib.min(numbers);
        break;
    case "mean2":
        let mean2_arr = [];
        mean2_arr = lib.mean2(numbers);
        result = mean2_arr[0] + " " + mean2_arr[1];
        break;
    case "med2":
        let med2_arr = [];
        med2_arr = lib.med2(numbers);
        result = med2_arr[0] + " " + med2_arr[1];
        break;
    case "pareto":
        let par_arr = [];
        result = "";
        par_arr = lib.pareto(numbers);
        for(let i=0; i<par_arr.length/2; i++){
            result+=par_arr[2*i];
            result+=" ";
            result+=par_arr[2*i+1];
            result+="\n";
        }
        break;
    default:
        console.log("Wrong command!");
        process.exit(1);
}

console.log(result);
