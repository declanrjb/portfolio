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
    dem_public_health_line = document.querySelector("#dem-public-health-line"),
    dem_energy_line = document.querySelector("#dem-energy-line"),
    dem_education_line = document.querySelector("#dem-education-line");

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
    democrat_inequality_endpoint = document.querySelector("#democrat-inequality-endpoint"),

    biden_public_health = document.querySelector("#biden-public-health"),
    democrat_public_health_endpoint = document.querySelector("#democrat-public-health-endpoint"),

    biden_energy = document.querySelector("#biden-energy"),
    democrat_energy_endpoint = document.querySelector("#democrat-energy-endpoint"),

    biden_education = document.querySelector("#biden-education"),
    democrat_education_endpoint = document.querySelector("#democrat-education-endpoint");

var voters_economy_line = document.querySelector("#voters-economy-line"),
    voters_healthcare_line = document.querySelector("#voters-healthcare-line"),
    voters_war_line = document.querySelector("#voters-war-line"),
    voters_environment_line = document.querySelector("#voters-environment-line"),
    voters_crime_line = document.querySelector("#voters-crime-line"),
    voters_morality_line = document.querySelector("#voters-morality-line"),
    voters_abortion_line = document.querySelector("#voters-abortion-line"),
    voters_immigration_line = document.querySelector("#voters-immigration-line"),
    voters_terrorism_line = document.querySelector("#voters-terrorism-line"),
    voters_inequality_line = document.querySelector("#voters-inequality-line"),
    voters_public_health_line = document.querySelector("#voters-public-health-line"),
    voters_energy_line = document.querySelector("#voters-energy-line"),
    voters_education_line = document.querySelector("#voters-education-line");

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
    democrat_inequality_dot = document.querySelector("#democrat-inequality-dot"),

    rep_public_health_dot = document.querySelector("#rep-public-health-dot"),
    democrat_public_health_dot = document.querySelector("#democrat-public-health-dot"),

    rep_energy_dot = document.querySelector("#rep-energy-dot"),
    democrat_energy_dot = document.querySelector("#democrat-energy-dot"),

    rep_education_dot = document.querySelector("#rep-education-dot"),
    democrat_education_dot = document.querySelector("#democrat-education-dot");

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
    rep_inequality_endpoint = document.querySelector("#rep-inequality-endpoint"),

    trump_public_health = document.querySelector("#trump-public-health"),
    rep_public_health_endpoint = document.querySelector("#rep-public-health-endpoint"),

    trump_energy = document.querySelector("#trump-energy"),
    rep_energy_endpoint = document.querySelector("#rep-energy-endpoint"),

    trump_education = document.querySelector("#trump-education"),
    rep_education_endpoint = document.querySelector("#rep-education-endpoint");

var rep_economy_line = document.querySelector("#rep-economy-line"),
    rep_healthcare_line = document.querySelector("#rep-healthcare-line"),
    rep_war_line = document.querySelector("#rep-war-line"),
    rep_environment_line = document.querySelector("#rep-environment-line"),
    rep_crime_line = document.querySelector("#rep-crime-line"),
    rep_morality_line = document.querySelector("#rep-morality-line"),
    rep_abortion_line = document.querySelector("#rep-abortion-line"),
    rep_immigration_line = document.querySelector("#rep-immigration-line"),
    rep_terrorism_line = document.querySelector("#rep-terrorism-line"),
    rep_inequality_line = document.querySelector("#rep-inequality-line"),
    rep_public_health_line = document.querySelector("#rep-public-health-line"),
    rep_education_line = document.querySelector("#rep-education-line"),
    rep_energy_line = document.querySelector("#rep-energy-line");

