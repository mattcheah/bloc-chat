(function() {
    
    function SidebarCtrl(Room, $uibModal) {
        this.rooms = Room.all;

        this.newChat = function (size, parentSelector) {
            var modalInstance = $uibModal.open({
              animation: false,
              ariaLabelledBy: 'modal-title',
              ariaDescribedBy: 'modal-body',
              templateUrl: '../templates/modalTemplate.html',
              controller: 'ModalCtrl as modal',
              size: size,
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
        
    }
    
    angular
        .module('blocChat')
        .controller('SidebarCtrl', ["Room", "$uibModal",  SidebarCtrl]);
    
})();