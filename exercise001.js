  const somePromiseObject = () => {
	
	return new Promise((resolve, reject) => {
		// Generate random number between 0 and 9
		const randomInt = Math.floor(Math.random() * 10);
	
		if (randomInt % 2 === 0) {
			// Success
			setTimeout(() => resolve('done'), 2000);
		} else {
			// Failure
			setTimeout(() => reject('error'), 2000);
		}
	});
}

const getPromiseResponse = async () =>
{
	try {
		const result = await somePromiseObject();
		console.log(result);
  	} catch (error) {
    	console.log(error)
	}
}

getPromiseResponse();

