/**
*
*
* resourceDetailCtrl. @use:
*
**/

module.exports = function($scope, ResourcesService) {
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
        console.log(newResource);
        ResourcesService.setResourceDetails(newResource);

        ResourcesService.addResource({
            onSuccess:function(result){
                ResourcesService.setProperty("");
            },
            onError:function(err){
                console.log(err);
            }
        });
    }
}
