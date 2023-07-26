function createLine(source, target){
  var dx = target[0] - source[0],
      dy = target[1] - source[1],
      dr = Math.sqrt(dx * dx + dy * dy)/1.5;
      halfx = (target[0] + source[0])/2;
      halfy = (target[1] + source[1])/2;
  
  return "M" + " " +
    source[0] + " " +
    source[1] + " " + "Q" + " " +
    halfx + " " +
    source[1] + ", " +
    halfx + " " +
    halfy +
    "Q" + " " +
    halfx + " " +
    target[1] + ", " +
    target[0] + " " +
    target[1]
}

function getPointPos(point){
  var pos = $(point).position();
  pos.right = pos.left + point.clientWidth;
  pos.bottom = pos.top + point.clientHeight;
  pos.middle = pos.top + point.clientHeight/2;
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

path1.setAttribute('d', createLine([c1Pos.right, c1Pos.middle], [c2Pos.left, c2Pos.middle]));
/*
path2.setAttribute('d', createLine([c1Pos.left, c1Pos.top], [c3Pos.left, c3Pos.top]));
*/
