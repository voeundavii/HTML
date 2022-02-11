const apiUrl = "https://jsonplaceholder.typicode.com/users";

async function getDataFromApi(url) {
  const reponse = await fetch(url);
  var data = await reponse.json();
  console.log(data);
    showData(data);
}

getDataFromApi(apiUrl).then(function(){
    setTimeout(hideloader,2000);
}).then(()=> {
    setTimeout(loadingError,10000);
})

function loadingError() {
    document.getElementById("loading").style.display = "none";
    document.getElementById("loadingError").style.display = "block";
    document.getElementById("userList").style.display = "none";
    document.getElementById("header").style.display = "none";
}


function hideloader() {
  console.log("Successful")
  document.getElementById("loading").style.display = "none";
  document.getElementById("userList").style.display = "block";
}

function showData(data) {
  let table = `<tr>
       <th>ID</th>
       <th>Name</th>
       <th>Username</th>
       <th>Email</th>
       <th>Adress</th>
       <th>Phone</th>
       <th>Website</th>
       <th>Company</th>
    </tr>`;
  for (let r of data) {
    table += `<tr>
        <th>${r.id}</th>
        <th>${r.name}</th>
        <th>${r.username}</th>
        <th>${r.email}</th>
        <th>${r.address.street},${r.address.suite},${r.address.city}</th>
        <th>${r.phone}</th>
        <th>${r.website}</th>
        <th>${r.company.name}</th>
    </tr>`;
  }
  document.getElementById("userList").innerHTML = table;
}
