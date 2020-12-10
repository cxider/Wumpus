function myFunction(w){
  var thing = document.getElementById(w)
  setTimeout(() => { thing.style.transform = "rotate(2deg)"; }, 0);
  setTimeout(() => { thing.style.transform = "rotate(-2deg)"; }, 100);
  setTimeout(() => { thing.style.transform = "rotate(0deg)"; }, 200);
}
