// var username=

//document.getElementsByName("unm")
// console.log("afia oppong");
// console.log(document.getElementById("unm"))
// console.log(document.getElementById("pwd"))
// console.log(document.getElementById("btn"))

var button=document.getElementById("btn")
var products=["phone","charger" ,"ear piece","phone cover","battery","watch","printers","projectors","scanners","lighters"]
var objstudent1={firstname:"success",surname:"oppong",dob:"19th december 1997",level:100,institution:"KsTu"}
var objstudent2={firstname:"Grace",surname:"Aidoo",dob:"20th febuary 1998",level:100,institution:"KsTU"}
var objstudent3={firstname:"Gilbert",surname:"ofori",dob:"10th september 1995",level:100,institution:"KsTu"}
var student=[objstudent1,objstudent2,objstudent3]

button.addEventListener("click",function() {
   
    var username=document.getElementById("unm").value
    var password=document.getElementById("pwd").value
   
   //console.log(products);
    //console.log(username,);
    //console.log(objstudent1);
    //console.log(objstudent2);
    //console.log(objstudent3);
    console.log(objstudent2.firstname);
    console.log(student);
    for(var i=0;i<20;i++){
        console.log("afia")
    }
    student.forEach((element,position)=>{
    console.log(element.surname,position);
    })
    var tasks=[
        {id:1,name:"wake up",iscompleted:true},
        {id:2,name:"brush your teeth",incomplete:false},
        {id:3,name:"go to the market",iscompleted:false},
        {id:4,name:"learn how to code",iscompleted:true},
    ]

     var taskname=
     tasks.map((task,key)=>{
         return task.name
     })
     console.log(taskname);

     var completedtask =
     tasks.filter((task,key)=>{
         return task.iscompleted === true
     })
     console.log(completedtask);

     let mark =40;
     if(mark===60){
         console.log("the mark is 60")
     }

     else{
         console.log("the mark is not 60");
         
     }
     mark===60? console.log("success city academy"):
     console.log("i love cs")
     


     
     
     


    
    
    
    
    
    
    
    
   
    
    
})