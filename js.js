let btn = document.getElementById("btn");
let count = 1;
btn.addEventListener("click", () => {
  btn.textContent = `Click me ${count++}`;
    if(count>10){
      count=1
    }
  });




  

  // if(count>10){
  //   btn.textContent = `Click me ${count++}`;

  // } else{
  //   btn.textContent = `Click me ${count--}`;
  // }
