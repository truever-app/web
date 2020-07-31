// lo que tenemos hasta el momento
var xhr = new XMLHttpRequest();
var url = "https://truever.herokuapp.com/trueapi/";
xhr.open("POST", url, true);
xhr.setRequestHeader("Content-Type", "application/json");
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      var json = JSON.parse(xhr.responseText);
      console.log(json);
      //changeFrontDataDomain(json.rating, json.numvotos, json.category);
    } else {
    }
  }
};
var data = JSON.stringify({ url: "www.elespectador.com" });
xhr.send(data);

// var xhr2 = new XMLHttpRequest();
// var url = "https://truever.herokuapp.com/fakeapi/";
// xhr2.open("POST", url, true);
// xhr2.setRequestHeader("Content-Type", "application/json");
// xhr2.onreadystatechange = function () {
//   if (xhr2.readyState === 4) {
//     if (xhr2.status === 200) {
//       var json = JSON.parse(xhr2.responseText);

//       changeFrontDataArticle(
//         json.title,
//         json.rating,
//         json.isfake,
//         json.isbiased,
//         json.isclickbait
//       );
//     } else if (xhr2.status === 422) {
//       console.log("No se puede procesar esta URL");
//     }
//   }
// };

var url_completa = localStorage.getItem("urlArticulo");

var dominio = url_completa.split("//")[1].split("/")[0];

document.getElementById("domain").textContent = dominio;
document.getElementById("domainArticle").textContent = localStorage.getItem(
  "urlArticulo"
);

xhr2.send(localStorage.getItem("urlArticulo"));

function changeDomainInformation() {
  id = "numeroVotos";
}

function changeFrontDataArticle(title, rating, isfake, isbiased, isclickbait) {
  document.getElementById("#rating").textContent = rating;
  document.getElementById("#isfake").textContent = isfake;
  document.getElementById("#isbiased").textContent = isbiased;
  document.getElementById("#isclickbait").textContent = isclickbait;
  document.getElementById("#articletitle").textContent = title;
}

// Desde acá inicia la función para cambiar colores y valores en los textos

function changeFrontDataDomain(generalC, userC, siteCalification) {
  document.getElementById("generalCalification").textContent = generalC;

  if (generalC == 0) {
    document.getElementById("trustId").textContent =
      "do not have califications";
    ("background-color: #eb4034; color: white;");
  } else if (generalC > 0 && generalC < 4) {
    document.getElementById("calificationCircle").style =
      "background-color: #eb4034;";
    document.getElementById("trustId").textContent = "No es un sitio confiable";
    ("background-color: #eb4034; color: white;");
  } else if (generalC >= 4 && generalC < 7) {
    document.getElementById("calificationCircle").style =
      "background-color: #f56c0a;";
    document.getElementById("trustId").textContent = "No parece muy confiable";
  } else if (generalC >= 7 && generalC <= 10) {
    document.getElementById("calificationCircle").style =
      "background-color: #1ed760;";
    document.getElementById("trustId").textContent =
      "Parece un sitio confiable";
  }
}
