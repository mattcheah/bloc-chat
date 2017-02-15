(function() {
    
    function ChatRoomsCtrl(Room) {
        this.rooms = Room.all;

    }
    
    angular
        .module("blocChat")
        .controller("ChatRoomsCtrl", ["Room", ChatRoomsCtrl]);
    
})();