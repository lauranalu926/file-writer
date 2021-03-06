function writer(fileName, content, option){
    var a = document.createElement('a');
	var url = window.URL.createObjectURL(new Blob([content],
		{ type: (option.type || "text/plain") + ";charset=" + (option.encoding || 'utf-8') }));
	a.href = url;
	a.download = fileName || 'file';
	a.click();
	window.URL.revokeObjectURL(url);
}
module.exports = writer;