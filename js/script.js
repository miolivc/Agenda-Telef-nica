
//  Modal

var dialog = document.querySelector('dialog');
var showDialogButton = document.querySelector('#show-dialog');

if (! dialog.showModal) {
    dialogPolyfill.registerDialog(dialog);
 }

showDialogButton.addEventListener('click', function() {
      dialog.showModal();
 });

dialog.querySelector('.close').addEventListener('click', function() {
      dialog.close();
 });

// Adicionar

$("#adicionar").click(function adicionar(){
    var nome = $("#nome").val();
    var data = $("#data").val();
    var telefone = $("#telefone").val();
    var email = $("#email").val();

    $("tbody").append("<tr><td>" + nome + "</td><td>"+ data + "</td><td>" + telefone +  "</td><td>"+ email +"</td></tr>");

});

