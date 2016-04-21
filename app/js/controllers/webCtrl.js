module.exports = function ($scope, ProfileService, VisDataSet) {
    $scope.nodeCount = 18;
    $scope.selectClick = false;

    $scope.options = {
        font: {
            color: '#ffffff'
        },
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
            dragView: false
        }
    };

    $scope.addNode = function () {
        $scope.nodeCount++;
        $scope.data.nodes.add({
            id: $scope.nodeCount,
            label: 'Nieuw persoon',
            shape: 'circularImage',
            image: "images/Personen/persoon8.png"
        });

        $scope.data.edges.add(
            {from: 12, to: $scope.nodeCount}
        );
    };

    $scope.events = {};

    $scope.events.selectNode = function (click) {
        $scope.selectClick = true;
        var xMid = window.innerWidth * 0.83 / 2;

        if (click.nodes <= 13 && click.nodes != 12) {
            var profile = ProfileService.getProfile(click.nodes);

            if (profile == null) {
                console.log("Profile not found");
                $("#divInfoPopup").css("display", "none");
                return;
            }

            $("#divInfoPopup").css("top", click.pointer.DOM.y - 30);

            if (click.pointer.DOM.x < xMid) {
                $("#divInfoPopup").css("left", click.pointer.DOM.x - 160);
            } else {
                $("#divInfoPopup").css("left", click.pointer.DOM.x + 40);
            }

            $("#infoName").text(profile.first_name + " " + profile.last_name);
            $("#infoTitle1").text(profile.titles[0]);
            $("#infoTitle2").text(profile.titles[1]);

            $("#divInfoPopup").css("display", "block");
        } else {
            $("#divInfoPopup").css("display", "none");
        }
    };

    $scope.events.hold = function (object) {
        if (ProfileService.getProfile(object.nodes) == null) {
            alert('No profile');
        } else {
            window.location = "/#/person/" + object.nodes;
        }
    }


    $scope.events.click = function () {
        if (!$scope.selectClick) {
            $("#divInfoPopup").css("display", "none");
        }
        $scope.selectClick = false;
    };

    $scope.events.zoom = function () {
        $("#divInfoPopup").css("display", "none");
    };

    $scope.data = {
        "nodes": VisDataSet([
            {
                id: 1,
                label: 'Theo Brinkman',
                shape: 'circularImage',
                image: "images/Personen/persoon1.png",
                font: {
                    color: '#ffffff'
                }
            },
            {
                id: 2,
                label: 'Marita van den Heuvel',
                shape: 'circularImage',
                image: "images/Personen/persoon6.png",
                font: {
                    color: '#ffffff'
                }
            },
            {
                id: 3,
                label: 'Theo Mensen',
                shape: 'circularImage',
                image: "images/Personen/persoon7.png",
                font: {
                    color: '#ffffff'
                }
            },
            {
                id: 4,
                label: 'Els van der Pol',
                shape: 'circularImage',
                image: "images/Personen/persoon8.png",
                font: {
                    color: '#ffffff'
                }
            },
            {
                id: 5,
                label: 'Angela Horsten',
                shape: 'circularImage',
                image: "images/Personen/persoon9.png",
                font: {
                    color: '#ffffff'
                }
            },
            {
                id: 6,
                label: 'Hans van Daelen',
                shape: 'circularImage',
                image: "images/Personen/persoon10.png",
                font: {
                    color: '#ffffff'
                }
            },
            {
                id: 7,
                label: 'Stef van Wickeren',
                shape: 'circularImage',
                image: "images/Personen/persoon11.png",
                font: {
                    color: '#ffffff'
                }
            },
            {
                id: 8,
                label: 'Karin van Zutphen',
                shape: 'circularImage',
                image: "images/Personen/persoon2.png",
                font: {
                    color: '#ffffff'
                }
            },
            {
                id: 9,
                label: 'Siebrand Konst',
                shape: 'circularImage',
                image: "images/Personen/persoon3.png",
                font: {
                    color: '#ffffff'
                }
            },
            {
                id: 10,
                label: 'Koen Oosterbaan',
                shape: 'circularImage',
                image: "images/Personen/persoon20.png",
                font: {
                    color: '#ffffff'
                }
            },
            {
                id: 11,
                label: 'Jan Timmers',
                shape: 'circularImage',
                image: "images/Personen/persoon5.png",
                font: {
                    color: '#ffffff'
                }
            },
            {
                id: 12,
                label: 'Kristian van den Berg',
                shape: 'circularImage',
                image: "images/Personen/persoon13.png",
                font: {
                    color: '#ffffff'
                }
            },
            {
                id: 13,
                label: 'Marianne Rongen',
                shape: 'circularImage',
                image: "images/Personen/persoon12.png",
                font: {
                    color: '#ffffff'
                }
            },
            {
                id: 14,
                label: 'Annelies Verbeek',
                shape: 'circularImage',
                image: "images/Personen/persoon18.png",
                font: {
                    color: '#ffffff'
                }
            },

            {id: 101, label: 'E-portfolio', shape: 'box'},
            {id: 102, label: 'Professionalisering', shape: 'box'},
            {id: 103, label: 'Kwaliteitszorg', shape: 'box'},
            {id: 104, label: 'Zelfregulering', shape: 'box'}
        ]),
        "edges": VisDataSet([

            //eportfolio
            {from: 12, to: 101},
            {from: 101, to: 13},
            {from: 101, to: 1},
            {from: 101, to: 2},
            {from: 101, to: 3},

            //professionalisering
            {from: 12, to: 102},
            {from: 102, to: 4},
            {from: 102, to: 5},
            {from: 102, to: 18},

            //zelfregulering
            {from: 12, to: 103},
            {from: 103, to: 6},
            {from: 103, to: 7},
            {from: 103, to: 8},

            //kwaliteitszorg
            {from: 12, to: 104},
            {from: 104, to: 9},
            {from: 104, to: 10},
            {from: 104, to: 11},
            {from: 104, to: 14}
        ])
    }

    $scope.$on('$viewContentLoaded', function (event) {

    });
};
