export default {

	validate(){

		// Regular expression for IPv4
		const ipv4Regex = /^(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

		// Regular expression for IPv6
		const ipv6Regex = /^([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/;

		const dropdownValue = envLabel.selectedOptionValue; 
		// const generateUUID = () => {
		// return crypto.randomUUID();
		// };
		// const requestData = JSON.stringify({
		// sourceIp: "192.168.1.1",  // Example source IP
		// destinationIp: "192.168.1.2"  // Example destination IP
		// });
		// const UUID = constants.generateUUID();
		// const UUID = generateUUID();
		const getUUID = () => {
			return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
				const r = Math.random() * 16 | 0;
				const v = (c === 'x' ? r : (r & 0x3 | 0x8));
				return v.toString(16);
			});
		};
		// return generateUUID();
		storeValue('UUID', getUUID());
		if (dropdownValue && srcIp.text && destIp.text) {
			// if (ipv4Regex.test(srcIp.text) && ipv4Regex.test(destIp.text)) {
			// return Promise.all([
			// saveWorkflowQuery.run(),
			// executeWorkflowApi.run() 
			// ])
			// .then(() => showAlert('New workflow created successfully', 'Success'))
			// .then(() => resetWidget('workflowForm'))
			// .catch((error) => {
			// // showAlert("Error: " + error.message);
			// });
			// } 
			if (ipv4Regex.test(srcIp.text) && ipv4Regex.test(destIp.text)) {
				saveWorkflowQuery.run()
					.then(() => {
					// Only call executeWorkflowApi after the first one succeeds
					return executeWorkflowApi.run();
				})
					.then(() => {
					// Both calls have succeeded, show success alert
					showAlert('New workflow created successfully', 'Success');

					// Reset the form
					resetWidget('workflowForm');
				})
					.catch((error) => {
					// showAlert("Error ipv4: " + error);
					// Handle any errors that occur during the API calls
					showAlert("Error ipv4: " + error.message);
				});
			}

			else if (ipv6Regex.test(srcIp.text) && ipv6Regex.test(destIp.text)) {
				// return Promise.all([
				// saveWorkflowQuery.run(),   // Run the PostgreSQL query
				// executeWorkflowApi.run() // Run the API call
				// ])
				// .then(() => showAlert('New workflow created successfully', 'Success'))
				// .then(() => resetWidget('workflowForm'))
				// .catch((error) => {
				// showAlert("Error: " + error.message);
				// });
				saveWorkflowQuery.run()
					.then(() => {
					// Only call executeWorkflowApi after the first one succeeds
					return executeWorkflowApi.run();
				})
					.then(() => {
					// Both calls have succeeded, show success alert
					showAlert('New workflow created successfully', 'Success');

					// Reset the form
					resetWidget('workflowForm');
				})
					.catch((error) => {
					// Handle any errors that occur during the API calls
					showAlert("Error: " + error.message);
				});
			} else {
				showAlert("Invalid IP address!");
			}
		}
		else{
			showAlert("Please fill in all fields.");
		}
	}
}