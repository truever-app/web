$("#submitbutton").click(function () {
  $.get("181.60.134.38/trueapi/", function (data, status) {
    alert("Data: " + data + "\nStatus: " + status);
  });
});

$("#submitbutton").click(function () {
  var dominiostr = $("#articulostr").val();

  $.post(
    "http://181.60.134.38:2555/fakeapi/",
    {
      domain: dominiostr,
    },
    function (data, status) {
      alert("Data: " + data + "\nStatus: " + status);
    }
  );
});

$("#submitbutton").on("click", postArticle);

function postArticle() {
    var dominiostr = $("#articulostr").val();
    $.ajax({
        type: "POST",
        url: 'http://181.60.134.38:2555/fakeapi/',
        success: function(respuesta) {
        var listaUsuarios = $("#lista-usuarios");
        listaUsuarios.append(
                '<div>'
            +     '<p>' + respuesta.data.tile + ' ' + respuesta.data.rating + ' ' + respuesta.data.isfake + 
                    ' ' + respuesta.data.isbiased +' ' + respuesta.data.isclickbait +'</p>'
            +     '<img src=' + elemento.avatar + '></img>'
            + '</div>'
            );    
        });
        },
        error: function() {
        console.log("No se ha podido obtener la información");
        }
    });
}
