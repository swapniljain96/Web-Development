//  document.querySelector("button").addEventListener("click", function () {
//   alert("I got clicked");
//   what to do when button click
// }); this is anonymous fucntion defining
// function handleClick() {
//   alert("I got clicked");
// }

// Detecting Button
var num = document.querySelectorAll(".drum").length;
for (var i = 0; i < num; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    // console.log(cls);
    // this.style.color="white";
    var cls = this.innerHTML;
    makeSound(cls);
    btnAnimation(cls);
  });
}

// Detecting Keys
document.addEventListener("keydown",function(event){
   // alert("Key is pressed !!!!!");
   // console.log(event.key);
   // console.log(key);
   var key = event.key;
   makeSound(key);
   btnAnimation(key);

});

// fucntion for Making Sound
function makeSound(key){
  switch (key) {
    case "w":
      var audio = new Audio('sounds/tom-1.mp3');
      audio.play();
      break;
    case "a":
      var audio = new Audio('sounds/tom-2.mp3');
      audio.play();
      break;
    case "s":
      var audio = new Audio('sounds/tom-3.mp3');
      audio.play();
      break;
    case "d":
      var audio = new Audio('sounds/tom-4.mp3');
      audio.play();
      break;
    case "j":
      var audio = new Audio('sounds/snare.mp3');
      audio.play();
      break;
    case "k":
      var audio = new Audio('sounds/crash.mp3');
      audio.play();
      break;
    case "l":
      var audio = new Audio('sounds/kick-bass.mp3');
      audio.play();
      break;
    default:console.log(key.toUpperCase()+" key is pressed.");
  }
}

function btnAnimation(key){
  var activebtn=document.querySelector("."+key);
  // activebtn.setAttribute()

  activebtn.classList.add("pressed");
  setTimeout(function(){
      activebtn.classList.remove("pressed");
  },100);

  }
