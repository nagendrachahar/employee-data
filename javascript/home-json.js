//json, where to push values
var employeeList = [ ];
//function to collect details and push into localstorage
function collectDetail(){
	
    employeeList.push({
    	"firstname":firstName.value,
    	"phone":phoneNo.value,
    	"email":emailId.value,
    	"location":employeeLocation.value
    });
    
    setLocalStorage("employeeList", JSON.stringify(employeeList));  
 }

//function to get data from localstorage
function getEmployeData(){

	var localStorageData = JSON.parse(getLocalStorage("employeeList"));
	//debugger;
	
	if(localStorageData) {
		employeeList = JSON.parse(getLocalStorage("employeeList"));
	}
 	
 	//employeeList = [employeeList];
}
//function to generate employee table 
function generateEmployeeTable() {

	var html = "";

	//console.log(employeeList.length);

	if(employeeList.length > 0) {
		for (var i = 0; i < employeeList.length; i++) {
			var sNo = i + 1;
	 		html += "<tr>";
	 		html += "<td>" + sNo + "</td>";
	 		html += "<td>" + employeeList[i].firstname + "</td>";
	 		html += "<td>" + employeeList[i].email + "</td>";
	 		html += "<td>" + employeeList[i].phone + "</td>";
	 		html += "<td>" + employeeList[i].location + "</td>";
	 		html += "</tr>";
	    }
	    //console.log(html);
	    document.getElementById("employeeTable").innerHTML = html;
	}
}

getEmployeData(); 
generateEmployeeTable();	

 // document.getElementById("getListButton").addEventListener('click', function(){
 // 	getDetail();
 // });

