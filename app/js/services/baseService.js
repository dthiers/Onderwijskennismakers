
// param:service = name of the database routes
module.exports = function (service, http) {
    var urlBase = 'https://onderwijskennismakers.herokuapp.com/';

    var baseService = {
        // get all function
        getAll: function () {
            return http.get(urlBase + service);
        },
        // get by id
        getById: function (id) {
            return http.get(urlBase + service + '/' + id);
        },
        // create function
        create: function (data) {
            return http.post(urlBase + service + '/', data);
        },
        // update by id
        updateById: function (id, data) {
            return http.put(urlBase + service + '/' + id, data);
        },
        // delete by id
        deleteById: function (id) {
            return http.delete(urlBase + service + '/' + id);
        }
    }

    return baseService;
}
