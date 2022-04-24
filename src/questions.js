const { readFile } = require("fs").promises

const QuestionsData = file => {

	const _dbFileContent = async () => JSON.parse(await readFile(file))

	const find = async () => {
		const data = await _dbFileContent()
		// console.log(data)
		return data
	}

	return find() 
}

module.exports = { QuestionsData }
