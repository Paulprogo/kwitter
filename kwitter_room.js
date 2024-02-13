
var firebaseConfig = {
      apiKey: "AIzaSyADKvB36Zz6G1466-wNTu2ICWR1_r9DW0M",
      authDomain: "kwitter-a88d2.firebaseapp.com",
      databaseURL: "https://kwitter-a88d2-default-rtdb.firebaseio.com",
      projectId: "kwitter-a88d2",
      storageBucket: "kwitter-a88d2.appspot.com",
      messagingSenderId: "816623456351",
      appId: "1:816623456351:web:eb57df41874124b4d60bea"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name") .innerHTML = "Bienvenido" + user_name + "!";

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "añadiendo sala"
      });
      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}



function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Inicio del código
 console.log("Room Name - " + Room_names);
 row = "<div class= 'room_name' id="+ Room_names + " onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
 document.getElementById("output").innerHTML += row;     

      //Final del código
      });});}
getData();


function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}


function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
         window.location = "kwitter.html";
}
