$(".btn").on("click",function(event){
    event.preventDefault();
    var newReservation = {
        name: $("#reservationName").val().trim(),
        phone: $("#phoneNumber").val().trim(),
        email: $("#email").val().trim(),
        id: $("#uniqueID").val().trim(),
    };
    
    $.post("/api/reserve", newReservation);
});
