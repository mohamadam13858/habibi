document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems, {});






   /* setTimeout(function(){
      console.log("start...")
      fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((json) => {
    console.log("end...")
    console.log(json)


    let html = ""


    for (const user of json) {

      html = html +`    <tr>
    <td>${user.id}</td>
    <td>${user.name}</td>
    <td>${user.username}</td>
    <td>${user.email}</td>
    <td>${user.address.city}</td>
    <td>
        <i class="material-icons orange-text darken-3 m-l-5 m-r-5 hov-pointer">edit</i>
        <i class="material-icons red-text m-l-5 m-r-5 hov-pointer">delete_forever</i>
    </td>
</tr>`
    }


document.getElementById("desktop_table_body").innerHTML = html

  });
    },5000)*/
  });
