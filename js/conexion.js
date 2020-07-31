console.log("Entro");
var xhr = new XMLHttpRequest();
var url = "https://truever.herokuapp.com/trueapi/";
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
var data = JSON.stringify({ url: "www.pulzo.com" });
xhr.send(data);

var xhr2 = new XMLHttpRequest();
var url = "https://truever.herokuapp.com/fakeapi/";
xhr2.open("POST", url, true);
xhr2.setRequestHeader("Content-Type", "application/json");
xhr2.onreadystatechange = function () {
  if (xhr2.readyState === 4) {
    if (xhr2.status === 200) {
      var json = JSON.parse(xhr2.responseText);
      changeFrontDataArticle(
        json.title,
        json.rating,
        json.isfake,
        json.isbiased,
        json.isclickbait
      );
    } else if (xhr2.status === 422) {
      console.log("No se puede procesar esta URL");
    }
  }
};

document.getElementById("domain").textContent = window.location.hostname;
document.getElementById("domainArticle").textContent = localStorage.getItem(
  "urlArticulo"
);
xhr2.send(localStorage.getItem("urlArticulo"));

function changeFrontDataArticle(title, rating, isfake, isbiased, isclickbait) {
  document.getElementById("#rating").textContent = rating;
  document.getElementById("#isfake").textContent = isfake;
  document.getElementById("#isbiased").textContent = isbiased;
  document.getElementById("#isclickbait").textContent = isclickbait;
  document.getElementById("#articletitle").textContent = title;
}
