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
              console.log(event);
                if(toState.name !== 'login'){
                    if(($localStorage.user === undefined || $localStorage.user === null) ) {
                        event.preventDefault();
                        $state.go('login');
                    }
                }
                
                if($localStorage.user && toState.name === 'login'){
                    event.preventDefault();
                    $state.go('dashboard');
                }
            })
        })
}
