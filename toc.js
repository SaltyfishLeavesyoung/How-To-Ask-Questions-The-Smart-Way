(function(window) {
	String.prototype.repeat = function(num) {
		return new Array(num + 1).join(this);
	};
	var url = document.URL,
		headers = jQuery("article :header"),
		result;
	for (var i = 2; i < headers.length; i++) {
		var header = headers[i],
			headerText = header.textContent.trim(),
			hIndex = parseInt(header.nodeName.substring(1)) - 1,
			indent = "  ".repeat(hIndex),
			link = ['<pre>', indent, '* [', headerText, '](', url, '#', headerText, ')', '\n', '</pre>'];
		result += link.join('');
	}
	var win = window.open("", "win");
	win.document.body.innerHTML = result;

})(window);
