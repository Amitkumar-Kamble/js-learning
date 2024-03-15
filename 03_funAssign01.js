console.log("==========Function with no arg & no return value==========");
function show(){
    console.log("My name is: Amitkumar Kamble");
}
show();
console.log("==========Function2==========");
function display(){
    console.log("My University Name is: Mumbai University");
}
display();

console.log("==========Step2==========");
function personalDetails(firstName,lastName,universityName){
    console.log("My Name is:", firstName, lastName, "&", "My University Name is:", universityName);
}
personalDetails("Amitkumar","Kamble","Mumbai University");


console.log("==========Step3==========");
function swapValues(arg1,arg2){
    console.log("Before Swap:",arg1,arg2);
    var temp = arg1;
    arg1 = arg2;
    arg2 = temp;
    console.log("After Swap:",arg1,arg2);
}
swapValues("Virat","Anushka");
swapValues(1000,2000)

console.log("==========Step3==========");
function addThreValues(n1,n2,n3) {
    var result = n1+n2+n3;
    console.log("Addition is:",result);
}
addThreValues(10.23,600,40);
addThreValues("Hello"," Good"," Morning");