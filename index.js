let slider=document.querySelectorAll(".slide"),
arrowLeft=document.querySelector("#arrow-left"),
arrowRight=document.querySelector("#arrow-right");
current=0;
function reset(){
  for(let i=0;i<slider.length;i++){
    slider[i].style.display="none";
  }
}
function startslide(){
  reset();
  slider[0].style.display="block";
}
function slideLeft(){
  reset();
  slider[current-1].style.display="block";
  current--;
}
function slideRight(){
  reset();
  slider[current+1].style.display="block";
  current++;
}
arrowLeft.addEventListener("click",function(){
  if(current===0){
    current=slider.length;
  }
  slideLeft();
});
arrowRight.addEventListener("click",function(){
  if(current===slider.length-1){
    current=-1;
  }
  slideRight();
});

startslide();   

var to_top=document.querySelector(".backtotop");
window.addEventListener("scroll",()=>{
  if(window.pageYOffset>100){
    to_top.classList.add("active22");
  }
  else{
    to_top.classList.remove("active22");
  }
});


function openNav(){ $("#mySidebar").css("width","365px")};
function closeNav(){$("#mySidebar").css("width","0"); }


/*var onhover=document.getElementById("onhover");
function countrysection(){
  onhover.style.visibility="visible";
  onhover.style.padding="20px";
  onhover.style.height="40vh";
  onhover.style.background="#fff";
  onhover.style.width="20vh";
  onhover.style.padding="20px";
}
function removecountrysection(){
  onhover.style.visibility="hidden";
}


onmouseenter="countrysection(this)"
onmouseleave="removecountrysection(this)"
*/
$(".search-icon").hover(function(){
  $("#onhover").css("visibility","visible");
  $("#onhover").css("padding","20px");
  $("#onhover").css("height","70vh");
  $("#onhover").css("background","#fff");
  $("#onhover").css("width","50vh");
  $("#onhover").css("padding","20px");
});

$("#onhover").mouseleave(function(){
  $(this).css("visibility","hidden")
});


