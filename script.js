var container = document.createElement("div");
container.className = "container";

var row = document.createElement("div");
row.classList.add("row", "m-3");

// var column = document.createElement("div");
// column.className="col-md-4";

// row.append(column);
container.append(row);

var res = fetch("https://restcountries.com/v3.1/all");
res.then((data) => data.json()).then((data1) => foo(data1));

function foo(data1) {
  console.log(data1);
    for (var i = 0; i < data1.length; i++) {
      
       row.innerHTML+= `
       <div class="col-lg-4 col-sm-12">
        <div class="card border-primary mb-3 " style="width: 20rem;">
        <h5 class="card-title"> ${data1[i].name.common} </h5>
        <img src="${data1[i].flags.svg}" class="card-img-top" alt="country flags">
          <div class="card-body">
          <h5 class="card-title">Capital :${data1[i].capital[0]} </h5>
          <h5 class="card-title">Region :${data1[i].region} </h5>
          <h5 class="card-title">Latlng :${data1[i].latlng} </h5>
          <h5 class="card-title">Country code :${data1[i].altSpellings[0]} </h5
        </div>
        <button type="button" class="btn btn-primary ">Click Weather</button>
      </div>
      </div>
       `;
       document.body.append(container);
    };
}