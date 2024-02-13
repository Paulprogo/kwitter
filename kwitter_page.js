
var firebaseConfig = {
      apiKey: "AIzaSyADKvB36Zz6G1466-wNTu2ICWR1_r9DW0M",
      authDomain: "kwitter-a88d2.firebaseapp.com",
      databaseURL: "https://kwitter-a88d2-default-rtdb.firebaseio.com",
      projectId: "kwitter-a88d2",
      storageBucket: "kwitter-a88d2.appspot.com",
      messagingSenderId: "816623456351",
      appId: "1:816623456351:web:eb57df41874124b4d60bea"
    };
    
    
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

document.getElementById("user_name").innerHTML = "¡Hola!" + user_name +  "!" + " Bienvenido a la sala: " + room_name;


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Inica código
console.log(firebase_message_id);
console.log(message_data);
name = message_data['name']
message = message_data['message'];
like=message_data['like'];
name_with_tag = "<h4> "+ name + "<img class='user_tick' src='tick.png'></h4>";
message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+ like+" onclick='updateLike(this.id)'>";
span_wtih_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";

row = name_with_tag + message_with_tag +like_button + span_wtih_tag;
document.getElementById("output").innerHTML += row;


//Termina código
      } });  }); }
getData();


function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
         window.location = "kwitter.html";
}

function send()
      {
            msg = document.getElementById("msg").value;
            firebase.database().ref(room_name).push({
                  name:user_name,
                  message:msg,
                  like:0

            });

            document.getElementById("msg").value = "";
      }

      function updateLike(message_id)
      {
            console.log("botón Me gusta pulsado - " + message_id);
            button_id = message_id;
            likes = document.getElementById(button_id).value;
            update_likes = Number(likes) + 1;
            console.log(update_likes);

            firebase.database().ref(room_name).child(message_id).update({
             like : update_likes     
            });
      
      
      }