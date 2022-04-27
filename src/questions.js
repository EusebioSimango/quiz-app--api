const { readFile, writeFile } = require("fs").promises

const QuestionsData = file => {

	const _dbFileContent = async () => JSON.parse(await readFile(file))

	const find = async () => {
		const data = await _dbFileContent()
		// console.log(data)
		return data
	}

	const create = async (data) => {
		const currentData = await _dbFileContent()
		currentData.push(data)

		await writeFile(file, JSON.stringify(currentData))

		return
	}

	return { find, create }
}

module.exports = { QuestionsData }
