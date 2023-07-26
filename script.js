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

var dem_economy_line = document.querySelector("#dem-economy-line"),
    dem_healthcare_line = document.querySelector("#dem-healthcare-line"),
    dem_war_line = document.querySelector("#dem-war-line");

var biden_economy = document.querySelector("#biden-economy"),
    democrat_economy_endpoint = document.querySelector("#democrat-economy-endpoint"),
    biden_healthcare = document.querySelector("#biden-healthcare"),
    democrat_healthcare_endpoint = document.querySelector("#democrat-healthcare-endpoint"),
    biden_war = document.querySelector("#biden-war"),
    democrat_war_endpoint = document.querySelector("#democrat-war-endpoint");

drawPath(biden_economy,democrat_economy_endpoint,dem_economy_line);
drawPath(biden_healthcare,democrat_healthcare_endpoint,dem_healthcare_line);
drawPath(biden_war,democrat_war_endpoint,dem_war_line);
