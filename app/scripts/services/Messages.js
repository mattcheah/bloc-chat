(function() {
    
    function Messages($firebaseArray) {
        var ref = firebase.database().ref().child('messages');

        return {
          getByRoomId: function (roomId) {
            // Filter the messages by their room ID.
              //messages.
              var messagesList = ref.orderByChild("roomId").equalTo(roomId);
              var messages = $firebaseArray(messagesList);
              return messages;
          }
        };
    }
    
    angular
        .module('blocChat')
        .factory('Messages', ['$firebaseArray', Messages]);
    
})();