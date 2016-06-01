
module.exports = function ($scope, VisDataSet, ProfileService, KeywordService, SchoolService, ContentService, ResourcesService, $http, ModalService, $localStorage, $sce, $timeout, user, SearchService, $q) {

    $scope.testUser = user;

    var self = this;

    $scope.hidePopup = true;
    $scope.breadcrumbs = new Array();

    var lastUserWebNodes;
    var lastUserWebEdges;
    var lastUserContent;

    // Initialize the web for the current user
    //getWebForUser(1);

    $scope.slideDown = function () {
        $scope.topBarStyle = {top: '100%'};
        $scope.topContentStyle = {top: '0%'};
        $scope.bottomBarStyle = {bottom: '0%'};
    };

    $scope.slideUp = function ( ) {
        $scope.topBarStyle = {top: '0%'};
        $scope.topContentStyle = {top: '-100%'};
        $scope.bottomBarStyle = {bottom: '100%'};
    };

    //LOAD DIRECTIVES
    $scope.loadSchool = function(id){
        getSchool(id);
        $scope.type = "school";
    };
    $scope.loadUser = function (id, reloadWeb) {
        if(reloadWeb)
            getWebForUser(id);
        getUserDetails(id);
        getUserContent(id);
        $scope.type = "person";
    };
    $scope.loadKeyword = function (id, reloadWeb) {
        if(reloadWeb)
            getWebForKeyword(id);
        getKeyword(id);
        $scope.type = "keyword";
    };
    $scope.loadContent = function(id){
        getContent(id);
        $scope.type = "content";
    };

    $scope.openResources = function(){
      ResourcesService.setProperty("addResource");
    }
    /**
    *
    * Function to trust source.
    *
    **/

    $scope.trustSrc = function(src) {
      return $sce.trustAsResourceUrl(src);
    }

    /**
    *
    * Function to convert score to 0.5 steps.
    *
    **/

    $scope.getSteppedRating = function(rating){
      var stepped;

      if(rating / 0.5 % 0.5 === 0){
        stepped = rating;
      } else {
        stepped = (Math.round(value * 2)) / 2;
      }

      return stepped;
    }

    $scope.steppendRatingIsFull = function(rating){
        return rating % 1 === 0;
    }

    $scope.getTimes=function(n){
        var round = Math.floor(n);
        return new Array(round);
    }

    //GET WEB FOR CURRENT USER
    if($localStorage.user) {
      getWebForUser(parseInt($localStorage.user.id));
    }

    // Search with a debounce of 800ms
    $scope.search = function(query) {
        console.log("I'm doing my business");
        if(query !== "") {
            SearchService.search(query, function (data) {
                $scope.content = data["matched_content"];

                buildSearchWeb(data["matched_keywords"])
            });
        } else {
            // Reset content
            $scope.content = lastUserContent;

            // Reset scope to user web
            $scope.data = {
                "nodes": lastUserWebNodes,
                "edges": lastUserWebEdges
            };
        }
    };

    function buildSearchWeb(data) {
        var nodes = new VisDataSet();
        var edges = new VisDataSet();

        var nodeCounter = 1;
        var userNodeCounter = 100;
        var labelText = "";
        if(data.length == 0) {
            labelText = "No results";
        }
        // Create node for center user
        nodes.add({
            id: 0,
            label: labelText,
            group: 'persons',
            shape: 'circularImage',
            image: 'images/magnifier.png',
            weight: 1000
        });

        // Add keywords
        angular.forEach(data, function (value, key) {
            nodes.add(createKeywordNode(nodeCounter, value));
            edges.add({
                from: 0,
                to: nodeCounter
            });

            // Add users to keywords
            angular.forEach(value.users, function (userValue, userKey) {
                nodes.add(createUserNode(userNodeCounter, userValue));
                edges.add({
                    from: userNodeCounter,
                    to: nodeCounter
                });

                userNodeCounter++;
            });

            nodeCounter++;
        });

        // Set data on scope
        $scope.data = {
            "nodes": nodes,
            "edges": edges
        };
    }

    /**
    *   ---------------------------------------------------------------------------------------------------------------
    *   POPUP DIE JE KUNT AANROEPEN MET EEN MESSAGE ERIN
    *   HTML CODE:
    *
    *   <div class="popup_message">{{message}}</div>
    *   ---------------------------------------------------------------------------------------------------------------
    **/
    function popupMessage(message){
        $scope.message = message;
        $(".popup_message").addClass("flash_popup");
        $timeout(function(){
            $(".popup_message").removeClass("flash_popup");
        }, 3000);
    }

    $scope.loadFromBreadcrumbs = function(type, id){

        for(var i = 0; i < $scope.breadcrumbs.length; i++){

            if($scope.breadcrumbs[i].id == id){
                $scope.breadcrumbs.splice(i + 1, $scope.breadcrumbs.length - i);
            }
        }
        console.log($scope.breadcrumbs);
        if(type == "keyword"){
            $scope.loadKeyword(id, true);
        }
        else{
            $scope.loadUser(id, true);
        }
    }

    function getUser(id) {//based on route param
        ProfileService.profileService.getById(id)//call to service
            .then(function (response) {

                $scope.user = response.data.data[0];//set response to scope

            }, function (error) {
                $scope.status = 'Er is iets misgegaan met het laden van de gebruiker: ';
                console.log(error.message);
            });
    }

    function getUserDetails(id) {//based on route param
        ProfileService.profileService.getUserDetails(id)//call to service
            .then(function (response) {

                $scope.user = response.data.data[0];//set response to scope

            }, function (error) {
                $scope.status = 'Er is iets misgegaan met het laden van de gebruiker: ';
                console.log(error.message);
            });
    }

    function getUserContent(id) {//based on route param
        ProfileService.profileService.getUserContent(id)//call to service
            .then(function (response) {

                $scope.userContent = response.data.data;//set response to scope
            }, function (error) {
                $scope.status = 'Er is iets misgegaan met het laden van de gebruiker: ';
                console.log(error.message);
            });
    }

    function getPopupDetails(id) {//based on route param
        ProfileService.profileService.getUserDetails(id)//call to service
            .then(function (response) {

                $scope.popup = response.data.data[0];//set response to scope

            }, function (error) {
                $scope.status = 'Er is iets misgegaan met het laden van de gebruiker: ';
                console.log(error.message);
            });
    }

    function getKeyword(id) {//based on route param
        KeywordService.keywordService.getById(id)//call to service
            .then(function (response) {
                $scope.keyword=response.data.data[0];//set response to scope
                console.log($scope.keyword);
                ProfileService.profileService.getById($scope.keyword.User_id)//call to service
                    .then(function (response) {
                        $scope.editor=response.data.data[0];//set response to scope
                    }, function (error) {
                        $scope.status = 'Er is iets misgegaan met het laden van de gebruiker';
                        console.log(error.message);
                    });
            }, function (error) {
                $scope.status = 'Er is iets misgegaan met het laden van het trefwoord';
                console.log(error.message);
            });

        KeywordService.keywordService.getTagsByKeyword(id)//call to service
            .then(function (response) {

                $scope.tags = response.data.data;//set response to scope
                console.log($scope.tags);

            }, function (error) {
                $scope.status = 'Er is iets misgegaan met het laden van de tags ';
                console.log(error.message);
            });
    }

    function getSchool(id) {//based on route param
        SchoolService.schoolService.getById(id)//call to service
            .then(function (response) {
                $scope.school=response.data.data[0];//set response to scope

                //get experts of school
                SchoolService.schoolService.getExpertsBySchool(id)
                    .then(function (response){
                        $scope.experts = response.data.data;
                    }, function (error){
                        $scope.status = "Er is iets misgegaan met het ophalen van de experts";
                    });
            }, function (error) {
                $scope.status = 'Er is iets misgegaan met het laden van de school';
                console.log(error.message);
            });
    }

    function getContent(id) {//based on route param
        console.log("GET CONTENT WITH ID " + id);
        ContentService.contentService.getById(id)//call to service
            .then(function (response) {

                $scope.singleContent = response.data.data[0];//set response to scope
                getUser($scope.singleContent.User_id);
                $scope.slideDown();


            }, function (error) {
                $scope.status = 'Er is iets misgegaan met het laden van de content: ';
                console.log(error.message);
            });
    }

    /**
    *
    * Check whether an image exists or not and returns the src if true, or a default image when false
    *
    * TODO: Deze methode zou gebruikt moeten worden tijdens het creeeren van het web, maar ik krijg het niet ingebouwd.
    *
    **/
    function isImage(src) {
        var defer = $q.defer();

        var image = new Image();
        image.onerror = function() {
            defer.resolve("images/personen/no_image.png");
        };
        image.onload = function() {
            defer.resolve(src);
        };
        image.src = src;

        return defer.promise;
    }

    /* Web Creation */

    // Creates the web for the user with the given id
    function getWebForUser(id) {

        console.log('Were in getWebForUser');
        $scope.hidePopup = true;
        $http.get('https://onderwijskennismakers.herokuapp.com/user/' + id + '/web').then(function (response) {


            var nodes = new VisDataSet();
            var edges = new VisDataSet();

            var nodeCounter = 1;
            var userNodeCounter = 100;
            var data = response.data.data;

            var add = true;
            for(var i = 0; i < $scope.breadcrumbs.length; i++){
                if($scope.breadcrumbs[i].id == data.user.id){
                    $scope.breadcrumbs.splice(i + 1, $scope.breadcrumbs.length - i);
                    add = false;
                }
            }
            if(add)
                $scope.breadcrumbs.push({id: data.user.id, name: data.user.name, type: "user"});

            /**
            *
            * CENTER USER
            *
            **/
            // Create node for center user

            // Check if isImage
            isImage(data.user.profileImage).then(function(src) {
              console.log(src);
              nodes.add({
                  id: 0,
                  label: data.user.name,
                  group: 'mainPerson',
                  shape: 'circularImage',
                  image: src,
                  userId: data.user.id
              });
            /**
            *
            * CENTER USER
            *
            **/

            /**
            *
            * KEYWORD TO CENTER USER
            *
            **/
            // Add keywords
            angular.forEach(data.keywords, function (value, key) {
                nodes.add(createKeywordNode(nodeCounter, value));
                edges.add({
                    from: 0,
                    to: nodeCounter
                });

                // Add users to keywords
                angular.forEach(value.users, function (userValue, userKey) {
                  /**
                  *
                  * DIT MOET WERKEND GEKREGEN WORDEN ZODAT ER EEN DEFAULT IMAGE GELADEN KAN WORDEN ALS DE
                  * IMAGE LINK IN DE userValue NIET BESTAAT
                  *
                  **/
                    // isImage(userValue.profileImage).then(function(src) {
                    //   userValue.profileImage = src;
                    //
                    //   nodes.add(createUserNode(userNodeCounter, userValue));
                    //   edges.add({
                    //       from: userNodeCounter,
                    //       to: nodeCounter
                    //   });
                    //
                    //   userNodeCounter++;
                    // })

                    nodes.add(createUserNode(userNodeCounter, userValue));
                    edges.add({
                        from: userNodeCounter,
                        to: nodeCounter
                    });

                    userNodeCounter++;
                });

                nodeCounter++;
            });


            // Set data on scope
            $scope.data = {
                "nodes": nodes,
                "edges": edges
            };

            lastUserWebNodes = nodes;
            lastUserWebEdges = edges;

            $scope.content = data.content;
            lastUserContent = $scope.content;
          });
        }, function (error) {
            alert("Error loading user web");
            console.log(error);



        //LOAD DETAIL WINDOW

        //VOOR TESTEN WEGGEHAALD
        $scope.loadUser(id, false);
      })
    }

    // Creates the web for the keyword with the given id
    function getWebForKeyword(id) {
        $scope.hidePopup = true;
        $http.get('https://onderwijskennismakers.herokuapp.com/keyword/' + id + '/web').then(function (response) {
            var nodes = new VisDataSet();
            var edges = new VisDataSet();

            var nodeCounter = 1;
            var data = response.data.data;

            var add = true;
            for(var i = 0; i < $scope.breadcrumbs.length; i++){
                if($scope.breadcrumbs[i].id == data.keyword.id){
                    $scope.breadcrumbs.splice(i + 1, $scope.breadcrumbs.length - i);
                    add = false;
                }
            }
            if(add)
                $scope.breadcrumbs.push({id: data.keyword.id, name: data.keyword.keyword, type: "keyword"});



            // Create node for center keyword
            nodes.add(createKeywordNode(0, data.keyword));

            // Add users for keyword
            angular.forEach(data.users, function (value, key) {
                nodes.add(createUserNode(nodeCounter, value));
                edges.add({
                    from: 0,
                    to: nodeCounter
                });

                nodeCounter++;
            });

            // Set data on scope
            $scope.data = {
                "nodes": nodes,
                "edges": edges
            };

            $scope.content = data.content;

            lastUserWebNodes = nodes;
            lastUserWebEdges = edges;
        }, function (error) {
            alert("Error loading keyword web");
            console.log(error);
        });

        //LOAD DETAIL WINDOW
        $scope.loadKeyword(id, false);
    }

    // Creates a user node
    /**
    *
    * TODO: Should use isImage(data.profileImage) to check whether an image exists. Can't get it to work.
    *
    **/
    function createUserNode(id, data) {
      return {
          id: id,
          label: data.name,
          group: 'persons',
          shape: 'circularImage',
          // image: data.profileImage,
          image: data.profileImage === null ? "images/personen/no_image.png" : data.profileImage, // TODO: dit wil je zo niet doen
          userId: data.id
      }
    }

    // Creates a keyword node
    function createKeywordNode(id, data) {
        return {
            id: id,
            label: data.keyword,
            group: 'keywords',
            shape: 'box',
            keywordId: data.id
        }
    }

    /* Web events */
    $scope.events = {};
    $scope.events.selectNode = function (click) {
        var node = $scope.data.nodes.get(click.nodes[0]);

        if(node.group == 'persons') {
            //getWebForUser(node.userId);

            getPopupDetails(node.userId);

            var xMid = window.innerWidth * 0.83 / 2;

            $(".web_popup").css("top", click.pointer.DOM.y + 50);
            if (click.pointer.DOM.x < xMid) {
                $(".web_popup").css("left", click.pointer.DOM.x - 140);
            } else {
                $(".web_popup").css("left", click.pointer.DOM.x + 90);
            }
            $scope.hidePopup = false;

        } else if(node.group == 'keywords') {
            $scope.hidePopup = true;
            getWebForKeyword(node.keywordId)
        }
    };

    $scope.$on('$viewContentLoaded', function (event) {
        $scope.options = {
            //ALGEMENE STYLING -----------------------------------------
            width: '100%',
            //zorgt ervoor dat er geen random web wordt gegenereerd
            layout: {
                randomSeed: 1
            },
            physics: {
                solver: 'forceAtlas2Based',
                maxVelocity: 1000,
                forceAtlas2Based: {
                    springLength: 150
                    //,springConstant: 0.2
                }
            },
            interaction: {
                dragNodes: false,
                dragView: true
            },
            //END ALGEMENE STYLING -----------------------------------------

            //GROUPS FOR SPECIFIC STYLING -----------------------------
            groups: {
                //Main person
                mainPerson: {
                    borderWidth: 0,
                    size: 80,
                    borderWidthSelected: 0,
                    shadow:{
                        enabled: true,
                        color: 'rgba(0,0,0,0.4)',
                        size:7,
                        x:5,
                        y:5
                    },
                    color: {
                        border: '#F5F5F5'
                    },
                    font: {
                        color: '#b6b6b6'
                    },


                    //Scaling options
                    scaling: {
                        label: {
                            enabled: true
                        },
                        customScalingFunction: function (min, max, total, value) {
                            if (max === min) {
                                return 0.5;
                            }
                            else {
                                var scale = 1 / (max - min);
                                return Math.max(0, (value - min) * scale);
                            }
                        }
                    },
                },
                //Personen
                persons: {
                    borderWidth: 0,
                    size: 40,
                    borderWidthSelected: 0,
                    shadow:{
                      enabled: true,
                      color: 'rgba(0,0,0,0.4)',
                      size:7,
                      x:5,
                      y:5
                    },
                    color: {
                        border: '#F5F5F5'
                    },
                    font: {
                        color: '#b6b6b6'
                    },


                    //Scaling options
                    scaling: {
                        label: {
                            enabled: true
                        },
                        customScalingFunction: function (min, max, total, value) {
                            if (max === min) {
                                return 0.5;
                            }
                            else {
                                var scale = 1 / (max - min);
                                return Math.max(0, (value - min) * scale);
                            }
                        }
                    },
                },

                //Trefwoorden
                keywords: {
                    labelHighlightBold: false,
                    borderWidth: 15,
                    borderWidthSelected: 15,
                    shadow:{
                      enabled: true,
                      color: 'rgba(0,0,0,0.5)',
                      size:7,
                      x:5,
                      y:5
                    },
                    color: {
                        border: '#73a1ee',
                        background: '#73a1ee',
                        highlight: {
                            border: '#73a1ee'
                        }
                    },
                    font: {
                        color: '#ffffff',
                        size: 14, // px
                        face: 'arial',
                        background: 'none'
                    },
                }
            },

            nodes: {

                hidden: false,
                level: undefined,
                mass: 1,
                physics: true
            },
            edges: {
                length: 100,
                color: '#d3d3d3'
            }

        };
    });
};
