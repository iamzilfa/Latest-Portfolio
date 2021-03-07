
$("#submit").click(function () {
    var yourFullName = $("#name").val();
    var yourEmail = $("#email").val();
    var yourMessage = $("#exampleFormControlTextarea1").val();
    if (yourFullName == '' || yourEmail == '' || yourMessage == '') {
        alert("Please check the missing field(s)");
    } else {
        alert("Your message was sent successfully. Thanks!");
    }
    $("form").trigger("reset");
})
