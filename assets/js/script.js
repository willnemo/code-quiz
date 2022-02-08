//alert("js is reached");
var tasksToDoEl = document.querySelector("#tasks-to-do");
var start = function(event) { 
  event.preventDefault(); 
  alert("click is seen");
  tasksToDoEl.textContent = "59";
  for (let i =0; i<100; 1++)
  {
    setTimeout(i);
  }
    setTimeout(function(i) { tasksToDoEl.textContent = (i) }, 1000);

}; 


  startBtn.addEventListener("click", start);

  