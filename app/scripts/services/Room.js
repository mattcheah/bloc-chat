(function() {
    
    function Room($firebaseArray) {
        // ref is the reference to this firebase database
        var ref = firebase.database().ref().child("rooms");
        //rooms is the actual javascript object that is retrieved from firebase (and can be written to)
        var rooms = $firebaseArray(ref);

        return {
            all: rooms,
            addRoom: function(roomName) {
                rooms.$add(roomName).then(function() {
                    console.log("Room Added: "+roomName);    
                });  
            }
        };
    }
    
    angular
        .module("blocChat")
        .factory("Room", ["$firebaseArray", Room])
    
})();