drawPath(biden_economy,democrat_economy_endpoint,dem_economy_line);
drawPath(biden_healthcare,democrat_healthcare_endpoint,dem_healthcare_line);
drawPath(biden_war,democrat_war_endpoint,dem_war_line,2.25,1.8);
drawPath(biden_environment,democrat_environment_endpoint,dem_environment_line,2.5,2);
drawPath(biden_crime,democrat_crime_endpoint,dem_crime_line);
drawPath(biden_morality,democrat_morality_endpoint,dem_morality_line);
drawPath(biden_abortion,democrat_abortion_endpoint,dem_abortion_line);
drawPath(biden_immigration,democrat_immigration_endpoint,dem_immigration_line,2.5,2);
drawPath(biden_terrorism,democrat_terrorism_endpoint,dem_terrorism_line,1.75,2);
drawPath(biden_inequality,democrat_inequality_endpoint,dem_inequality_line);
drawPath(biden_public_health,democrat_public_health_endpoint,dem_public_health_line,1.9,2);
drawPath(biden_energy,democrat_energy_endpoint,dem_energy_line,2.5,1.9);
drawPath(biden_education,democrat_education_endpoint,dem_education_line);

drawPath(democrat_economy_dot,rep_economy_dot,voters_economy_line);
drawPath(democrat_healthcare_dot,rep_healthcare_dot,voters_healthcare_line,2.2,2);
drawPath(democrat_war_dot,rep_war_dot,voters_war_line,2.2,2);
drawPath(democrat_environment_dot,rep_environment_dot,voters_environment_line,1.95,2);
drawPath(democrat_crime_dot,rep_crime_dot,voters_crime_line,2.2,2);
drawPath(democrat_morality_dot,rep_morality_dot,voters_morality_line,1.9,2);
drawPath(democrat_abortion_dot,rep_abortion_dot,voters_abortion_line);
drawPath(democrat_immigration_dot,rep_immigration_dot,voters_immigration_line,2.1,2.2);
drawPath(democrat_terrorism_dot,rep_terrorism_dot,voters_terrorism_line);
drawPath(democrat_inequality_dot,rep_inequality_dot,voters_inequality_line,1.8,2);
drawPath(democrat_public_health_dot,rep_public_health_dot,voters_public_health_line);
drawPath(democrat_energy_dot,rep_energy_dot,voters_energy_line);
drawPath(democrat_education_dot,rep_education_dot,voters_education_line);

drawPath(rep_economy_endpoint,trump_economy,rep_economy_line);
drawPath(rep_healthcare_endpoint,trump_healthcare,rep_healthcare_line);
drawPath(rep_war_endpoint,trump_war,rep_war_line,1.9,2);
drawPath(rep_environment_endpoint,trump_environment,rep_environment_line,1.9,2);
drawPath(rep_crime_endpoint,trump_crime,rep_crime_line);
drawPath(rep_morality_endpoint,trump_morality,rep_morality_line,2.1,2);
drawPath(rep_abortion_endpoint,trump_abortion,rep_abortion_line);
drawPath(rep_immigration_endpoint,trump_immigration,rep_immigration_line);
drawPath(rep_terrorism_endpoint,trump_terrorism,rep_terrorism_line,2.1,2);
drawPath(rep_inequality_endpoint,trump_inequality,rep_inequality_line,1.95,2);
drawPath(rep_public_health_endpoint,trump_public_health,rep_public_health_line,2.05,2.1);
drawPath(rep_energy_endpoint,trump_energy,rep_energy_line);
drawPath(rep_education_endpoint,trump_education,rep_education_line);

