
// GET REQUEST
function getAllData() {
    axios
        .get('http://localhost:8080/getAll', {
        })
        .then(res => showOutput(res))
        .catch(err => console.error(err));
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

//ResetForm
function ResetForm() {
    document.getElementById("MountainName").value = '';
    document.getElementById("region").value = '';
    document.getElementById("height").value = '';
    document.getElementById("country").value = '';

}

// DELETE REQUEST
function removeTodo(id) {
    axios
        .delete('http://localhost:8080/delete/' + id)
        .then(value => getAllData())
        .catch(err => console.error(err));
}

function showOutput(res) {
    document.getElementById('res').innerHTML = null;
    for (let i = 0; i < res.data.length; i++) {
        console.log("Index " + i + " ==  " + res.data[i]);
        document.getElementById('res').innerHTML += `
        <div">
            <div class="card-body">
                <h5 class="card-title">Name : ${res.data[i].mountainName}</h5>
                <p class="card-text">Region :${res.data[i].region}</p>
                <p class="card-text">Height :${res.data[i].height}</p>
                <p class="card-text">Country :${res.data[i].country}</p>
                <button  class="btn button-colour" onclick="removeTodo(${res.data[i].id})">Delete</button>

                
            </div>
        </div>`;
    }
}