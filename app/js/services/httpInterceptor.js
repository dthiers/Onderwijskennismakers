/**
 *
 * HTTP inteceptor to set the headers for each request
 *
 **/

module.exports = function ($rootScope, $localStorage, $q) {
  var service = this;

  service.request = function (config) {
    // Set the token on the header on authorization
    if ($localStorage.user.email && $localStorage.user.password) {
      config.headers['x-email'] = $localStorage.user.email;
      config.headers['x-password'] = $localStorage.user.password;
    }
    return config;
  };

  service.responseError = function (response) {
    if (response.status === 401) {
      $rootScope.$broadcast('unauthorized');
    }
    return $q.reject(response);
  }

  return this;
}
