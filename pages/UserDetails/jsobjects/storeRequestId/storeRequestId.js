export default {
	onLoad: () => {
		const requestId = appsmith.URL.queryParams['id'];
		storeValue('requestId', requestId);
		// showAlert("Page has loaded!" + requestId);
	}
}

