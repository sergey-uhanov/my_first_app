var op;
function func() {
	var result;
	var num1 = Number(document.getElementById("num1").value);
	var num2 = Number(document.getElementById("num2").value);
	if (num1 == 0 || num2 == 0) {
		result = `You can buy 0 BTC`
	} else {
		op = num2 / num1;
		result = `You can buy ${op.toFixed(7)} BTC`
	}
	document.getElementById("result").innerHTML = result;
}







