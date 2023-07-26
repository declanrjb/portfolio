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

function drawPath(leftpoint,rightpoint,path) {
  leftpoint_position = getPointPos(leftpoint)
  rightpoint_position = getPointPos(rightpoint)
  draftline = createLine([leftpoint_position.right,leftpoint_position.middle], [rightpoint_position.left,rightpoint_position.middle])
  path.setAttribute('d',draftline)
}

var path1 = document.querySelector(".p1");

var c1 = document.querySelector("#biden-environment"),
    c2 = document.querySelector("#democrat-economy-endpoint");

drawPath(c1,c2,path1)

/*
path1.setAttribute('d', createLine([c1Pos.right, c1Pos.middle], [c2Pos.left, c2Pos.middle]));

path2.setAttribute('d', createLine([c1Pos.left, c1Pos.top], [c3Pos.left, c3Pos.top]));
*/
