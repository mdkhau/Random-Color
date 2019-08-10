
let json;
function randomColor(){
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      json = JSON.parse(this.responseText);
      console.log(json);
    }
  };
  xmlhttp.open("GET", "colors.json", true);
  xmlhttp.send();
}



function background() {
  //random number based on json data length
    let random = Math.floor(Math.random() * (json.length - 0 + 1)) + 0;
  // Insert random color
  document.body.style.backgroundColor = json[random].hex;

 //insert text of color
    document.getElementById('name').innerHTML = json[random].name;
}
