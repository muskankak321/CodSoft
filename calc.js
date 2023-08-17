//function for finding grades
const find=() => {
//getting input from user
 var mathematics=document.getElementById('mathematics').value;
 var chemistry=document.getElementById('chemistry').value;
 var biology=document.getElementById('biology').value;
 var english=document.getElementById('english').value;
 var computer=document.getElementById('computer').value;
var grades="";

var TotalG=parseFloat(mathematics)+parseFloat(chemistry)+parseFloat(biology)+parseFloat(english)+parseFloat(computer);
var perce=(TotalG/500)*100;
debugger;
 if(perce<=100 && perce>=80)
 {     grades='A';         }
 else if(perce<=79 && perce>=60)
 { grades='B';}
 else if(perce<=59 && perce>=40)
 {  grades='F';}
  
 if(perce>=39.5)
 {
document.getElementById('showdata').innerHTML=`Out of 500 <br> Total = ${TotalG} <br> Percentage = ${perce}% <br>
 Grade = ${grades}.<br> "CONGRATULATIONS" YOU ARE PASS!! `
 }
else
{
    document.getElementById('showdata').innerHTML=`Out of 500 <br> Total = ${TotalG} <br> Percentage = ${perce}% <br>
     Grade = ${grades}.<br> "UNFORTUNATELY" YOU ARE FAIL!! `

}
}


























