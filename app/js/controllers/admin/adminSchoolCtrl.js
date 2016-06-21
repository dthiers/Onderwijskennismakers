module.exports = function ($scope, user, ResourcesService, SchoolService, $timeout, ProfileService) {

    var self = this;

    $scope.user = user;

    $scope.progress = "schoolList";
    $scope.newSchool = {};
    this.firstClick = true;

    self.getUsers = function(){
        ProfileService.profileService.getAll()
            .then(function (result) {
                $scope.users = result.data.data;
            }, function (err) {
                console.log(err);
            });
    }

    self.getSchools = function(){
        SchoolService.schoolService.getAll()
            .then(function (result) {
                $scope.schools = result.data.data;
            }, function (err) {
                console.log(err);
            });
    }

    self.getUsersInSchool = function(id){
        SchoolService.schoolService.getExpertsBySchool(id)
            .then(function (result) {
                $scope.schoolUsers = result.data.data;
            }, function (err) {
                console.log(err);
            });
    }

    self.getCurrentSchool = function(id){
        SchoolService.schoolService.getById(id)
            .then(function (result) {
                $scope.school = result.data.data[0];
            }, function (err) {
                console.log(err);
            });
    }

    $scope.switchProgress = function(state, id){
        $scope.progress = state;

        if(id !== null){
            self.getUsersInSchool(id);
            self.getCurrentSchool(id);
        }
    }

    $scope.file_changed = function (element) {
        $scope.$apply(function (scope) {
            var photofile = element.files[0];
            var reader = new FileReader();
            reader.onload = function (e) {
                console.log(photofile);
                ResourcesService.postImage(photofile, {
                    onSuccess: function (result) {
                        popupMessage("Foto is succesvol geupload");
                        $scope.school.logo = result.data.data.link;
                    },
                    onError: function (err) {
                        console.log(err);
                    }
                });
            };
            reader.readAsDataURL(photofile);
        });
    };

    $scope.registerSchool = function(newSchool){
        if($scope.newSchool.logo == null){
            popupMessage("Voeg een logo toe!");
            return;
        }
        SchoolService.schoolService.addSchool(newSchool, {//call to service
            onSuccess: function (result) {
                popupMessage($scope.newSchool.name + " is succesvol geregistreerd");
                self.getSchools();
                $scope.progress = "schoolList";

            },
            onError: function (err) {
                popupMessage("Er is iets misgegaan bij het toevoegen van de school");
                console.log(err.message);
            }
        });
    }

    $scope.deleteSchool = function(school){

        if(!confirm("Weet je zeker dat je deze school wilt verwijderen?")){
            return;
        }

        SchoolService.schoolService.deleteById(school.id)
            .then(function (result) {
                popupMessage("School is succesvol verwijderd");
                self.getSchools();
            }, function (error) {
                popupMessage("Er is iets misgegaan bij het verwijderen van de school");
                console.log(err.message);
            });
    }

    $scope.addUserToSchool = function(user){
        SchoolService.schoolService.addExpert($scope.school.id, user.id, {//call to service
            onSuccess: function (result) {
                self.getUsersInSchool($scope.school.id);
                popupMessage("Succesvol toegevoegd");
            },
            onError: function (err) {
                popupMessage("Er is iets misgegaan bij het toevoegen van de expert");
                console.log(err);
            }
        });
    }

    //filter
    $scope.alreadyInSchool = function(user) {

        var result = true;

        angular.forEach($scope.schoolUsers, function(value, key) {
            if(user.id == value.id){
                result = false;
            }
        });

        return result;
    };

    function popupMessage(message){
        $scope.message = message;
        $(".popup_message").addClass("flash_popup"); 
        $timeout(function(){
            $(".popup_message").removeClass("flash_popup"); 
        }, 3000);  
        
    }

    self.getUsers();
    self.getSchools();

};