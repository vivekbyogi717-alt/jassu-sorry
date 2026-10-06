let current=1;
const total=8;
const text="I'm sorry, Jassu... ❤️";
let i=0;

function type(){
  if(i<text.length){
    document.getElementById("typing").textContent+=text[i++];
    setTimeout(type,80);
  }
}
type();

function go(n){
  document.getElementById("s"+current).classList.remove("active");
  current=n;
  document.getElementById("s"+current).classList.add("active");
  document.getElementById("counter").textContent=current+" / "+total;
  if([3,5,8].includes(n)) burst(18);
}

function hug(){
  burst(42);
  setTimeout(()=>go(6),900);
}

function burst(count){
  const app=document.querySelector(".app");
  const symbols=["♥","❤","✨","💗","🌸","✦","🫂"];
  for(let n=0;n<count;n++){
    const e=document.createElement("div");
    e.className="confetti";
    e.textContent=symbols[Math.floor(Math.random()*symbols.length)];
    e.style.left=(45+Math.random()*10)+"%";
    e.style.top=(42+Math.random()*12)+"%";
    e.style.fontSize=(13+Math.random()*21)+"px";
    e.style.color=["#ff79bd","#ffd3e8","#fff","#ffc477"][Math.floor(Math.random()*4)];
    e.style.setProperty("--x",((Math.random()-.5)*360)+"px");
    e.style.setProperty("--y",((Math.random()-.5)*500)+"px");
    app.appendChild(e);
    setTimeout(()=>e.remove(),1800);
  }
}

function restart(){
  document.getElementById("s"+current).classList.remove("active");
  current=1;
  document.getElementById("s1").classList.add("active");
  document.getElementById("counter").textContent="1 / 8";
}
