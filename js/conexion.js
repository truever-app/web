console.log("Entro");
var xhr = new XMLHttpRequest();
var url = "http://181.60.134.38:2555/trueapi/";
xhr.open("POST", url, true);
xhr.setRequestHeader("Content-Type", "application/json");
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      var json = JSON.parse(xhr.responseText);
      changeFrontData(json.rating, json.numvotos, json.category);
    } else {
    }
  }
};
var data = JSON.stringify({ url: domain });
xhr.send(data);

document.getElementById("domain").textContent = window.location.hostname;
