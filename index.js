// GET REQUEST
function getAllData() {
    axios
        .get('http://localhost:8080/getAll', {
        })
        .then(res => showOutput(res))
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
                

            </div>
        </div>`;
    }
}