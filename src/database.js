const { join } = require("path")
const { QuestionsData } = require("./questions")
const { find } = require("./questions")
const filename = join(__dirname, "../database", "db.json")

const generateData = async () => {
	const questions = await QuestionsData(filename)
	return questions
}

module.exports = { generateData }