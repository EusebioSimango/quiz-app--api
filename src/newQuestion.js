const newQuestion = 
	( { question, a, b, c, d, rightAnswer }) => {
		const data = { question, a, b, c, d, rightAnswer }
		console.log(data)
		const isValid = () => {
			const propertyNames = Object.getOwnPropertyNames(data)
			console.log(propertyNames)
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

const {isValid} = newQuestion({question: 'aa',  b: 'b', c: 'c', d: 'd', rightAnswer: 'c'})
console.log(isValid())
