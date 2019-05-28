const container = document.querySelector("#container");
const divs = [];
const btn = document.querySelector('button');

function resetGrid () {
  let size = (prompt("How many squares per side?"));
  if (size<3) {
    alert('Please choose a number higher than 2!');
    return;
  }
  for (let i = divs.length-1; i>-1; i--) {
    container.removeChild(divs[i]);

  }
  for (let i=0; i<(size**2); i++) {
    divs[i] = document.createElement("div");
    divs[i].classList.add('gridDiv');
    divs[i].setAttribute('id','div' + i);
    divs[i].style.width = ((100/size)+"vh")
    divs[i].style.height = ((100/size)+"vh")
    container.appendChild(divs[i]);
  }
  divs.forEach((div) => {
    div.addEventListener('mouseenter', (e)=>{
      e.target.classList.add('active');
      console.log(e);
    });
  });
}

for (let i=0; i<16; i++) {
  divs[i] = document.createElement("div");
  divs[i].classList.add('gridDiv');
  divs[i].setAttribute('id','div' + i);
  container.appendChild(divs[i]);
}

btn.addEventListener('click',()=>{
  divs.forEach((div)=> {
    div.classList.remove('active');

  })
  resetGrid();
});

divs.forEach((div) => {
  div.addEventListener('mouseenter', (e)=>{
    e.target.classList.add('active');
    console.log(e);
  });
});
