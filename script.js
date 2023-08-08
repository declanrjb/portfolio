function createLine(source, target, deflection_x=2, deflection_y=2){
  var dx = target[0] - source[0],
      dy = target[1] - source[1],
      dr = Math.sqrt(dx * dx + dy * dy)/1.5;
      halfx = (target[0] + source[0])/deflection_x;
      halfy = (target[1] + source[1])/deflection_y;
  
  return "M" + " " +
    source[0] + " " +
    source[1] + " " + "Q" + " " +
    halfx + " " +
    source[1] + ", " +
    halfx + " " +
    halfy + " " +
    "Q" + " " +
    halfx + " " +
    target[1] + ", " +
    target[0] + " " +
    target[1]
}

function createStraightLine(source, target){
  return "M" + " " +
    source[0] + " " +
    source[1] + " " + "L" + " " +
    target[0] + " " +
    target[1]
}

function getPointPos(point){
  var pos = point.getBoundingClientRect();
  pos.middle = pos.top + (point.clientHeight/2);
  return pos;
}

function drawPath(leftpoint,rightpoint,path, deflection_x=2, deflection_y=2) {
  leftpoint_position = getPointPos(leftpoint)
  rightpoint_position = getPointPos(rightpoint)
  draftline = createLine([leftpoint_position.right,leftpoint_position.middle], [rightpoint_position.left,rightpoint_position.middle], deflection_x, deflection_y)
  path.setAttribute('d',draftline)
}

function drawLine(leftpoint,rightpoint,path) {
  leftpoint_position = getPointPos(leftpoint)
  rightpoint_position = getPointPos(rightpoint)
  draftline = createStraightLine([leftpoint_position.right,leftpoint_position.middle], [rightpoint_position.left,rightpoint_position.middle])
  path.setAttribute('d',draftline)
}

var dem_economy_line = document.querySelector("#dem-economy-line"),
    dem_healthcare_line = document.querySelector("#dem-healthcare-line"),
    dem_war_line = document.querySelector("#dem-war-line"),
    dem_environment_line = document.querySelector("#dem-environment-line"),
    dem_crime_line = document.querySelector("#dem-crime-line"),
    dem_morality_line = document.querySelector("#dem-morality-line"),
    dem_abortion_line = document.querySelector("#dem-abortion-line"),
    dem_immigration_line = document.querySelector("#dem-immigration-line"),
    dem_terrorism_line = document.querySelector("#dem-terrorism-line"),
    dem_inequality_line = document.querySelector("#dem-inequality-line");

var biden_economy = document.querySelector("#biden-economy"),
    democrat_economy_endpoint = document.querySelector("#democrat-economy-endpoint"),

    biden_healthcare = document.querySelector("#biden-healthcare"),
    democrat_healthcare_endpoint = document.querySelector("#democrat-healthcare-endpoint"),

    biden_war = document.querySelector("#biden-war"),
    democrat_war_endpoint = document.querySelector("#democrat-war-endpoint"),

    biden_environment = document.querySelector("#biden-environment"),
    democrat_environment_endpoint = document.querySelector("#democrat-environment-endpoint"),

    biden_crime = document.querySelector("#biden-crime"),
    democrat_crime_endpoint = document.querySelector("#democrat-crime-endpoint"),

    biden_morality = document.querySelector("#biden-morality"),
    democrat_morality_endpoint = document.querySelector("#democrat-morality-endpoint"),

    biden_abortion = document.querySelector("#biden-abortion"),
    democrat_abortion_endpoint = document.querySelector("#democrat-abortion-endpoint"),

    biden_immigration = document.querySelector("#biden-immigration"),
    democrat_immigration_endpoint = document.querySelector("#democrat-immigration-endpoint"),

    biden_terrorism = document.querySelector("#biden-terrorism"),
    democrat_terrorism_endpoint = document.querySelector("#democrat-terrorism-endpoint"),

    biden_inequality = document.querySelector("#biden-inequality"),
    democrat_inequality_endpoint = document.querySelector("#democrat-inequality-endpoint");

var voters_economy_line = document.querySelector("#voters-economy-line"),
    voters_healthcare_line = document.querySelector("#voters-healthcare-line"),
    voters_war_line = document.querySelector("#voters-war-line"),
    voters_environment_line = document.querySelector("#voters-environment-line"),
    voters_crime_line = document.querySelector("#voters-crime-line"),
    voters_morality_line = document.querySelector("#voters-morality-line"),
    voters_abortion_line = document.querySelector("#voters-abortion-line"),
    voters_immigration_line = document.querySelector("#voters-immigration-line"),
    voters_terrorism_line = document.querySelector("#voters-terrorism-line"),
    voters_inequality_line = document.querySelector("#voters-inequality-line");

var rep_economy_dot = document.querySelector("#rep-economy-dot"),
    democrat_economy_dot = document.querySelector("#democrat-economy-dot"),

    rep_healthcare_dot = document.querySelector("#rep-healthcare-dot"),
    democrat_healthcare_dot = document.querySelector("#democrat-healthcare-dot"),

    rep_war_dot = document.querySelector("#rep-war-dot"),
    democrat_war_dot = document.querySelector("#democrat-war-dot"),

    rep_environment_dot = document.querySelector("#rep-environment-dot"),
    democrat_environment_dot = document.querySelector("#democrat-environment-dot"),

    rep_crime_dot = document.querySelector("#rep-crime-dot"),
    democrat_crime_dot = document.querySelector("#democrat-crime-dot"),

    rep_morality_dot = document.querySelector("#rep-morality-dot"),
    democrat_morality_dot = document.querySelector("#democrat-morality-dot"),

    rep_abortion_dot = document.querySelector("#rep-abortion-dot"),
    democrat_abortion_dot = document.querySelector("#democrat-abortion-dot"),

    rep_immigration_dot = document.querySelector("#rep-immigration-dot"),
    democrat_immigration_dot = document.querySelector("#democrat-immigration-dot"),

    rep_terrorism_dot = document.querySelector("#rep-terrorism-dot"),
    democrat_terrorism_dot = document.querySelector("#democrat-terrorism-dot"),

    rep_inequality_dot = document.querySelector("#rep-inequality-dot"),
    democrat_inequality_dot = document.querySelector("#democrat-inequality-dot");

