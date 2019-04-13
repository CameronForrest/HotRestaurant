//create new reservations

app.post("/api/dataTables/tableResData", function(res, req) {
    var newTable = req.body;

    newTable.routename = newTable.name.replace(/\s+/g, "").toLowerCase();

    console.log(newTable);

    tableArray.push(newTable);
});