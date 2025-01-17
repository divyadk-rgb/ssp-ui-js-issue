export default {
	onLoad: () => {
		const requestId = appsmith.URL.queryParams['id'];
		storeValue('requestId', requestId);

		const email = appsmith.URL.queryParams['email'];
		storeValue('email', email);

		// Check if the email in the query parameter matches the logged-in user's email
		if (email === appsmith.user.email) {
			// If the emails match, load data for the logged-in user (e.g., set a flag or load specific data)
			storeValue('isUserMatched', true); 
		} else {
			// If the emails don't match, load a message or handle the condition
			storeValue('isUserMatched', false);
		}

	}
}

