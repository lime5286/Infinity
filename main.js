function game(){
  ct = OmegaNum.mul(genam[0],multi[0])
  cash = OmegaNum.add(cash,OmegaNum.div(ct,10))
  abr(cel,cash)
    cel.style.left = (celpar.offsetWidth/2)-(cel.offsetWidth/2) +"px"
  }
function myLoop() {
  setTimeout(function() {   //  call a 3s setTimeout when the loop is called
    game();
    err();
    myLoop();             //  ..  again which will trigger another
  }, tick)
}
myLoop()
