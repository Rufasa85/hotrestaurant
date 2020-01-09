$("#reservationForm").submit(event=>{
    event.preventDefault();
    const customer = {
        name:$("#nameInput").val(),
        email:$("#emailInput").val(),
        phone:$("#phoneInput").val()
    }
    $("#nameInput").val('');
    $("#emailInput").val('');
    $("#phoneInput").val('');
    // console.log(customer);
   $.post('/api/tables',customer).then(data=>{
       if(data==='reserved'){
           alert("yay a table!")
       } else {
           alert("you have to wait. womp womp!")
       }
   })
})