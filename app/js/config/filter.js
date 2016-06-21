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
  * Return time format only as HH:mm:ss
  **/
  app.filter('timeonly', function($filter) {

    return function(input) {
      if(input == null) { return ""; }

      var _time = $filter('date')(new Date(input), 'HH:mm:ss');

      return _time;
    }
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

  /**
  * Return image link for type
  **/
  app.filter('resourceType', function($filter) {

    return function(input) {
      if(input == null) { return ""; }

      switch (input) {
          case "youtube":
            return "fa fa-play";
            break;
          case "image":
            return "fa fa-file-image-o";
            break;
          case "pdf":
            return "fa fa-file-text-o";
            break;
          case "website":
            return "fa fa-globe";
            break;
          default:
            return "fa fa-file-o";
      }
    }

  })

}
