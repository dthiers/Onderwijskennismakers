module.exports = function (app) {

    app.config(function () {
            // TODO: config if you'd like

        })

        // This is run when Angular is bootstrapped
        .run(function ($rootScope, $templateCache, $state, $localStorage) {
            // TODO: remove when out of development
            $rootScope.$on('$viewContentLoaded', function () {
                $templateCache.removeAll();
            });

            // On every stateChange
            $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams) {

                //$localStorage.user = "Ryan Tietjes";

                if(($localStorage.user === undefined || $localStorage.user === null)) {
                    var toLogin = toState === 'login';
                    if(toLogin) {
                        return;
                    }

                    event.preventDefault();

                    $state.go('login');
                }
            })
        })
}
