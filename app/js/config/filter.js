/**
*
* Filter to return datetime object as required.
*
* TODO: add any filter you want to app
*
**/

module.exports = function(app) {

  /**
  * Return date format only as dd-mm-yyyy
  **/
  app.filter('dateonly', function($filter) {

    return function(input) {
      if(input == null){ return ""; }

      var _date = $filter('date')(new Date(input), 'dd-MM-yyyy');
      // var _date = $filter('date')(new Date(input), 'MMM dd yyyy - HH:mm:ss');

      return _date.toUpperCase();
    };
  })

  /**
  * Return dateTime format as dd-mm-yyyy HH:mm
  **/
  app.filter('datetime', function($filter) {

    return function(input) {
      if(input == null) { return ""; }

      var _date = $filter('date')(new Date(input), 'dd-MM-yyyy, HH:mm ')

      return _date;
    }

  })

}
