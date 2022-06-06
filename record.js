// fill in javascript code here
let stuname=document.getElementById("name").value;
let taBody=document.querySelector("tbody");
let tablerow=document.createElement("tr");
let tablecol=document.createElement("td");

let ap1=taBody.appendChild(tablerow)
let ap2=ap1.appendChild(tablecol);
let butt=document.getElementById("submit").addEventListener("click",myfunction);
function myfunction(){
    document.getElementsByTagName("td").innerText=stuname;39
}


 
 

