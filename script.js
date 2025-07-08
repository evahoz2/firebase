const firebaseConfig = {
    apiKey: "AIzaSyC5WEd6F3LtZkT297hWn_QdHTU2kDESPSM",
    authDomain: "grocery-checklist-bbbb6.firebaseapp.com",
    databaseURL: "https://grocery-checklist-bbbb6-default-rtdb.firebaseio.com",
    projectId: "grocery-checklist-bbbb6",
    storageBucket: "grocery-checklist-bbbb6.firebasestorage.app",
    messagingSenderId: "120385143139",
    appId: "1:120385143139:web:b8f8834e1083e13cfd9356"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

get_data()

function add_data(){
   item=document.getElementById("inp").value
   firebase.database().ref("/").child(item).update({
    purpose:"adding item"

   });
   get_data();
}

function get_data(){
    firebase.database().ref("/").on('value', function(snapshot){
        document.getElementById("output").innerHTML="";

        snapshot.forEach(function(childSnapshot){
            childKey=childSnapshot.key;
            item=childKey;
            row="<div>"+item+"</div><hr>"
            document.getElementById("output").innerHTML+=row
        });
    });
}

function get_rid(){
    bin=document.getElementById("inp").value
    firebase.database().ref("/").child(bin).remove();
}
  