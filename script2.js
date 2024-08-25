let num1=5;
if(num1>14)
{
    console.log("My number is greater than 4");
}
else{
    console.log("my number is less than 4");
}
//--------------------------------------
let n=10;
if(n<2)
{
    console.log("My number is less than 2");

}
else if(n<5)
{
    console.log("my number is less than 5");
}
else if(n<12)
{
    console.log("My numner is less than 12");
}
else{
    console.log("I dont know what my number is");
}

//---------------------------------------
let a=15;
if(a==10 || a==15)
{
    console.log("my number is either 10 or 15");
}
if(a==10 && a==15)
{
    console.log("my number is eqaul to 10 and 15");
}
if(a=>10 && a<15)
    {
        console.log("my number is greater than 10 and less than 15");
    }
///------------------------------------
let num=1;
switch(num)
{
    case 1: num==1
        console.log("my number is 1");
        break;
    case 2: num<2
        console.log("my number is 2");
        break;
    case 3: num==3
        console.log("my number is 3");
        break;
    case 4: num==4
        console.log("my number is 4");
        break;
    case 5: num==5
        console.log("my number is 5");
        break;
    default:
        console.log("god knows what my number is");
}
//-----------------------------------
let s=6;
(s==6)?console.log("6"):console.log("Not 6");
 //------------------
 //for loop------------------
 for(let i=0;i<10;i++)
    {
        console.log(i);
    }   
//while loop
let g=1;
while(g<11)
{
    console.log(g);
    g++;
}
//do while loop
let q=1;
do{
    console.log(q);
    q++;

}
while(q<11)
    //let ..in
let obj={
    name:"gayatri",
    city:"Guntur",
    state:"AP",
    age:21
}
//for key in object
for(key in obj)
{
    console.log(key);
}
//can we iterate through values
for(key in obj)
{
    console.log(obj[key])
}
//------------------------[
let arr=[1,2,3,4,5]
for(i of arr)
{
    if(i==4)
    {
        console.log(i+5);
    }
}
//-------------------
let arr1=[1,2,3,4,5]
arr1.forEach((i)=>
{
    console.log(i);
})
let tasks=[
    "task1","task2","task3"
]
tasks.forEach((task)=>
{
    console.log(task);
})
arr1.map(function()
{

})
//NOTE: for each is not going to return an array where in case map it retures an array
