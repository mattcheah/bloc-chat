(function() {
    
    function SidebarCtrl(Room, $uibModal, $cookies) {
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
        
        this.newName = function() {
            var usernameModal = $uibModal.open({
                animation: false,
                ariaDescribedBy: 'modal-body',
                ariaLabelledBy: 'modal-title',
                templateUrl: '../templates/usernameModalTemplate.html',
                controller: 'ModalCtrl as modal',
                resolve: {
                /*items: function () {
                return $ctrl.items;
                }*/
                }
           });
           
           usernameModal.result.then(function (selectedItem) {
                $cookies.put('blocChatCurrentUser', selectedItem);
            });
        };
    }
    
    angular
        .module('blocChat')
        .controller('SidebarCtrl', ["Room", "$uibModal", '$cookies', SidebarCtrl]);
    
})();