function clearAll()
{
	document.getElementById("monLob").value="";
	document.getElementById("tuesLob").value="";
	document.getElementById("wedsLob").value="";
	document.getElementById("thursLob").value="";
	document.getElementById("friLob").value="";
	document.getElementById("satLob").value="";
	document.getElementById("sunLob").value="";
	
	document.getElementById("monDrive").value="";
	document.getElementById("tuesDrive").value="";
	document.getElementById("wedsDrive").value="";
	document.getElementById("thursDrive").value="";
	document.getElementById("friDrive").value="";
	document.getElementById("satDrive").value="";
	document.getElementById("sunDrive").value="";
	
}

function closeWeekends()
{
	document.getElementById("satLob").value="Closed";
	document.getElementById("sunLob").value="Closed";
	document.getElementById("satDrive").value="Closed";
	document.getElementById("sunDrive").value="Closed";
	
}

function setWeekDays()
{
	var inputHours = prompt("Enter weekday operating hours:");
	
	document.getElementById("monLob").value=inputHours;
	document.getElementById("tuesLob").value=inputHours;
	document.getElementById("wedsLob").value=inputHours;
	document.getElementById("thursLob").value=inputHours;
	document.getElementById("friLob").value=inputHours;
	
	document.getElementById("monDrive").value=inputHours;
	document.getElementById("tuesDrive").value=inputHours;
	document.getElementById("wedsDrive").value=inputHours;
	document.getElementById("thursDrive").value=inputHours;
	document.getElementById("friDrive").value=inputHours;
	
}

