(function() {
    
    function ChatRoomsCtrl($uibModal, Messages, $cookies, $scope) {
        
        var self = this; //Workaround for controllerAs 
        
        
        $scope.$watch(function() {return $cookies.get('blocChatCurrentUser');}, function(newValue) {
            self.currentUser = newValue;
        });
        
        this.roomMessages = "Please Select a Chatroom from the Sidebar, or Create a New One!";
        this.messagesObject = {};
        
        this.currentUser = $cookies.get('blocChatCurrentUser');
        
        this.getMessages = function(roomId, roomName) {
            this.messagesObject = Messages.getByRoomId(roomId);
            this.roomMessages = ("Currently in room: "+roomName);
        }
        

    }
    
    angular
        .module("blocChat")
        .controller("ChatRoomsCtrl", ["$uibModal", 'Messages', '$cookies', '$scope', ChatRoomsCtrl]);
    
})();