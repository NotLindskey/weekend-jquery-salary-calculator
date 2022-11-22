console.log("Working!");
$(onReady);

// jQuery
function onReady() {
	console.log("Still ready!");

	// on click to submit employee information.
	$(".submit-button").on("click", submitInformation);
	// $(".table-employee").on("click", addToTable);
} // end of onReady.

// Array of Employees.
let employees = [];

// Function that stores Employee Information into the array of employees
function submitInformation() {
	// store employee input values
	let fName = $(".user-input-f-name").val();
	let lName = $(".user-input-l-name").val();
	let employeeId = $(".user-input-id").val();
	let employeeTitle = $(".user-input-title").val();
	let employeeAS = $(".user-input-a-s").val();

	let employee = {
		firstName: fName,
		lastName: lName,
		employeeIdentification: employeeId,
		titleOfEmployee: employeeTitle,
		employeeAnnualSalary: employeeAS,
	};
	// input values of employees
	// let addedEmployee = { firstName, lastName, employeeIdentification, titleOfEmployee, employeeAnnualSalary};
	// push input values into employee array
	employees.push(employee);

	// on click reset input placeholders
	$("input").val("");
	console.log(employees);

	addToTable();
} // end of submitInformation

function addToTable() {
	let row = 1;
	for (row of employees) {
		console.log('working!')
		$(".table-employee").append(`
		<tr>
			<td>${employees.firstName}</td>
			<td>${employees.lastName}</td>
			<td>${employees.employeeIdentification}</td>
			<td>${employees.titleOfEmployee}</td>
			<td>${employees.employeeAnnualSalary}</td>
			<td><button>Remove</button></td>
		</tr>
	`);
	}
}

// function to append employee on to DOM table
// function appendToTable() {
// 	console.log("working!");
// 	$(".update-employee-row").append(`
// 	<tbody>
// 	<tr>
// 		<td class="firstName">${employee.fName}</td>,
// 		<td class="LastName">${employee.lName}</td>,
// 		<td class="employeeId">${employee.employeeId}</td>,
// 		<td class="employeeTitle">${employee.employeeTitle}</td>,
// 		<td class="annualSalary">${employee.employeeAS}</td>,
// 	</tr>
// 	</tbody>
// 	`);
// }
