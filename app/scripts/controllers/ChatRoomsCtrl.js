(function() {
    
    function ChatRoomsCtrl($uibModal, Messages, $cookies, $scope) {
        
        var self = this; //Workaround for controllerAs 
        $scope.$watch(function() {return $cookies.get('blocChatCurrentUser');}, function(newValue) {
            self.currentUser = newValue;
        });
        this.currentUser = $cookies.get('blocChatCurrentUser');
        this.currentRoom = "";
        this.roomMessages = "Please Select a Chatroom from the Sidebar, or Create a New One!";
        
        
        this.messagesObject = {};
        this.sendingChat = "";
        
        
        this.getMessages = function(roomId, roomName) {
            this.messagesObject = Messages.getByRoomId(roomId);
            this.currentRoom = roomId;
            this.roomMessages = ("Currently in room: "+roomName);
        }
        
        this.sendMessage = function(message) {
            Messages.send(message, this.currentUser, this.currentRoom);  
            this.sendChat = "";
        };
        

    }
    
    angular
        .module("blocChat")
        .controller("ChatRoomsCtrl", ["$uibModal", 'Messages', '$cookies', '$scope', ChatRoomsCtrl]);
    
})();