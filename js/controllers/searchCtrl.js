app.controller('searchCtrl', ['$scope', '$routeParams', function(sc, routeParams) {

    sc.$on('$viewContentLoaded', function(event) {
        var data = dummy_data;
        var tags = [
            { name: "School en samenleving", tags: [{ "name": "school" }, { "name": "onderwijs" }] },
            { name: "Creatief denken", tags: [{ "name": "ondersteuning" }, { "name": "onderwijs" }] },
            { name: "ict", tags: [{ "name": "ict" }] },
            { name: "Bijles", tags: [{ "name": "ondersteuning" }] }
        ]

        var insertedTags = [];

        $('#txtQuery').on('input', function(e) {
            checkCompletions($(this).val());
        });

        $('#divSearchCompletionWrapper').on('click', '.divSearchCompletion', function() {
            insertedTags.push($(this).text());
            createTags();
            $('#txtQuery').val("");
            checkCompletions("");

        });

        $('#divTagWrapper').on('click', '.divTag', function() {
            var tag = $(this).text();
            
            $.each(insertedTags, function(i, item) {
                if (item == tag) {
                    insertedTags.splice(i, 1);
                    createTags();
                }
            });
        });

        function createTags() {
            console.log(insertedTags);
            $("#divTagWrapper").empty();
            $.each(insertedTags, function(i, item) {
                $("#divTagWrapper").append("<div class='divTag'><p>" +
                    item +
                    "</p><img src='images/delete.png' class='imgDeleteTag' /></div>");
            });
        }

        function checkCompletions(input) {
            $("#divSearchCompletionWrapper").empty();

            if (input != "") {
                $.each(tags, function(i, item) {
                    
                    if (item.name.toLowerCase().indexOf(input.toLowerCase()) != -1) {
                        text="";
                        $.each(item.tags, function(i, tag) {
                                text=text+" "+tag.name
                            });
                        $("#divSearchCompletionWrapper")
                            .append("<div class='divSearchCompletion'>" +
                            item.name
                             +
                            "</div>");
                    }
                });
            }
        }
    });
}]);
