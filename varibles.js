//varibles
const cel = document.getElementById("cash"),
 celpar = document.getElementById("cashpar"),
 gen1 = document.getElementById("gen1"),
 gen2 = document.getElementById("gen2"),
 gen1m = document.getElementById("gen1m"),
 gen2m = document.getElementById("gen2m"),
 genamv = document.getElementById("genam"),
 genamv2 = document.getElementById("genam2"),
 stop = document.getElementById("stop"),
 save = document.getElementById("save")
let cash = OmegaNum(10) , ct = OmegaNum(1)
let tick = 100
let cost = [OmegaNum(10),OmegaNum(2.5e2)]
let bool = 0
const ten = OmegaNum(10)
let multi = [OmegaNum(1),OmegaNum(2)]
let genamr = [OmegaNum(0),OmegaNum(0)]
let genam = [OmegaNum(0),OmegaNum(0)]
stop.onclick = function click(){
  cash = OmegaNum(prompt("cash"))
  genam[0] = OmegaNum(prompt("genam"))
  cost[0] = OmegaNum(prompt("cost1"))
  multi[0] = OmegaNum(prompt("multi")) 
}
