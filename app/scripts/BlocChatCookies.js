(function() {
   function BlocChatCookies($cookies, $uibModal) {
       
       var currentUser = $cookies.get('blocChatCurrentUser');
       console.log(currentUser);
       if (!currentUser || currentUser === "") {
        console.log("modal inside run");
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
       }
   } 
    
    angular
        .module('blocChat')
        .run(['$cookies', '$uibModal', BlocChatCookies])
})();