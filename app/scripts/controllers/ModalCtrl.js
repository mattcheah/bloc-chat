(function(){
    
    function ModalCtrl($uibModalInstance) {
        console.log("modal inside run");
        this.newName = "";
        this.roomMessage = "What would you like to name your new room?";
        this.userMessage = "What would you like your username to be?";
        
        this.ok = function() {
            if (this.newName) {
                $uibModalInstance.close(this.newName);
                //Update Database with a new chatroom with this name.
            } else {
                this.roomMessage = "Please enter a name for your new chatroom!";
                this.userMessage = "Please enter a username for yourself!";
            }
        };

        this.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };
    }
    
    angular
        .module('blocChat')
        .controller('ModalCtrl', ['$uibModalInstance', ModalCtrl]);
    
})();