function generateHTML()
{
	
	var monLobData = document.getElementById("monLob").value;
	var tuesLobData = document.getElementById("tuesLob").value;
	var wedsLobData = document.getElementById("wedsLob").value;
	var thursLobData = document.getElementById("thursLob").value;
	var friLobData = document.getElementById("friLob").value;
	var satLobData = document.getElementById("satLob").value;
	var sunLobData = document.getElementById("sunLob").value;
	
	var monDriveData = document.getElementById("monDrive").value;
	var tuesDriveData = document.getElementById("tuesDrive").value;
	var wedsDriveData = document.getElementById("wedsDrive").value;
	var thursDriveData = document.getElementById("thursDrive").value;
	var friDriveData = document.getElementById("friDrive").value;
	var satDriveData = document.getElementById("satDrive").value;
	var sunDriveData = document.getElementById("sunDrive").value;
	
	var genHTMLWindow = window.open("", "_self");
	genHTMLWindow.document.write("<h2>Generated HTML Code</h2>");
	var genHTMLOutput = (
		  '&lttable&gt' 
		+ "<br>" 
		+ '&lttr&gt' 
		+ '&lttd&gtLobby Hours&lt/td&gt' 
		+ '&lt/tr&gt' 
		+ "<br>" 
		+ '&lttr&gt' 
		+ '&lttd&gtMonday:&lt/td&gt' 
		+ '&lttd&gt' 
		+ monLobData 
		+ '&lt/td&gt' 
		+ '&lt/tr&gt' 
		+ "<br>" 
		+ '&lttr&gt' 
		+ '&lttd&gtTuesday:&lt/td&gt' 
		+ '&lttd&gt' 
		+ tuesLobData 
		+ '&lt/td&gt' 
		+ '&lt/tr&gt' 
		+ "<br>" 
		+ '&lttr&gt' 
		+ '&lttd&gtWednesday:&lt/td&gt' 
		+ '&lttd&gt' 
		+ wedsLobData 
		+ '&lt/td&gt' 
		+ '&lt/tr&gt' 
		+ "<br>" 
		+ '&lttr&gt' 
		+ '&lttd&gtThursday:&lt/td&gt' 
		+ '&lttd&gt' 
		+ thursLobData 
		+ '&lt/td&gt' 
		+ '&lt/tr&gt' 
		+ "<br>" 
		+ '&lttr&gt' 
		+ '&lttd&gtFriday:&lt/td&gt' 
		+ '&lttd&gt' 
		+ friLobData 
		+ '&lt/td&gt' 
		+ '&lt/tr&gt' 
		+ "<br>" 
		+ '&lttr&gt' 
		+ '&lttd&gtSaturday:&lt/td&gt' 
		+ '&lttd&gt' 
		+ satLobData 
		+ '&lt/td&gt' 
		+ '&lt/tr&gt' 
		+ "<br>" 
		+ '&lttr&gt' 
		+ '&lttd&gtSunday:&lt/td&gt' 
		+ '&lttd&gt' 
		+ sunLobData 
		+ '&lt/td&gt' 
		+ '&lt/tr&gt' 
		+ "<br>" 
		+ '&lttr&gt&lt/tr&gt' 
		+ "<br>" 
		+ '&lttr&gt' 
		+ '&lttd&gtDrive Thru Hours&lt/td&gt' 
		+ '&lt/tr&gt' 
		+ "<br>" 
		+ '&lttr&gt' 
		+ '&lttd&gtMonday:&lt/td&gt' 
		+ '&lttd&gt' 
		+ monDriveData 
		+ '&lt/td&gt' 
		+ '&lt/tr&gt' 
		+ "<br>" 
		+ '&lttr&gt' 
		+ '&lttd&gtTuesday:&lt/td&gt' 
		+ '&lttd&gt' 
		+ tuesDriveData 
		+ '&lt/td&gt' 
		+ '&lt/tr&gt' 
		+ "<br>" 
		+ '&lttr&gt' 
		+ '&lttd&gtWednesday:&lt/td&gt' 
		+ '&lttd&gt' 
		+ wedsDriveData 
		+ '&lt/td&gt' 
		+ '&lt/tr&gt' 
		+ "<br>" 
		+ '&lttr&gt' 
		+ '&lttd&gtThursday:&lt/td&gt' 
		+ '&lttd&gt' 
		+ thursDriveData 
		+ '&lt/td&gt' 
		+ '&lt/tr&gt' 
		+ "<br>" 
		+ '&lttr&gt' 
		+ '&lttd&gtFriday:&lt/td&gt' 
		+ '&lttd&gt' 
		+ friDriveData 
		+ '&lt/td&gt' 
		+ '&lt/tr&gt' 
		+ "<br>" 
		+ '&lttr&gt' 
		+ '&lttd&gtSaturday:&lt/td&gt' 
		+ '&lttd&gt' 
		+ satDriveData 
		+ '&lt/td&gt' 
		+ '&lt/tr&gt' 
		+ "<br>" 
		+ '&lttr&gt' 
		+ '&lttd&gtSunday:&lt/td&gt' 
		+ '&lttd&gt' 
		+ sunDriveData 
		+ '&lt/td&gt' 
		+ '&lt/tr&gt' 
		+ "<br>" 
		+ '&lt/table&gt');
		
	genHTMLWindow.document.write(genHTMLOutput);
	
	var windowText = document.createElement("INPUT");
	windowText.type = "TEXT";
	windowText.value = (genHTMLOutput.length);
	windowText.setAttribute("readonly", true);
	genHTMLWindow.document.write("<br><br> HTML character size ");
	document.body.appendChild(windowText);
	
	var windowButton = document.createElement("BUTTON");
	windowButton.onclick = function previousPage () 
	{
		window.open("tables.html","_self");
	};
	
	var windowButtonText = document.createTextNode("Return to previous page");
	windowButton.appendChild(windowButtonText);
	genHTMLWindow.document.write("<br><br><br>");
	genHTMLWindow.document.write("<table>");
	genHTMLWindow.document.write("<tr>");
	genHTMLWindow.document.write("<td>");
	document.body.appendChild(windowButton);
	genHTMLWindow.document.write("</td>");
	genHTMLWindow.document.write("</tr>");
	genHTMLWindow.document.close();
	
}
