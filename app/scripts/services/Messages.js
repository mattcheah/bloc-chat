(function() {
    
    function Messages($firebaseArray) {
        var ref = firebase.database().ref().child('messages');
        //var messages = $firebaseArray(ref);


        return {
          getByRoomId: function (roomId) {
            // Filter the messages by their room ID.
              //messages.
              var messagesList = ref.orderByChild("roomId").equalTo(roomId);
              var messages = $firebaseArray(messagesList);
              
              console.log(messages);
              return messages;
          }
        };
    }
    
    angular
        .module('blocChat')
        .factory('Messages', ['$firebaseArray', Messages]);
    
})();