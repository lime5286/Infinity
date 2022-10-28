function sg() {
  localStorage.setItem('cash', cash);
  localStorage.setItem('ct', ct);
  localStorage.setItem('cost', cost[0]);
  localStorage.setItem('genam', genam[0]);
  save.style.visibility = "visible"
  setTimeout(function () {
    save.style.visibility = "hidden"
  },1500)
  console.log("game saved")
}
function lg() {
  console.log(localStorage.getItem('cash'));
  cash = OmegaNum(localStorage.getItem('cash'));
  ct = OmegaNum(localStorage.getItem('ct'));
  cost[0] = OmegaNum(localStorage.getItem('cost'));
  genam[0] = OmegaNum(localStorage.getItem('genam'));
}
function saveloop() {
  setTimeout(function () {;
    sg()
    saveloop();
  },10000)
};//10sec
window.onload = function () {
  lg()
  saveloop()
}
function reset() {
  localStorage.setItem('cash', 10);
  localStorage.setItem('ct', 1);
  localStorage.setItem('cost', 10);
  localStorage.setItem('genam',0)
  cash = OmegaNum(localStorage.getItem('cash'));
  ct = OmegaNum(localStorage.getItem('ct'));
  cost[0] = OmegaNum(localStorage.getItem('cost'));
  genam[0] = OmegaNum(localStorage.getItem('genam'))
}
function err(){
  if(OmegaNum.isneg(cash)) {
    console.error("cash is negative "+cash);
    cash = OmegaNum(0)
  }
}
function scie(n) {
  a = OmegaNum.floor(OmegaNum.logBase(n,10))
  return OmegaNum.div((n),OmegaNum.pow(10,a))+'e'+a
}
function abr(obj,num){
  if(OmegaNum.gte(num,'e9e15')){
    num = num.toHyperE()
    let indices = [];
    for(let i=0; i<num.length;i++) {
      if (num[i] === ".") indices.push(i);
    }
    for(let i=0; i<num.length;i++) {
      if (num[i] === "#") indices.push(i);
    }
    if(indices.length==1){indices = [0,indices[0]]}
    first = num.slice(0,indices[0]+2)
    b = num.slice(indices[1],num.length)
    c = b.slice(1,b.length)
    if(OmegaNum(c).gte(1e3)){b = "#"+scie(OmegaNum(c))}
    obj.innerHTML = first+b
  }
  else if (OmegaNum.gte(num,'9e15') & OmegaNum.lt(num,'e9e15')){
    obj.innerHTML = num.toFixed(2).toString()}
   if (OmegaNum.lt(num,'9e15')){
     num = num.floor().toString()
     if(OmegaNum.lt(num,'1e3')){obj.innerHTML = num}
     if(OmegaNum.gte(num,'1e3') & OmegaNum.lt(num,'1e6')){
       first = num.slice(0, -3)
       two = num.slice(-3)
       obj.innerHTML = first+','+two
     }
     if(OmegaNum.gte(num,'1e6') & OmegaNum.lt(num,'1e9')) {
       first = num.slice(0, -6)
       two = num.slice(-6,-3)
       three = num.slice(-3)
       obj.innerHTML = first+','+two+','+three
     }
       if(OmegaNum.gte(num,'1e9') & OmegaNum.lt(num,'1e12')) {
         first = num.slice(0, -9)
         two = num.slice(-9,-6)
         three = num.slice(-6,-3)
         four = num.slice(-3)
         obj.innerHTML = first+','+two+','+three+','+four
     }
       if(OmegaNum.gte(num,'1e12') & OmegaNum.lt(num,'1e15')) {
         first = num.slice(0, -12)
         two = num.slice(-12,-9)
         three = num.slice(-9,-6)
         four = num.slice(-6,-3)
         five = num.slice(-3)
         obj.innerHTML = first+','+two+','+three+','+four+','+five
     }
       if(OmegaNum.gte(num,'1e15') & OmegaNum.lt(num,'1e16')) {
         first = num.slice(0, -15)
         two = num.slice(-15,-12)
         three = num.slice(-12,-9)
         four = num.slice(-9,-6)
         five = num.slice(-6,-3)
         six = num.slice(-3)
          obj.innerHTML = first+','+two+','+three+','+four+','+five+','+six
     }
    }
   }
function every10(n,mnum,mn) {
  console.log(OmegaNum.eq(OmegaNum.mod(n,10),0))
  if(OmegaNum.eq(OmegaNum.mod(n,10),0)){
    return OmegaNum.times(mnum,mn)
  }
  return mnum
}
