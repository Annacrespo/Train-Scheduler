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
console.log(firebase);
var database = firebase.database();

firebase.database().ref().on("value", function(snapshot) {

})


$("#submitButton").on("click", function(event) {
    event.preventDefault();
    var trainName = $("#formGroupName").val().trim();
    var destination = $("#formGroupDestination").val().trim();
    var trainTime = $("#formGroupTime").val().trim();
    var trainFrequency = $("#formGroupFrequency").val().trim();

    console.log(name);
    console.log(destination);
    console.log(trainTime);
    console.log(trainFrequency);

    var newTrain = {
        name: trainName,
        dest: destination,
        time: trainTime,
        frequency: trainFrequency

    };
    database.ref().push(newTrain)

    alert("New Train added!");

    $("#formGroupName").val("");
    $("#formGroupDestination").val("");
    $("#formGroupTime").val("");
    $("#formGroupFrequency").val("");
})

database.ref().on("child_added", function(childSnapshot, prevChildKey) {

    console.log(childSnapshot.val());

    var trainName = childSnapshot.val().name;
    var destination = childSnapshot.val().dest;
    var trainTime = childSnapshot.val().time;
    var trainFrequency = childSnapshot.val().frequency;

})