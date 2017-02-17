(function() {
    
    function ChatRoomsCtrl($uibModal, Messages) {
        this.test ="testtest";
        this.roomMessages = "Please Select a Chatroom from the Sidebar, or Create a New One!";
        this.messagesObject = {};
        
        this.getMessages = function(roomId, roomName) {
            this.messagesObject = Messages.getByRoomId(roomId);
            this.roomMessages = ("Currently in room: "+roomName);
        }
        
        

    }
    
    angular
        .module("blocChat")
        .controller("ChatRoomsCtrl", ["$uibModal", 'Messages',  ChatRoomsCtrl]);
    
})();