//genegator1
gen1.onclick = function(){
  if(OmegaNum.gte(cash,cost[0])){
    genam[0] = OmegaNum.add(genam[0],1)
    genamr[0] = OmegaNum.add(genamr[0],1)
    cash = OmegaNum.sub(cash,cost[0])
    cost[0] = every10(genam[0],cost[0],10)
    multi[0] = every10(genam[0],multi[0],2)
  }
}
//зделать maxbuy под every10
setInterval(function(){
  abr(gen1,cost[0])
  abr(gen2,cost[1])
  genamv.innerHTML = genam[0]+'('+genamr[0]+')'
  genamv.innerHTML = genam[1]+'('+genamr[1]+')'
},100)
gen1m.onclick = function(){
  if(OmegaNum.gte(cash,cost[0])){
    let ctscaling = OmegaNum(10),costscaling = OmegaNum(10)
    let fix = OmegaNum(0.045753147594141216),fix2 = OmegaNum(0.04139268515822507),fix1 = OmegaNum(0)
    let a = OmegaNum.mul(OmegaNum.logBase(OmegaNum.div(cash,cost[0]),costscaling),10)
    let b = OmegaNum.floor(a)
    let c,n
    if(OmegaNum.eq(b,0)){fix = fix1}
    else if (OmegaNum.eq(b,1)){fix = fix2}
    else {fix = fix}
    console.log(fix)
    if(OmegaNum.gte(OmegaNum.sub(a,b),fix)){
      a = OmegaNum.add(b,1)
    }
    else {
      a = b
    }if(OmegaNum.gte(a,10)){c = OmegaNum(10)}
    else {c = a}
    n = OmegaNum(1.1111111111).toFixed(OmegaNum.sub(c,1))
    console.log("Max buyed : "+a+" times")
    ct = OmegaNum.times(ct,OmegaNum.pow(ctscaling,a))
    cash = OmegaNum.sub(cash,OmegaNum.mul(OmegaNum.mul(OmegaNum.pow(costscaling,a),n),(cost[0].div(10))))
    cost[0] = OmegaNum.times(cost[0],OmegaNum.pow(costscaling,a))
  }
}
//generator1 highligth
setInterval(function () {
  if(OmegaNum.gte(cash,cost[0]) & bool == 1){gen1.style.background = 'rgb(85,85,85)'
  gen1.style.cursor = 'pointer'
}
  if(OmegaNum.gte(cash,cost[0]) & bool == 0){gen1.style.background = 'rgb(55,55,55)'}
  if(OmegaNum.lt(cash,cost[0])){gen1.style.background = 'rgb(25,25,25)'}
}, 10);
gen1.addEventListener("mouseout", (event) => {
  if(OmegaNum.gte(cash,cost[0])){bool = 0
}},)
 gen1.addEventListener("mouseover", (event)  => {
  if(OmegaNum.gte(cash,cost[0])){bool = 1
}},)
gen1m.addEventListener("mouseout", (event) => {
  event.target.style.background = 'rgb(55,55,55)'
  event.target.style.cursor = 'pointer'
},)
 gen1m.addEventListener("mouseover", (event)  => {
  event.target.style.background = 'rgb(85,85,85)'
},)
//generator2
gen2.onclick = function(){
  if(OmegaNum.gte(cash,cost[0])){
    ct = OmegaNum.times(ct,10)
    cash = OmegaNum.sub(cash,cost[1])
    cost[1] = OmegaNum.times(cost[1],10)
  }
}
