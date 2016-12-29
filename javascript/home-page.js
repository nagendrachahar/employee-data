//variables to get values from form
var firstName = document.getElementById("name"),
    emailId = document.getElementById("email"),
    phoneNo = document.getElementById("phone"),
    employeeLocation = document.getElementById("location");

//function to validate form then execute the getdetail function.
function formValidation(){

	var nameLength = firstName.value,
	    phoneLength = phoneNo.value,
	    text = phoneLength * 2,
	    location = employeeLocation.value,
	    nameError = document.getElementById("nameMessageError").style,
	    phoneError = document.getElementById("phoneMessageError").style,
	    locationError = document.getElementById("locationMessageError").style;

	//console.log(phoneLength * 2);
	//condition to get valid data
	    if(nameLength.length < 4 || nameLength.length > 15){
			firstName.style.border = "1px solid red";
			nameError.display = "block";
			firstName.value = "";
		}
		else{
			firstName.style.border = "1px solid gray";
			nameError.display = "none";
		}
		if(phoneLength.length > 10 || phoneLength.length < 10){
			phoneNo.style.border = "1px solid red";
			phoneError.display = "block";
			phoneNo.value = "";
		}
		else if(text == NaN){
			phoneNo.style.border = "1px solid red";
			phoneError.display = "block";
			phoneNo.value = "";
		}
		else{
			phoneNo.style.border = "1px solid gray";
			phoneError.display = "none";
		}
		if(location == "select city"){
			employeeLocation.style.border = "1px solid red";
			locationError.display = "block";
		}
		else{
			employeeLocation.style.border = "1px solid gray";
			locationError.display = "none";
		}

	if (nameLength.length < 4 || nameLength.length > 15 || phoneLength.length > 10 || phoneLength.length < 10 || text == NaN || location == "select city"){
		window.alert("Data not save");

	}
	else{
        collectDetail();
        getEmployeData(); 
        generateEmployeeTable();

	}
}
//EventListener to add data in localstorage
document.getElementById('addEmployee').addEventListener('click', function() {
	formValidation();
	
});

