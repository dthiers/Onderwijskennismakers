app.controller('webCtrl', ['$scope', 'profileService', '$routeParams', 'VisDataSet', function (sc, profileService, routeParams, VisDataSet) {

    sc.nodeCount = 18;

    sc.$on('$viewContentLoaded', function (event) {
        sc.options = {
            width: '85%',
            layout: {
                randomSeed:1
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

        sc.events = {};

        sc.events.selectNode = function(click) {
            $("#divInfoPopup").css("top", click.pointer.DOM.y - 20);
            $("#divInfoPopup").css("left", click.pointer.DOM.x + 20);
            $("#divInfoPopup").css("display", "block");
        };

        sc.test = function() {
            sc.nodeCount++;
            sc.data.nodes.add(
                {
                    id: sc.nodeCount,
                    label: 'sadkmklsadfklasdkmlfdskmla \n Stichting Digidact \n managing director & oprichter',
                    shape: 'circularImage',
                    image: "images/Personen/persoon1.png"
                }
            );
            sc.data.edges.add({from: 12, to: sc.nodeCount})
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
                    id: 18,
                    label: 'Annelies Verbeek    ',
                    shape: 'circularImage',
                    image: "images/Personen/persoon18.png"
                },

                {id: 14, label: 'E-portfolio', shape: 'box'},
                {id: 15, label: 'Professionalisering', shape: 'box'},
                {id: 16, label: 'Kwaliteitszorg', shape: 'box'},
                {id: 17, label: 'Zelfregulering', shape: 'box'}
            ]),
            "edges": VisDataSet([

                //eportfolio
                {from: 12, to: 14},
                {from: 14, to: 13},
                {from: 14, to: 1},
                {from: 14, to: 2},
                {from: 14, to: 3},

                //professionalisering
                {from: 12, to: 15},
                {from: 15, to: 4},
                {from: 15, to: 5},
                {from: 15, to: 18},

                //zelfregulering
                {from: 12, to: 16},
                {from: 16, to: 6},
                {from: 16, to: 7},
                {from: 16, to: 8},

                //kwaliteitszorg
                {from: 12, to: 17},
                {from: 17, to: 9},
                {from: 17, to: 10},
                {from: 17, to: 11}
            ])
        }
    });
}]);
