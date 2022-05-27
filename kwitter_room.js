var firebaseConfig = {
    apiKey: "AIzaSyCLZhQKxDkVOxiC5VuUgcgDb3sWzVYzVTA",
    authDomain: "letschattapp-f55ac.firebaseapp.com",
    databaseURL: "https://letschattapp-f55ac-default-rtdb.firebaseio.com",
    projectId: "letschattapp-f55ac",
    storageBucket: "letschattapp-f55ac.appspot.com",
    messagingSenderId: "1050656956925",
    appId: "1:1050656956925:web:a13116d314449f66eb3994"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  u_name=localStorage.getItem("username");
  r_name=document.getElementById("room_name").value;
  localStorage.setItem("rm_name",r_name);
function logout(){
    localStorage.removeItem("username");
    localStorage.removeItem("rm_name")
    window.location="index.html"
}
document.getElementById("welcome").innerHTML="Welcome"+ " " +u_name +"!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name-"+ Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirecttoRoomName(name)'>"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
   //End code
      });});}
      function redirecttoRoomName(name){
        console.log(name);
        localStorage.setItem("rm_name",name)
        window.location="kwitter_page.html" 
      }
      getData();
      function addRoom(){
        room_name = document.getElementById("room_name").value;
       
        firebase.database().ref("/").child(room_name).update({
              purpose:"adding room name"
        });
        localStorage.setItem("rm_name", room_name);
        window.location="kwitter_page.html"
       }