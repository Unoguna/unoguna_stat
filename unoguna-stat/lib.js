function sum(numbers) {
    return numbers.reduce((prev, curr) => prev + curr, 0);
}

function avg(numbers) {
    return sum(numbers) / numbers.length;
}

function max(numbers) {
    return numbers.reduce((max, curr) => (max > curr ? max : curr), numbers[0]);
}

function min(numbers){
    let min=numbers[0];
    let idx=0;
    for(let i=1; i<numbers.length; i++){
        if(numbers[i]<min){
            min = numbers[i];
            idx = i;
        }
    }
    return idx; 
}

function mean2(numbers) {
    let x=0;
    let y=0;
    let arr = [];
    
    for(let i = 0; i <numbers.length; i++){
        if(i%2==0){
            x += numbers[i];
        }
        else{
            y += numbers[i];
        }
    }
    var num1 = x/(numbers.length/2);
    var num2 = y/(numbers.length/2);
    num1 = ((num1.toFixed(2))*100)/100;
    num2 = ((num2.toFixed(2))*100)/100;
    arr[0] = num1;
    arr[1] = num2;
    return  arr;
}

function med2(numbers){
    let arr1 = [];
    let idx = 0;
    for(let i=0; i<numbers.length/2; i++){
        let sum=0;
        arr1[i] = 0;
        for(let j=0; j<numbers.length/2; j++){
            arr1[i] += Math.sqrt((numbers[2*i]-numbers[2*j])**2 + (numbers[2*i + 1]-numbers[2*j + 1])**2);
        }
        console.log(arr1[i]);
    }
    idx = min(arr1);
    let x = numbers[2*idx];
    let y = numbers[2*idx + 1];
    let ret = [];
    ret[0] = x;
    ret[1] = y;
    return ret;
}

function pareto(numbers){
    let arr2 = [];
    let idx = 0;
    for(let i=0; i<numbers.length/2; i++){
        let flag=0;
        for(let j=0; j<numbers.length/2; j++){
            if(numbers[2*i]<numbers[2*j] && numbers[2*i+1]<numbers[2*j+1]){
                flag = 1;
            }
        }
        if(flag == 0){
            arr2[2*idx] = numbers[2*i];
            arr2[2*idx+1] = numbers[2*i+1];
            idx++;
        }
    }
    return arr2;
}

module.exports = {
    sum,
    avg,
    max,
    min,
    mean2,
    med2,
    pareto,
};
