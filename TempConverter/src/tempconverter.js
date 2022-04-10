function ConvertTemperature(number, unitOfMeasurement){

    if(unitOfMeasurement.toLowerCase() == "c"){

let temp = (number-32) * 5/9;

console.log(temp);

    }
    else if(unitOfMeasurement.toLowerCase() == "f"){

let temp = (number*9/5)+32 ;

        console.log(temp);
    }
}