/**
*
*
* resourceDetailCtrl. @use:
*
**/

module.exports = function($scope, $localStorage, ResourcesService, ModalService) {
    console.log('Were in resourceDetailCtrl');

    /**
    * newResource object to store extra information on content
    **/
    $scope.newRescource = {
        name: "",
        community: "",
        description: ""
    }

    /**
    * Load available communities on $scope
    **/
    ResourcesService.getCommunities({
        onSuccess:function(result){
            $scope.communities = result.data.data;
        },
        onError:function(err){
            console.log(err);
        }
    });

    /**
    *
    * Save new resource to the API
    *
    * @param: name, description, community
    **/
    $scope.saveResource = function(newResource) {
        // Set user id of current logged in user
        newResource.setUserId(parseInt($localStorage.user.id));
        console.log(newResource);
        ResourcesService.setResourceDetails(newResource);

        ResourcesService.addResource({
            onSuccess:function(result){
                ResourcesService.setProperty("");

                ResourcesService.getLatestResource({
                    onSuccess: function(result){
                        var latestId = result.data.data.pop().id;

                        ModalService.showModal({
                            templateUrl: "../partials/directives/tags/tags_directive.html",
                            controller: "TagsCtrl",
                            inputs: {
                                id: latestId,
                                type: "content"
                              }
                        }).then(function(modal) {
                            modal.close.then(function(result) {
                                console.log(result);
                            });
                        });
                    },
                    onError: function(err){
                        console.log(err);
                    }
                });
            },
            onError:function(err){
                console.log(err);
            }
        });
    }
}
