// from data.js
var tableData = data;

//console.log ufo data from data.js
console.log(tableData)
// select HTML body element
var tbody = d3.select("tbody");
// use forEach to select each sighting in the data
tableData.forEach((UFOSighting) => {
    // append row for each sighting
    var row = tbody.append("tr");
    // use `Object.entries` to console log each value and append to table
    Object.entries(UFOSighting).forEach(([key, value]) => {
        // log each key and value
        console.log(key, value);
        // append cell to row
        var cell = row.append("td");
        // populate cell with value
        cell.text(value);
    });
});

var button = d3.select("#filter-btn");

button.on("click", function(){
    tbody.html("");
    // select html inputs
    var inputDate = d3.select("#date-input");
    var inputCity = d3.select("#city-input");
    var inputState = d3.select("#state-input");
    var inputCountry = d3.select("#country-input");
    var inputShape = d3.select("#shape-input");
    // get value property
    var dateValue = inputDate.property("value");
    var cityValue = inputCity.property("value");
    var stateValue = inputState.property("value");
    var countryValue = inputCountry.property("value");
    var shapeValue = inputShape.property("value");
    // log value
    // console.log(dateValue);
    // console.log(cityValue);
    // console.log(stateValue);
    // console.log(countryValue);
    // console.log(shapeValue);
    // create array of filters
    var filters = [{type: "datetime", name: dateValue},
                     {type: "city", name: cityValue},
                     {type: "state", name: stateValue},
                     {type: "country", name: countryValue},
                     {type: "shape", name: shapeValue}]
    // log filters
    console.log(filters)
    // filter to selected date
    var filteredSightings = tableData.filter(sighting => filters.every(filterTable => {
        if (filterTable.name === "") return true
        return sighting[filterTable.type] === filterTable.name
    }));
    // log filtered values
    console.log(filteredSightings)

    // populate data in table
    filteredSightings.forEach(function(selectedSighting){
        // log sighting
        console.log(selectedSighting);
        // add row to table
        var row = tbody.append("tr");
        // use `Object.entries` to console log each value and append to table
        Object.entries(selectedSighting).forEach(function([key, value]){
            // log key and value
            console.log(key, value);
            // append cell to row
            var cell = row.append("td");
            // populate cell with value
            cell.text(value);
        });
    });
});


