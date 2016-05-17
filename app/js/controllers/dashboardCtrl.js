module.exports = function ($scope, $http, VisDataSet, ProfileService) {
    $scope.type = "keyword";

    $scope.slideDown = function () {
        $scope.topBarStyle = {top: '100%'};
        $scope.topContentStyle = {top: '0%'};
    };

    $scope.slideUp = function () {
        $scope.topBarStyle = {top: '0%'};
        $scope.topContentStyle = {top: '-100%'};
    };

    $scope.loadSchool = function () {
        $scope.type = "school";
    };
    $scope.loadUser = function () {
        $scope.type = "person";
    };
    $scope.loadKeyword = function () {
        $scope.type = "keyword";
    };

    getUser();

    // Initialize the web for the current user
    getWebForUser(1);

    function getUser() {//based on route param
        ProfileService.profileService.getById(2)//call to service
            .then(function (response) {
                $scope.user = response.data.data[0];//set response to scope
                console.dir($scope);
            }, function (error) {
                $scope.status = 'Unable to load customer data: ' + error.message;
            });
    }

    /* Web Creation */

    // Creates the web for the user with the given id
    function getWebForUser(id) {
        $http.get('https://onderwijskennismakers.herokuapp.com/user/' + id + '/web').then(function (response) {
            var nodes = new VisDataSet();
            var edges = new VisDataSet();

            var nodeCounter = 1;
            var userNodeCounter = 100;
            var data = response.data.data;

            // Create node for center user
            nodes.add(createUserNode(0, data.user));

            // Add keywords
            angular.forEach(data.keywords, function (value, key) {
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
        }, function (error) {
            alert("Error loading user web");
            console.log(error);
        });
    }

    // Creates the web for the keyword with the given id
    function getWebForKeyword(id) {
        $http.get('https://onderwijskennismakers.herokuapp.com/keyword/' + id + '/web').then(function (response) {
            var nodes = new VisDataSet();
            var edges = new VisDataSet();

            var nodeCounter = 1;
            var data = response.data.data;

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
        }, function (error) {
            alert("Error loading keyword web");
            console.log(error);
        });
    }

    // Creates a user node
    function createUserNode(id, data) {
        return {
            id: id,
            label: data.name,
            group: 'persons',
            shape: 'circularImage',
            image: data.profileImage,
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
            getWebForUser(node.userId);
        } else if(node.group == 'keywords') {
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

                //Personen
                persons: {
                    borderWidth: 0,
                    size: 40,
                    borderWidthSelected: 0,
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
                    shadow: false,
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

