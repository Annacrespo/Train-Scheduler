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
var database = firebase.database();

firebase.database().ref().on("value", function(snapshot) {

})


$("#submitButton").on("click", function(event) {
    event.preventDefault();
    var trainName = $("#formGroupName").val().trim();
    var destination = $("#formGroupDestination").val().trim();
    var trainTime = $("#formGroupTime").val().trim();
    var trainFrequency = $("#formGroupFrequency").val().trim();
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
    var trainName = childSnapshot.val().name;
    var destination = childSnapshot.val().dest;
    var trainTime = childSnapshot.val().time;
    var trainFrequency = childSnapshot.val().frequency;
    
    var currentTime = moment();
    var trainTimeObject = moment(trainTime, "HH:mm");
    var timeFromStart = currentTime.diff(trainTimeObject, 'minutes');
    var trainRemainder = (timeFromStart % trainFrequency);
    var minutesAway = (trainFrequency - trainRemainder);
    var nextArrival = moment().add(minutesAway, 'minutes').format('HH:mm');

    
$("#train-table").append("<tr><td>" + trainName + "</td><td>" + destination + "</td><td>" +
  trainTime + "</td><td>" + trainFrequency + "</td><td>" + nextArrival + "</td><td>" + minutesAway + "</td></tr>");

});


