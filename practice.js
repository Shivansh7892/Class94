
//ADD YOUR FIREBASE LINKS

const firebaseConfig = {
  apiKey: "AIzaSyA2BvztpsytcWioJ6IPhYL25851wOxfzc8",
  authDomain: "class93-f0520.firebaseapp.com",
  databaseURL: "https://class93-f0520-default-rtdb.firebaseio.com",
  projectId: "class93-f0520",
  storageBucket: "class93-f0520.appspot.com",
  messagingSenderId: "783694455918",
  appId: "1:783694455918:web:a2bd25c7982ad84a95b27f",
  measurementId: "G-L581EZC70W"
};

firebase.initializeApp(firebaseConfig);
function addUser()
{
  user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
    purpose : "adding user"
});

}

  