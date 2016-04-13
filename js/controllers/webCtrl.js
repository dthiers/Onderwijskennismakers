app.controller('webCtrl', ['$scope', 'profileService', '$routeParams', function(sc, profileService, routeParams) {

    sc.$on('$viewContentLoaded', function(event) {
        sc.data = {
            "nodes": [{ id: 1, label: 'Theo Brinkman \n Stichting Digidact \n managing director & oprichter', shape: 'circularImage', image: "images/Personen/persoon1.png" },
                { id: 2, label: 'Marita van den Heuvel \n Wittering.nl \n regisseur, ICT coördinator', shape: 'circularImage', image: "images/Personen/persoon6.png" },
                { id: 3, label: 'Theo Mensen \n Stichting e-Portfolio Support \n secretaris', shape: 'circularImage', image: "images/Personen/persoon7.png" },
                { id: 4, label: 'Els van der Pol \n Signum \n directeur Onderwijs en Ontwikkeling', shape: 'circularImage', image: "images/Personen/persoon8.png" },
                { id: 5, label: 'Angela Horsten \n XPect Primair \n manager Schoolontwikkeling', shape: 'circularImage', image: "images/Personen/persoon9.png" },
                { id: 6, label: 'Hans van Daelen \n XPect Primair \n voorzitter College van Bestuur', shape: 'circularImage', image: "images/Personen/persoon10.png" },
                { id: 7, label: 'Stef van Wickeren \n Campus Columbus \n directeur', shape: 'circularImage', image: "images/Personen/persoon11.png" },
                { id: 8, label: 'Karin van Zutphen \n Wittering.nl \n directeur', shape: 'circularImage', image: "images/Personen/persoon2.png" },
                { id: 9, label: 'Siebrand Konst \n Stichting Flore \n Algemeen directeur Onderwijs en Personeel', shape: 'circularImage', image: "images/Personen/persoon3.png" },
                { id: 10, label: 'Koen Oosterbaan \n SKO Flevoland en Veluwe \n voorzitter College van Bestuur', shape: 'circularImage', image: "images/Personen/persoon20.png" },
                { id: 11, label: 'Jan Timmers \n Signum \n voorzitter College van Bestuur', shape: 'circularImage', image: "images/Personen/persoon5.png" },
                { id: 12, label: 'Kristian van den Berg \n SKO Flevoland en Veluwe \n projectmanager Onderwijsinnovatie en ICT', shape: 'circularImage', image: "images/Personen/persoon13.png" },
                { id: 13, label: 'Marianne Rongen \n Wittering.nl \n regisseur, innovator', shape: 'circularImage', image: "images/Personen/persoon12.png" },
                { id: 18, label: 'Annelies Verbeek \n SKO Flevoland en Veluwe \n lid College van Bestuur', shape: 'circularImage', image: "images/Personen/persoon18.png" },

                { id: 14, label: 'E-portfolio', shape: 'box' },
                { id: 15, label: 'Professionalisering', shape: 'box' },
                { id: 16, label: 'Kwaliteitszorg', shape: 'box' },
                { id: 17, label: 'Zelfregulering', shape: 'box' }
            ],
            "edges": [

                //eportfolio
                { from: 12, to: 14 },
                { from: 14, to: 13 },
                { from: 14, to: 1 },
                { from: 14, to: 2 },
                { from: 14, to: 3 },

                //professionalisering
                { from: 12, to: 15 },
                { from: 15, to: 4 },
                { from: 15, to: 5 },
                { from: 15, to: 18 },

                //zelfregulering
                { from: 12, to: 16 },
                { from: 16, to: 6 },
                { from: 16, to: 7 },
                { from: 16, to: 8 },

                //kwaliteitszorg
                { from: 12, to: 17 },
                { from: 17, to: 9 },
                { from: 17, to: 10 },
                { from: 17, to: 11 },

            ]
        }

    });
}]);
