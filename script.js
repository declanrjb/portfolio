function createLine(source, target){
  var dx = target[0] - source[0],
      dy = target[1] - source[1],
      dr = Math.sqrt(dx * dx + dy * dy)/1.5;
      halfx = (target[0] + source[0])/2;
      halfy = (target[1] + source[1])/2;
  
  return "M" + " " +
    source[0] + " " +
    source[1] + " " + "Q" + " " +
    source[0] + " " +
    halfy + ", " +
    halfx + " " +
    halfy +
    "Q" + " " +
    target[0] + " " +
    halfy + ", " +
    target[0] + " " +
    target[1]
}

function getPointPos(point){
  var pos = $(point).position();
  pos.left += point.clientWidth/2;
  pos.top += point.clientHeight/2;
  return pos;
}

var path1 = document.querySelector(".p1"),
    path2 = document.querySelector(".p2");

var c1 = document.querySelector(".c1"),
    c1Pos = getPointPos(c1),
    c2 = document.querySelector(".c2"),
    c2Pos = getPointPos(c2),
    c3 = document.querySelector(".c3"),
    c3Pos = getPointPos(c3);

path1.setAttribute('d', createLine([c1Pos.left, c1Pos.top], [c2Pos.left, c2Pos.top]));
/*
path2.setAttribute('d', createLine([c1Pos.left, c1Pos.top], [c3Pos.left, c3Pos.top]));
*/
