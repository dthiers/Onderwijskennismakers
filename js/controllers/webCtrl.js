app.controller('webCtrl', ['$scope', '$location', 'profileService', '$routeParams', 'VisDataSet', function (sc, location, profileService, routeParams, VisDataSet) {

    sc.nodeCount = 18;
    sc.selectClick = false;

    sc.addNode = function() {
        sc.nodeCount++;
        sc.data.nodes.add({
            id: sc.nodeCount,
            label: 'Nieuw persoon',
            shape: 'circularImage',
            image: "images/Personen/persoon8.png"
        });

        sc.data.edges.add(
            {from: 12, to: sc.nodeCount}
        );
    };

    sc.events = {};

    sc.events.selectNode = function (click) {
        sc.selectClick = true;
        var xMid = window.innerWidth * 0.83 / 2;

        if (click.nodes <= 13 && click.nodes != 12) {
            var profile = profileService.getProfile(click.nodes);

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

    sc.events.hold = function(object) {
        if (profileService.getProfile(object.nodes) == null) {
            alert('No profile');
        } else {
            window.location = "/#/person/" + object.nodes;
        }
    }


    sc.events.click = function () {
        if (!sc.selectClick) {
            $("#divInfoPopup").css("display", "none");
        }
        sc.selectClick = false;
    };

    sc.events.zoom = function () {
        $("#divInfoPopup").css("display", "none");
    };

    sc.data = {
        "nodes": VisDataSet([
            {
                id: 1,
                label: 'Theo Brinkman',
                shape: 'circularImage',
                image: "images/Personen/persoon1.png"
            },
            {
                id: 2,
                label: 'Marita van den Heuvel',
                shape: 'circularImage',
                image: "images/Personen/persoon6.png"
            },
            {
                id: 3,
                label: 'Theo Mensen',
                shape: 'circularImage',
                image: "images/Personen/persoon7.png"
            },
            {
                id: 4,
                label: 'Els van der Pol',
                shape: 'circularImage',
                image: "images/Personen/persoon8.png"
            },
            {
                id: 5,
                label: 'Angela Horsten',
                shape: 'circularImage',
                image: "images/Personen/persoon9.png"
            },
            {
                id: 6,
                label: 'Hans van Daelen',
                shape: 'circularImage',
                image: "images/Personen/persoon10.png"
            },
            {
                id: 7,
                label: 'Stef van Wickeren',
                shape: 'circularImage',
                image: "images/Personen/persoon11.png"
            },
            {
                id: 8,
                label: 'Karin van Zutphen',
                shape: 'circularImage',
                image: "images/Personen/persoon2.png"
            },
            {
                id: 9,
                label: 'Siebrand Konst',
                shape: 'circularImage',
                image: "images/Personen/persoon3.png"
            },
            {
                id: 10,
                label: 'Koen Oosterbaan',
                shape: 'circularImage',
                image: "images/Personen/persoon20.png"
            },
            {
                id: 11,
                label: 'Jan Timmers',
                shape: 'circularImage',
                image: "images/Personen/persoon5.png"
            },
            {
                id: 12,
                label: 'Kristian van den Berg',
                shape: 'circularImage',
                image: "images/Personen/persoon13.png"
            },
            {
                id: 13,
                label: 'Marianne Rongen',
                shape: 'circularImage',
                image: "images/Personen/persoon12.png"
            },
            {
                id: 14,
                label: 'Annelies Verbeek',
                shape: 'circularImage',
                image: "images/Personen/persoon18.png"
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

    sc.$on('$viewContentLoaded', function (event) {
        sc.options = {
            width: '85%',
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
    });
}]);
