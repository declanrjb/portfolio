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
    dem_war_line = document.querySelector("#dem-war-line"),
    dem_environment_line = document.querySelector("#dem-environment-line"),
    dem_crime_line = document.querySelector("#dem-crime-line"),
    dem_morality_line = document.querySelector("#dem-morality-line"),
    dem_abortion_line = document.querySelector("#dem-abortion-line"),
    dem_immigration_line = document.querySelector("#dem-immigration-line"),
    dem_terrorism_line = document.querySelector("#dem-terrorism-line");

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
    democrat_terrorism_endpoint = document.querySelector("#democrat-terrorism-endpoint");

var voters_economy_line = document.querySelector("#voters-economy-line"),
    voters_healthcare_line = document.querySelector("#voters-healthcare-line"),
    voters_war_line = document.querySelector("#voters-war-line"),
    voters_environment_line = document.querySelector("#voters-environment-line"),
    voters_crime_line = document.querySelector("#voters-crime-line"),
    voters_morality_line = document.querySelector("#voters-morality-line"),
    voters_abortion_line = document.querySelector("#voters-abortion-line"),
    voters_immigration_line = document.querySelector("#voters-immigration-line"),
    voters_terrorism_line = document.querySelector("#voters-terrorism-line");

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

    rep_terrorism_dot = document.querySelector("#rep-terrorism"),
    democrat_terrorism_dot = document.querySelector("#democrat-terrorism-dot");

drawPath(biden_economy,democrat_economy_endpoint,dem_economy_line);
drawPath(biden_healthcare,democrat_healthcare_endpoint,dem_healthcare_line);
drawPath(biden_war,democrat_war_endpoint,dem_war_line);
drawPath(biden_environment,democrat_environment_endpoint,dem_environment_line);
drawPath(biden_crime,democrat_crime_endpoint,dem_crime_line);
drawPath(biden_morality,democrat_morality_endpoint,dem_morality_line);
drawPath(biden_abortion,democrat_abortion_endpoint,dem_abortion_line);
drawPath(biden_immigration,democrat_immigration_endpoint,dem_immigration_line);
drawPath(biden_terrorism,democrat_terrorism_endpoint,dem_terrorism_line);

drawPath(democrat_abortion_dot,rep_abortion_dot,voters_abortion_line);
