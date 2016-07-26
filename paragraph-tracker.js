ParagraphTracker = function() {
	var paragraphs = document.getElementsByTagName('p');
	for (var i = 0; i < paragraphs.length; i++) {
		paragraphs[i].addEventListener('mouseover', function(e) {
			this.keepTrack(e.toElement);
		}.bind(this));
	}
};

ParagraphTracker.prototype.keepTrack = function (element, what) {
	this.currentParagraph = element;
	console.log(element.innerText);

    $(".appendedText").each(function() {
        $(this).remove();
    });

    var rest = document.createElement('p');
    $(rest).addClass('appendedText');

    $(element).nextAll().each(function() {
        $(rest).append($(this).html());
        $(rest).append(" ");
    });

    $(element).append($(rest));
};