var trump_economy = document.querySelector("#trump-economy"),
    rep_economy_endpoint = document.querySelector("#rep-economy-endpoint"),

    trump_healthcare = document.querySelector("#trump-healthcare"),
    rep_healthcare_endpoint = document.querySelector("#rep-healthcare-endpoint"),

    trump_war = document.querySelector("#trump-war"),
    rep_war_endpoint = document.querySelector("#rep-war-endpoint"),

    trump_environment = document.querySelector("#trump-environment"),
    rep_environment_endpoint = document.querySelector("#rep-environment-endpoint"),

    trump_crime = document.querySelector("#trump-crime"),
    rep_crime_endpoint = document.querySelector("#rep-crime-endpoint"),

    trump_morality = document.querySelector("#trump-morality"),
    rep_morality_endpoint = document.querySelector("#rep-morality-endpoint"),

    trump_abortion = document.querySelector("#trump-abortion"),
    rep_abortion_endpoint = document.querySelector("#rep-abortion-endpoint"),

    trump_immigration = document.querySelector("#trump-immigration"),
    rep_immigration_endpoint = document.querySelector("#rep-immigration-endpoint"),

    trump_terrorism = document.querySelector("#trump-terrorism"),
    rep_terrorism_endpoint = document.querySelector("#rep-terrorism-endpoint"),

    trump_inequality = document.querySelector("#trump-inequality"),
    rep_inequality_endpoint = document.querySelector("#rep-inequality-endpoint");

var rep_economy_line = document.querySelector("#rep-economy-line"),
    rep_healthcare_line = document.querySelector("#rep-healthcare-line"),
    rep_war_line = document.querySelector("#rep-war-line"),
    rep_environment_line = document.querySelector("#rep-environment-line"),
    rep_crime_line = document.querySelector("#rep-crime-line"),
    rep_morality_line = document.querySelector("#rep-morality-line"),
    rep_abortion_line = document.querySelector("#rep-abortion-line"),
    rep_immigration_line = document.querySelector("#rep-immigration-line"),
    rep_terrorism_line = document.querySelector("#rep-terrorism-line"),
    rep_inequality_line = document.querySelector("#rep-inequality-line");

drawLine(biden_economy,democrat_economy_endpoint,dem_economy_line);
drawPath(biden_healthcare,democrat_healthcare_endpoint,dem_healthcare_line);
drawPath(biden_war,democrat_war_endpoint,dem_war_line,2.25,1.8);
drawPath(biden_environment,democrat_environment_endpoint,dem_environment_line);
drawPath(biden_crime,democrat_crime_endpoint,dem_crime_line);
drawPath(biden_morality,democrat_morality_endpoint,dem_morality_line);
drawLine(biden_abortion,democrat_abortion_endpoint,dem_abortion_line);
drawPath(biden_immigration,democrat_immigration_endpoint,dem_immigration_line,2.5,2);
drawPath(biden_terrorism,democrat_terrorism_endpoint,dem_terrorism_line);
drawPath(biden_inequality,democrat_inequality_endpoint,dem_inequality_line);

drawLine(democrat_economy_dot,rep_economy_dot,voters_economy_line);
drawLine(democrat_healthcare_dot,rep_healthcare_dot,voters_healthcare_line);
drawLine(democrat_war_dot,rep_war_dot,voters_war_line);
drawLine(democrat_environment_dot,rep_environment_dot,voters_environment_line);
drawLine(democrat_crime_dot,rep_crime_dot,voters_crime_line);
drawLine(democrat_morality_dot,rep_morality_dot,voters_morality_line);
drawLine(democrat_abortion_dot,rep_abortion_dot,voters_abortion_line);
drawLine(democrat_immigration_dot,rep_immigration_dot,voters_immigration_line);
drawLine(democrat_terrorism_dot,rep_terrorism_dot,voters_terrorism_line);
drawLine(democrat_inequality_dot,rep_inequality_dot,voters_inequality_line);

drawLine(rep_economy_endpoint,trump_economy,rep_economy_line);
drawPath(rep_healthcare_endpoint,trump_healthcare,rep_healthcare_line);
drawPath(rep_war_endpoint,trump_war,rep_war_line,1.9,2);
drawPath(rep_environment_endpoint,trump_environment,rep_environment_line);
drawLine(rep_crime_endpoint,trump_crime,rep_crime_line);
drawPath(rep_morality_endpoint,trump_morality,rep_morality_line,2.1,2);
drawPath(rep_abortion_endpoint,trump_abortion,rep_abortion_line);
drawLine(rep_immigration_endpoint,trump_immigration,rep_immigration_line);
drawPath(rep_terrorism_endpoint,trump_terrorism,rep_terrorism_line);
drawLine(rep_inequality_endpoint,trump_inequality,rep_inequality_line);

var elms = document.getElementsByClassName("economy");
var n = elms.length;
function changeColor(color) {
    for(var i = 0; i < n; i ++) {
        elms[i].style.backgroundColor = color;
        elms[i].style.stroke = color;
    }
}
for(var i = 0; i < n; i ++) {
    elms[i].onmouseover = function() {
        changeColor("yellow");
    };
    elms[i].onmouseout = function() {
        changeColor("black");
    };
}


