
var c =document.querySelector('canvas');
var ctx = c.getContext('2d')



  var buttons=document.getElementsByClassName("button");
  for(var b=0;b<buttons.length;b++)
  {
    if(buttons[b].id=="katara")
    {
      buttons[b].style.background="url('images/katara.png')";   
    }
  }