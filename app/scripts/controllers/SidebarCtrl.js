(function() {
    
    function SidebarCtrl(Room, $uibModal, $cookies, AuthService) {
        this.rooms = Room.all;

        this.newChat = function () {
            var modalInstance = $uibModal.open({
              animation: false,
              ariaLabelledBy: 'modal-title',
              ariaDescribedBy: 'modal-body',
              templateUrl: '../templates/modalTemplate.html',
              controller: 'ModalCtrl as modal',
              resolve: {
                /*items: function () {
                  return $ctrl.items;
                }*/
              }
            });

            modalInstance.result.then(function (selectedItem) {
              Room.addRoom(selectedItem);
            });
        };
        
        /*this.newName = function() {
            var usernameModal = $uibModal.open({
                animation: false,
                ariaDescribedBy: 'modal-body',
                ariaLabelledBy: 'modal-title',
                templateUrl: '../templates/usernameModalTemplate.html',
                controller: 'ModalCtrl as modal',
                resolve: {
                }
           });
           
           usernameModal.result.then(function (selectedItem) {
                $cookies.put('blocChatCurrentUser', selectedItem);
            });
        };*/
        
        this.signIn = function(email, password) {
            var usernameModal = $uibModal.open({
                animation: false,
                ariaDescribedBy: 'modal-body',
                ariaLabelledBy: 'modal-title',
                templateUrl: '../templates/signInTemplate.html',
                controller: 'SignInModalCtrl as signInModal',
            });
           
            usernameModal.result.then(function () {
                
            });
            
        }
        
        this.signOut = function() {
            AuthService.signOut();
        }
        
        
    }
    
    angular
        .module('blocChat')
        .controller('SidebarCtrl', ["Room", "$uibModal", '$cookies', 'AuthService', SidebarCtrl]);
    
})();