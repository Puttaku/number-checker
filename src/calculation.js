export const isPrime = (num) => {
    // if number input equal 0 or 1
    if(num == 0 || num == 1) return "false"
    // if number input equal 2
    else if(num == 2) return "true"
    // if number can divine by 2
    else if(num % 2 == 0) return "false"
    else{
        // check only odd number and it finishes when the checked number is more than half of the input number
        for(var i = 3; i < Math.ceil(num/2);i += 2){
            if(num % i == 0){
                return "false"
            }
        }
    }
    return "true"
}

export const isFibonnaci = (num) => {
    // if input number is equal to 0 or 1
    if(num == 0 || num == 1) return "true"
    else{
        // start with 2 number from Fibonacci sequences
        var fbArr = [0, 1]
        for(var i = 1; fbArr[i - 1] + fbArr[i] <= num;i++){
            if(fbArr[i - 1] + fbArr[i] == num){
                return "true"
            }
            else{
                fbArr.push(fbArr[i - 1] + fbArr[i])
            }
        }
    }
    return "false"
}

// this prevent all unwanted condition
/*
    If the value entered by users are not integer, round it to the nearest integer. If user enter negative values, 
    replace it with 1.
*/
export const onlyPositive = (num) => !(/^\-?\d*$/).test(num) || Math.round(parseFloat(num)) <= 0 ? 1 : num