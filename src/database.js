const { join } = require("path")
const { QuestionsData } = require("./questions")
const filename = join(__dirname, "../database", "db.json")

const generateData = async () => {
	const { find, create } = await QuestionsData(filename)
	// console.log(await (find()))
	// const data = await find()
	return { find, create }
}

module.exports = { generateData }