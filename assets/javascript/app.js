// Initialize Firebase
var config = {
    apiKey: "AIzaSyC9xpYVXaoIZfBmjA6T5o7xzTv_cPQdVS4",
    authDomain: "trainhomework-12f0c.firebaseapp.com",
    databaseURL: "https://trainhomework-12f0c.firebaseio.com",
    projectId: "trainhomework-12f0c",
    storageBucket: "trainhomework-12f0c.appspot.com",
    messagingSenderId: "203503065462"
  };
  firebase.initializeApp(config);

    var database = firebase.database();
    
    // Initial values

    var trainName = "";
    var destination = "";
    var frequency = "";
    var nextArrival = "";
    var minutesAway = "";

    // On submit button press
    $("#submit").on("click", function (event) {
        event.preventDefault();

        // Store form data into variables
        trainName = $("#trainName").val();
        destination = $("#destination").val();
        frequency = $("#frequency").val();
        nextArrival = $("#firstTrainTime").val();
        minutesAway = $("#minutesAway").val();
       

        // Push data into database as object
        database.ref().push({

            trainName: trainName,
            destination: destination,
            frequency: frequency,
            nextArrival: nextArrival,
            minutesAway; minutesAway,
            dateAdded: firebase.database.ServerValue.TIMESTAMP
        });
        console.log("click");
    }); //END OF SUBMIT BUTTON PRESS

    // On Child Added to Database
    dataRef.ref().on("child_added", function (childSnapshot) {

        // Store database object data into variables
       console.log(childSnapshot.val().trainName);
       console.log(childSnapshot.val().destination);
       console.log(childSnapshot.val().frequency);
       console.log(childSnapshot.val().nextArrival);
       console.log(childSnapshot.val().minutesAway);



       $("#infoTable".append("<tr></tr>").append(
        "<td>" + trainName + "</td>",
        "<td>" + destination + "</td>",
        "<td>" + Frequency + "</td>",
        "<td>" + nextTrainTime + "</td>",
        "<td>" + minUntilNext + "</td>"
       ));
       

    })
        
    
        //Moment logic 
    
        var currentTime = moment();
        var firstTimeConverted = moment(newFirstTrainTime, "hh:mm").subtract(1, "years");
        var timeDiff = moment().diff(moment(firstTimeConverted), "minutes")
        var timeRemainder = timeDiff % newFrequency
        var minUntilNext = newFrequency - timeRemainder
        var nextTrainTime = moment().add(minUntilNext, "minutes").format("hh:mm")
//END OF DOCUMENT READ