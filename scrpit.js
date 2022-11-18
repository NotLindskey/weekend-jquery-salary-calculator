console.log("Working!");
$(onReady);

function onReady() {
	console.log("Still ready!");
	$(".submit-button").on("click", submitInformation);
    $(".submit-button").on('click', removeInputs);
}

// Function that stores Employee Information
function submitInformation() {
	console.log("working!");
	let fName = $(".user-input-f-name").val();
	let lName = $(".user-input-l-name").val();
	let employeeId = $(".user-input-id").val();
	let employeeTitle = $(".user-input-title").val();
	let employeeAS = $(".user-input-a-s").val();

	let employees = { fName, lName, employeeId, employeeTitle, employeeAS };
	console.log(employees);
} // end of submitInformation

function removeInputs () {
    console.log('Clicked!!!!');
}