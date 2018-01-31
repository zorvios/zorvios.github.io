// Enter your key, values and event trigger name here
var myKey = "g-fFa1CiwbyEecCwoUy2jk3MQtdKycIRXmumpzz4ROp";
var val1 = "webapp";
// var val2 = "0";
// var val3 = "123";
var trigger = "fromhuman";

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
      
      window.open('','_parent','');
      window.close();
      
      // alert("request got : " + request.responseText);
    }
  };
  request.open('GET', url, true);
  request.send();
}
