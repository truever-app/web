window.onload = getInfo();

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
