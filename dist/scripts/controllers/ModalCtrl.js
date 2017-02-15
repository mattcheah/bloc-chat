(function(){
    
    function ModalCtrl($uibModalInstance) {
        this.newName = "";
        this.message = "What would you like to name your new room?";
        
        this.ok = function() {
            if (this.newName) {
                $uibModalInstance.close(this.newName);
                //Update Database with a new chatroom with this name.
            } else {
                this.message = "Please enter a name for your new chatroom!";
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