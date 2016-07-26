$(document).ready(function() {

    var listener = new ParagraphTracker();

    var removeEverythingMatchingTheseSelectors = [
    ".entry-origin",
    ".entry-meta",
    ".toc",
    ".mw-editsection",
    ".reference",
    "figure",
    "#References",
    ".reflist",
    "#External_links",
    ".external",
    ".sistersitebox"
    ];

    $.each(removeEverythingMatchingTheseSelectors, function(index, value) {
        $(value).each(function(){
            $(this).remove();
        });
    });


    $("p").click(function() {
        $(".appendedText").each(function() {
            $(this).remove();
        });

        var rest = document.createElement('p');
        $(rest).addClass('appendedText');

        $(this).nextAll().each(function() {
            $(rest).append($(this).text());
            $(rest).append(" ");
        });

        $(this).append($(rest));
    });

});

