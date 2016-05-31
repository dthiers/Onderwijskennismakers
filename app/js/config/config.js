module.exports = function (app) {

    app.config(function () {
            // TODO: config if you'd like

        })

        // This is run when Angular is bootstrapped
        .run(function ($rootScope, $templateCache, $state, $localStorage, $timeout) {
            // TODO: remove when out of development
            $rootScope.$on('$viewContentLoaded', function () {
                $templateCache.removeAll();
            });

            // On every stateChange
            $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams, options) {
                //event.preventDefault();

               
                //$localStorage.user = "Ryan Tietjes";
                if(($localStorage.user === undefined || $localStorage.user === null) ) {
                    var toLogin = toState === 'login';
                    if(toLogin) {
                        if(fromState.name !== toState.name) {
                            $state.go(toState.name);
                        }
                        return;
                    } 
                } 
            })
        })
}
