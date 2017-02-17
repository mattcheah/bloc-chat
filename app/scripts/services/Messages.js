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
            },
            send: function(newMessage, username, chatroom) {
                var messagesDatabase = $firebaseArray(ref);
                
                messagesDatabase
                    .$add({
                        content: newMessage,
                        roomId: chatroom,
                        sentAt: (Math.floor(Date.now() / 1000)),
                        username: username
                    })
                    .then(function() {
                        
                    }, function(error) {
                        console.log("Error Sending Chat: "+error);
                    });
            }
        
        };
    }
    
    angular
        .module('blocChat')
        .factory('Messages', ['$firebaseArray', Messages]);
    
})();