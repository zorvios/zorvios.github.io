// Enter your key, values and event trigger name here
var myKey = "p-zB4ihr2nn0zNaPu8yIvX96pvGQL7GOPQvxo1x7dSl";
var val1 = "webapp";
// var val2 = "0";
// var val3 = "123";
var trigger = "tohuman";

function fire(){
  val1 = document.getElementById("textbox").value;
  // val2 = document.getElementById("listtwo").value;
  var url = "https://maker.ifttt.com/trigger/" + trigger +
      "/with/key/" + myKey +
      "?value1=" + val1; // + 
      // "&value2=" + val2 + 
      // "&value3=" + val3; 
  var request = new XMLHttpRequest();
  request.onreadystatechange = function() {
    if (request.readyState === 4) {
      alert("request got : " + request.responseText);
    }
  };
  request.open('GET', url, true);
  request.send();
}
