$(document).ready(function() {
    var removeEverythingMatchingTheseSelectors = [
    ".entry-origin",
    ".entry-title",
    ".entry-meta",
    ".toc",
    ".mw-editsection",
    ".reference",
    "figure",
    "#References",
    ".reflist",
    "header"
    ];

    $.each(removeEverythingMatchingTheseSelectors, function(index, value) {
        $(value).each(function(){
            $(this).remove();
        });
    });
});