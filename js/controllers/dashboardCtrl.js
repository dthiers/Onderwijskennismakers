app.controller('dashboardCtrl', ['$scope', 'VisDataSet', function(sc, VisDataSet){
    sc.slideDown = function(){
        sc.topBarStyle = {top: '100%'};
        sc.topContentStyle = {top: '0%'};
    }
    sc.slideUp = function(){
        sc.topBarStyle = {top: '0%'};
        sc.topContentStyle = {top: '-100%'};
    }

    sc.data = {
        "nodes": VisDataSet([
            {
                id: 1,
                label: 'Theo Brinkman',
                group: 'persons',
                shape: 'circularImage',
                image: "images/Personen/persoon1.png",
            },
            {
                id: 2,
                label: 'Marita van den Heuvel',
                group: 'persons',
                shape: 'circularImage',
                image: "images/Personen/persoon6.png",
            },
            {
                id: 3,
                label: 'Theo Mensen',
                group: 'persons',
                shape: 'circularImage',
                image: "images/Personen/persoon7.png",
            },
            {
                id: 4,
                label: 'Els van der Pol',
                group: 'persons',
                shape: 'circularImage',
                image: "images/Personen/persoon8.png",
            },
            {
                id: 5,
                label: 'Angela Horsten',
                group: 'persons',
                shape: 'circularImage',
                image: "images/Personen/persoon9.png",
            },
            {
                id: 6,
                label: 'Hans van Daelen',
                group: 'persons',
                shape: 'circularImage',
                image: "images/Personen/persoon10.png",
            },
            {
                id: 7,
                label: 'Stef van Wickeren',
                group: 'persons',
                shape: 'circularImage',
                image: "images/Personen/persoon11.png",
            },
            {
                id: 8,
                label: 'Karin van Zutphen',
                group: 'persons',
                shape: 'circularImage',
                image: "images/Personen/persoon2.png",
            },
            {
                id: 9,
                label: 'Siebrand Konst',
                group: 'persons',
                shape: 'circularImage',
                image: "images/Personen/persoon3.png",
            },
            {
                id: 10,
                label: 'Koen Oosterbaan',
                group: 'persons',
                shape: 'circularImage',
                image: "images/Personen/persoon20.png",
            },
            {
                id: 11,
                label: 'Jan Timmers',
                group: 'persons',
                shape: 'circularImage',
                image: "images/Personen/persoon5.png",
            },
            {
                id: 12,
                label: 'Kristian van den Berg',
                group: 'persons',
                shape: 'circularImage',
                image: "images/Personen/persoon13.png",
            },
            {
                id: 13,
                label: 'Marianne Rongen',
                group: 'persons',
                shape: 'circularImage',
                image: "images/Personen/persoon12.png",
            },
            {
                id: 14,
                label: 'Annelies Verbeek',
                group: 'persons',
                shape: 'circularImage',
                image: "images/Personen/persoon18.png",
                
            },

            {id: 101, label: 'E-portfolio', shape: 'box', group: 'keywords'},
            {id: 102, label: 'Professionalisering', shape: 'box', group: 'keywords'},
            {id: 103, label: 'Kwaliteitszorg', shape: 'box', group: 'keywords'},
            {id: 104, label: 'Zelfregulering', shape: 'box', group: 'keywords'}
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
			    	color: {
	          			border: '#F5F5F5'
        			},
        			font: {
	                    color: '#b6b6b6'
	                },

	                //Scaling options
	                scaling: {
			          label: {
			            enabled: true,
			          },
			          customScalingFunction: function (min,max,total,value) {
			            if (max === min) {
			              return 0.5;
			            }
			            else {
			              let scale = 1 / (max - min);
			              return Math.max(0,(value - min)*scale);
			            }
			          }
			        },
			    },

			    //Trefwoorden
			    keywords: {
			    	borderWidth: 15,
			    	borderWidthSelected: 15,
			    	color: {
			          border: '#69D3B6',
			          background: '#69D3B6',
			          highlight: {
			          	border: '#69D3B6',
			          }
		        	},
		        	font: {
			          color: '#ffffff',
			          size: 14, // px
			          face: 'arial',
			          background: 'none',
			        },
			    }
			},
    
            nodes:{
		        hidden: false,
		        level: undefined,
		        mass: 1,
		        physics: true,
		    },
		    edges: {
		      	length: 100,
		        color: '#d3d3d3'
		    },
		    
        };
    });
}]);
