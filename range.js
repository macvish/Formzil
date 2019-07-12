var moveValue = document.getElementById('move-value');

document.getElementById('move-range').addEventListener(
	'change', function () {
		// body...
		moveValue.innerText = this.value}, false);