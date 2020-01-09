$.get("/api/tables").then(data=>{
    console.log(data);
    data.forEach(table=>{
        const li = $('<li>');
        li.text(table.name);
        $(".tablesList").append(li);
    })
})
$.ajax({method:"GET", url:"/api/waitlist"}).then(data=>{
    data.forEach(table=>{
        const li = $('<li>');
        li.text(table.name);
        $(".waitlistList").append(li);
    })
})