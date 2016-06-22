/**
 *
 * HTTP inteceptor to set the headers for each request
 *
 **/

module.exports = function ($rootScope, $localStorage, $q) {
  var service = this;

  service.request = function (config) {
    // Set the token on the header on authorization
      if(config.url === 'https://api.imgur.com/3/image.json'){
        config.headers.authorization = 'Client-ID b7fc74a624c38ac';
        return config;
      }
    else {
      if($localStorage.token){
        config.headers.authorization = $localStorage.token;
        return config;
      }
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
