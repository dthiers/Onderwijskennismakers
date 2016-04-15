app.controller('searchCtrl', ['$scope', '$routeParams', function(sc, routeParams){

  sc.$on('$viewContentLoaded', function(event) {
  	var tags = [
        {"tag":"School en samenleving"},
        {"tag":"Creatief denken"},
        {"tag":"Trefwoord1"},
        {"tag":"Trefwoord2"}
    ]

    var insertedTags = [];

    $('#txtQuery').on('input',function(e){
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
            if(item == tag){
                insertedTags.splice(i,1);
                createTags();
            }
        });
    });

    function createTags(){
        $("#divTagWrapper").empty();
        $.each(insertedTags, function(i, item) {
            $("#divTagWrapper").append("<div class='divTag'><p>" + item + "</p><img src='images/delete.png' class='imgDeleteTag' /></div>");
        });
    }

    function checkCompletions(input){
        $("#divSearchCompletionWrapper").empty();

        if(input != ""){
            $.each(tags, function(i, item) {
                if(item.tag.toLowerCase().indexOf(input.toLowerCase()) != -1){
                    $("#divSearchCompletionWrapper").append("<div class='divSearchCompletion'>" + item.tag + "</div>");
                }
            });
        }
    }
	});
}]);
