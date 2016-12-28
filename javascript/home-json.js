
var employeeList = [ ];

function collectDetail(){
	
    employeeList.push({
    	"firstname":firstName.value,
    	"phone":phoneNo.value,
    	"email":emailId.value,
    	"location":employeeLocation.value
    });
    
    setLocalStorage("employeeList", JSON.stringify(employeeList));  
 }


function getEmployeData(){

	var localStorageData = JSON.parse(getLocalStorage("employeeList"));
	//debugger;
	
	if(localStorageData) {
		employeeList = JSON.parse(getLocalStorage("employeeList"));
	}
 	
 	//employeeList = [employeeList];
}

function generateEmployeeTable() {

	var html = "";

	console.log(employeeList.length);

	if(employeeList.length > 0) {
		for (var i = 0; i < employeeList.length; i++) {
	 		html += "<tr>";
	 		html += "<td>" + i + "</td>";
	 		html += "<td>" + employeeList[i].firstname + "</td>";
	 		html += "<td>" + employeeList[i].email + "</td>";
	 		html += "<td>" + employeeList[i].phone + "</td>";
	 		html += "<td>" + employeeList[i].location + "</td>";
	 		html += "</tr>";
	    }
	    console.log(html);
	    document.getElementById("employeeTable").innerHTML = html;
	}
}

getEmployeData(); 
generateEmployeeTable();	

 // document.getElementById("getListButton").addEventListener('click', function(){
 // 	getDetail();
 // });

