// Initialize Firebase
var config = {
    apiKey: "AIzaSyB_u4P3VwZU-MiPltzi6uXeSRcU-ZGnu8Y",
    authDomain: "first-project-cbc-c31ae.firebaseapp.com",
    databaseURL: "https://first-project-cbc-c31ae.firebaseio.com",
    projectId: "first-project-cbc-c31ae",
    storageBucket: "first-project-cbc-c31ae.appspot.com",
    messagingSenderId: "1098822023696"
  };
firebase.initializeApp(config);

firebase.database().ref().on("value", function(snapshot) {
  console.log(snapshot.val());

})

var database = firebase.database();

var connectionsRef = database.ref("/connections");
var connectedRef = database.ref(".info/connected");


connectedRef.on("value", function(snap) {

})

