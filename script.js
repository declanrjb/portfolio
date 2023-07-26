var path1 = document.querySelector(".p1"),
    path2 = document.querySelector(".p2");

var c1 = document.querySelector(".c1"),
    c1Pos = getPointPos(c1),
    c2 = document.querySelector(".c2"),
    c2Pos = getPointPos(c2),
    c3 = document.querySelector(".c3"),
    c3Pos = getPointPos(c3);


function getPointPos(point){
  var pos = $(point).position();
  pos.left += point.clientWidth/2;
  return pos;
}



path1.setAttribute('d', createLine([c1Pos.left, c1Pos.top], [c2Pos.left, c2Pos.top]));
path2.setAttribute('d', createLine([c1Pos.left, c1Pos.top], [c3Pos.left, c3Pos.top]));


function createLine(source, target){
  var dx = target[0] - source[0],
      dy = target[1] - source[1],
      dr = Math.sqrt(dx * dx + dy * dy)/1.5;
  
  return "M" +
    source[0] + "," +
    source[1] + "A" +
    dr + "," + dr + " 0 0,1 " +
    target[0] + "," +
    target[1];
}