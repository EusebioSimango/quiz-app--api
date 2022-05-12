const express = require('express')
const cors = require('cors')
const { request } = require('http')
const { response } = require('express')
const PORT = 3333

const app = express()
app.use(cors())
app.use(express.json())

const db = [{
	"question": "Qual dos nomes abaixo é de um dos criadores do Facebook Inc. agora META",
	"a": "Ellon Musk",
	"b": "Mark Zuckerberg",
	"c": "Bill Gates",
	"d": "Jeff Bazzos",
	"rightAnswer": "b"
},
{
	"question": "Qual dos nomes abaixo é do criador do JavaScript",
	"a": "Mayk Brito",
	"b": "Brendan Eich",
	"c": "Bill Gates",
	"d": "Steve Jobs",
	"rightAnswer": "b"
}]

//routes 
app.get('/', (request, response) => {
	response.status(200).send('API MADE BY EUSEBIO SIMANGO')
})

app.get('/questions/all', (request, response) => {
	const data = db
	response.status(200).json(JSON.stringify(data))
})

app.post('/questions/all', async (request, response) => {
	for await (const data of request) {
		try {
			const question = JSON.parse(data)
			const isQuestion = (!!question.question)
			const isOptions = (!!question.a && !!question.b && !!question.c && !!question.c)
			const isRightOption = (!!question.rightAnswer)

			if (isQuestion && isOptions && isRightOption) {
				db.push(question)
				response.status(201).json(JSON.stringify({
					sucess: 'Question added sucessfully!!'
				}))

				return
			}

			response.json(JSON.stringify({
				error: 'Missing anything!!'
			}))

			return response.end()


		} catch (error) {
			response.status(500)
			response.json(JSON.stringify({
				Error: 'Internal Server Error!!',
				ErrorType: error
			}))
			return response.end()
		}
	}
})


app.listen(PORT, () => console.log('Server runing at port:', PORT))