function hoverByClass(classname,colorover,colorout="lightgrey"){
  var elms=document.getElementsByClassName(classname);
  for(var i=0;i<elms.length;i++){
      elms[i].onmouseover = function(){
          for(var k=0;k<elms.length;k++){
              elms[k].style.borderColor = colorover;
              elms[k].style.stroke = colorover;

              var children = elms[k].querySelectorAll(".dot");
              if (children.length > 0) {
                for (var j=0; j < children.length; j++) {
                  children[j].style.backgroundColor = colorover;
                  children[j].style.borderColor = colorover;
                }
              }
          }
      };
      elms[i].onmouseout = function(){
          for(var k=0;k<elms.length;k++){
              elms[k].style.stroke = colorout;
              elms[k].style.borderColor = colorout;

              var children = elms[k].querySelectorAll(".dot");

              if (children.length > 0) {
                for (var j=0; j < children.length; j++) {
                  children[j].style.backgroundColor = colorout;
                  children[j].style.borderColor = colorout;
                }
              }
          }
      };
  }
  }

  function onlyUnique(value, index, array) {
    return array.indexOf(value) === index;
  }

  function oneOfList(ls1,ls2) {
    result = [];
    full_list = ls1.concat(ls2);
    full_list = full_list.filter(onlyUnique);
    for (var i=0; i < full_list.length; i++) {
      curr = full_list[i];
      if (!(ls1.includes(curr) && ls2.includes(curr))) {
        result.push(curr);
      }
    }
    return(result);
  }

  function antiHoverByClass(classname,colorover,colorout="lightgrey"){
    var elms=document.getElementsByClassName(classname);
    var anti_selector = ".issue";
    anti_selector = anti_selector.concat(":not(.",classname,")");
    var all_elms = document.querySelectorAll(anti_selector);
    var note_class = ".note"
    note_class = note_class.concat("[id='",classname,"']");
    var curr_issue = document.querySelector(note_class);
    console.log(curr_issue);
    for(var i=0;i<elms.length;i++){
        elms[i].onmouseover = function(){
            for(var k=0;k<all_elms.length;k++){
                all_elms[k].style.borderColor = colorover;
                all_elms[k].style.stroke = colorover;
  
                var children = all_elms[k].querySelectorAll(".dot");
                if (children.length > 0) {
                  for (var j=0; j < children.length; j++) {
                    children[j].style.backgroundColor = colorover;
                    children[j].style.borderColor = colorover;
                  }
                }
            }
            curr_issue.style.display = "block";
        };
        elms[i].onmouseout = function(){
            for(var k=0;k<all_elms.length;k++){
                all_elms[k].style.stroke = colorout;
                all_elms[k].style.borderColor = colorout;
  
                var children = all_elms[k].querySelectorAll(".dot");
  
                if (children.length > 0) {
                  for (var j=0; j < children.length; j++) {
                    children[j].style.backgroundColor = colorout;
                    children[j].style.borderColor = colorout;
                  }
                }
            }
            curr_issue.style.display = "none";
        };
    }
    }

    function singleSelect(classname,colorover,colorout="lightgrey"){
      var elms=document.getElementsByClassName(classname);
      var anti_selector = ".issue";
      anti_selector = anti_selector.concat(":not(.",classname,")");
      var all_elms = document.querySelectorAll(anti_selector);
      var note_class = ".note"
      var all_notes = document.querySelectorAll(note_class);
      note_class = note_class.concat("[id='",classname,"']");
      var curr_issue = document.querySelector(note_class);
      console.log(curr_issue);
      for(var i=0;i<elms.length;i++){
          elms[i].onmouseover = function(){
              for(var k=0;k<all_elms.length;k++){
                  all_elms[k].style.borderColor = "lightgrey";
                  all_elms[k].style.stroke = "lightgrey";
    
                  var children = all_elms[k].querySelectorAll(".dot");
                  if (children.length > 0) {
                    for (var j=0; j < children.length; j++) {
                      children[j].style.backgroundColor = "lightgrey";
                      children[j].style.borderColor = "lightgrey";
                    }
                  }
              }
              for (var j=0;j<elms.length;j++) {
                elms[j].style.borderColor = "black";
                elms[j].style.stroke = "black";
  
                var children = elms[j].querySelectorAll(".dot");
                if (children.length > 0) {
                  for (var z=0; z < children.length; z++) {
                    children[z].style.backgroundColor = "black";
                    children[z].style.borderColor = "black";
                  }
                }
              }
              for (var x=0; x < all_notes.length; x++) {
                all_notes[x].style.display = "none";
              }
              curr_issue.style.display = "block";
          };
          elms[i].onmouseout = function(){
            curr_issue.style.display = "none";
        };
      }
      }

  singleSelect("economy","black")
  singleSelect("war","black");
  singleSelect("environment","black");
  singleSelect("inequality","black");
  singleSelect("crime","black");
  singleSelect("morality","black");
  singleSelect("abortion","black");
  singleSelect("immigration","black");
  singleSelect("terrorism","black");
  singleSelect("public-health","black");
  singleSelect("energy","black");
  singleSelect("education","black");
  singleSelect("healthcare","black");







