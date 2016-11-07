/*document.getElementById("num1")
	.addEventListener("keyup", funtion(event)
	{
		event.preventDefault();
		if (event.keyCode == 13)
		{
			document.getElementById("enter1").click();
		}
	});*/

var euler1 = function  ()
{
	var sumEu = 0;
	var n = document.getElementById("num1").value;
	var i = 0;

	for (i = 1; i < n; i++)
	{
		if (i % 3 == 0 || i % 5 == 0)
		{
			sumEu += i;
		}
		else
		{
		}
	}

	answer1.innerHTML = sumEu;
}

