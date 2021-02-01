var nameofplayers=[];
function submit(){
for(i=1;i<11;i++){
var playernames=document.getElementById("name_of_the_student_"+i).value;
nameofplayers.push(playernames);
}
document.getElementById("display_name_with_commas").innerHTML=nameofplayers;
console.log(nameofplayers);
var removethecomas=nameofplayers.join("")+" ";
document.getElementById("display_name_without_commas").innerHTML=removethecomas;
}
