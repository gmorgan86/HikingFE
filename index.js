// GET REQUEST
function getAllData() {
    axios
        .get('http://localhost:8080/getAll', {
        })
        .then(res => showOutput(res))
        .catch(err => console.error(err));
}



//ResetForm
function ResetForm() {
    document.getElementById("MountainName").value = '';
    document.getElementById("region").value = '';
    document.getElementById("height").value = '';
    document.getElementById("country").value = '';

}

// CREATE/POST REQUEST
function addTodo() {
    var mountainName = document.getElementById("MountainName").value;
    var region = document.getElementById("region").value;
    var height = document.getElementById("height").value;
    var country = document.getElementById("country").value;
    if (mountainName.trim() == '' || region.trim() == '' || height.trim() == '' || country.trim() == '') {
        alert("Please Insert the Data");
    } else {
        axios
            .post('http://localhost:8080/create', {
                mountainName: mountainName,
                region: region,
                height: height,
                country: country
            })
            .then(value => getAllData())
            .catch(err => console.error(err));
        ResetForm();
    }
}

// UPDATE/PUT REQUEST
function updateTodo(id) {
    var mountainName = document.getElementById("MountainName").value;
    var region = document.getElementById("region").value;
    var height = document.getElementById("height").value;
    var country = document.getElementById("country").value;
    if (mountainName.trim() == '' || region.trim() == '' || height.trim() == '' || country.trim() == '') {
        alert("Please Insert the Data");
    } else {
        axios
            .put('http://localhost:8080/replace/' + id, {
                mountainName: mountainName,
                region: region,
                height: height,
                country: country
            })
            .then(getAllData)
            .catch(err => console.error(err));
        ResetForm();
    }
}

// DELETE REQUEST
function removeTodo(id) {
    axios
        .delete('http://localhost:8080/delete/' + id)
        .then(value => getAllData())
        .catch(err => console.error(err));
}

//ShowOutput
function showOutput(res) {
    document.getElementById('res').innerHTML = null;
    for (let i = 0; i < res.data.length; i++) {
        console.log("Index " + i + " ==  " + res.data[i]);
        document.getElementById('res').innerHTML += `<div class="col-sm-4 card text-center" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Mountain Name: ${res.data[i].mountainName}</h5>
                <p class="card-text">Region: ${res.data[i].region}</p>
                <p class="card-text">Height: ${res.data[i].height}</p>
                <p class="card-text">Country: ${res.data[i].country}</p>
                <button  class="btn button-colour" onclick="removeTodo(${res.data[i].id})">Delete</button>
                <button class="btn button-colour" onclick="updateTodo(${res.data[i].id})">Update</button>

            </div>
        </div>`;
    }
}

//mountainNameSearch
function mountainNameSearch() {
    var mountainName = document.getElementById("mountainNameSearch").value;
    if (mountainName.trim() == '') {
        alert("Please Enter Mountain Name For search");
        getAllData();
    } else {
        axios
            .get('http://localhost:8080/getByMountainName/' + mountainName, {
            })
            .then(res => showOutput(res))
            .catch(err => console.error(err));
    }

}

//regionSearch
function regionSearch() {
    var region = document.getElementById("regionSearch").value;
    if (region.trim() == '') {
        alert("Please Enter Region For search");
        getAllData();
    } else {
        axios
            .get('http://localhost:8080/getByRegion/' + region, {
            })
            .then(res => showOutput(res))
            .catch(err => console.error(err));
    }

}

//heightSearch
function heightSearch() {
    var height = document.getElementById("heightSearch").value;
    if (height.trim() == '') {
        alert("Please Enter Height For search");
        getAllData();
    } else {
        axios
            .get('http://localhost:8080/getByHeight/' + height, {
            })
            .then(res => showOutput(res))
            .catch(err => console.error(err));
    }

}

//countrySearch
function countrySearch() {
    var country = document.getElementById("countrySearch").value;
    if (country.trim() == '') {
        alert("Please Select Country For search");
        getAllData();
    } else {
        axios
            .get('http://localhost:8080/getByCountry/' + country, {
            })
            .then(res => showOutput(res))
            .catch(err => console.error(err));
    }

}