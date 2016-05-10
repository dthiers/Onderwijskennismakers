module.exports = function () {

    var type = 'undefined';

    return {
        getProperty: function () {
            return type;
        },
        setProperty: function(value) {
            type = value;
            console.log("changed value to: " + type);
        }
    };
}
