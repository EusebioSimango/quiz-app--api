const newQuestion = 
	( { question, a, b, c, d, rightAnswer }) => {
		const data = { question, a, b, c, d, rightAnswer }
		const isValid = () => {
			const propertyNames = Object.getOwnPropertyNames(data)
			const amoungInvalid = propertyNames
				.map( property => (!!data[property]) ? null : `${property} is missing`)
				.filter( item => !!item) 
				return {
					valid: amoungInvalid.length === 0,
					error: amoungInvalid
				}
		}

		return { isValid }

}

module.exports = { newQuestion }
