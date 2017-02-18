(function(){
    
    function NewUserModalCtrl($uibModalInstance, $firebaseAuth, $cookies) {
        this.authObj = $firebaseAuth();
        self = this;
        this.email = "";
        this.password = "";
        this.password2 = "";
        this.errorMessages = "";
        
     
         this.ok = function() {
            if (this.password !== this.password2) {
                this.errorMessages = "Please confirm that your password matches!"
            } else if (this.email && this.password) {

                this.authObj.$createUserWithEmailAndPassword(this.email, this.password)
                    .then(function(firebaseUser) {
                        $cookies.put('blocChatCurrentUser', self.email);
                        console.log("User " + firebaseUser.uid + " created successfully!");
                        $uibModalInstance.close();
                    }).catch(function(error) {
                        console.error("Error in AuthService: ", error);
                        self.errorMessages = "Error: "+error.message;
                    });
            } else {
               console.log("error newusermodalctrl.js");
            }
        };
        
        this.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };
    }
    
    angular
        .module('blocChat')
        .controller('NewUserModalCtrl', ['$uibModalInstance', '$firebaseAuth', '$cookies', NewUserModalCtrl]);
    
})();