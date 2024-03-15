//Function with no arguments and no return value
console.log("================Fun with no arg & no return value===============");
function show(){
    console.log("Inside show function");
    }
    show();
    
    //Function with arguments and no return value

    console.log("================Fun with argumments & no return value===============");
    function add(n1,n2,n3) {
    console.log("Arguments:",n1,n2,n3);
    var result = n1+n2+n3;
    console.log(result);
    }
    add(3,6,7)
    add(99.89, 67, 456789);
    add(5,7);
    add(16,9,90,44); // 44 doesnt have any arguments thats why it will be ignored.
    add("Hi"," Good"," Morning"); // It will concatinate strings
    
    //Function with argument and return value
    console.log("================Fun with arguments & return value===============");
    function substract(numOne,numTwo) {
        console.log("===========Substraction===========");
        console.log("Arguments are:",numOne,numTwo); // body...
        var result = numOne-numTwo;	
        return result;
        console.log("Good Morning!"); // Unreahcable code Detected (Anything you write after function return will not be executed
    }
    var returnValue = substract(9,4);
    console.log("Result of Substraction is:", returnValue);
    
    var returnValue = substract(99,55);
    console.log("Result of Substraction is:", returnValue);