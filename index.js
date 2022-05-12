const express = require('express')
const cors = require('cors')
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

// const routes = {
// 	"/": async (request, response) => {
// 		response.write('API MADE BY EUSEBIO SIMANGO')
// 		response.end()
// 	},

// 	"/questions/all:get": async (request, response) => {
// 		const data = db
// 		response.write(JSON.stringify(data))
// 		response.end()
// 	},
// 	"/questions/all:post": async (request, response) => {
// 		for await (const data of request) {
// 			try {
// 				const question = JSON.parse(data)
// 				const isQuestion = (!!question.question)
// 				const isOptions = (!!question.a && !!question.b && !!question.c && !!question.c)
// 				const isRightOption = (!!question.rightAnswer)

// 				if (isQuestion && isOptions && isRightOption) {
// 					db.push(question)
// 					response.writeHead(201, DEFAULT_HEADER)
// 					response.write(JSON.stringify({
// 						sucess: 'Question added sucessfully!!'
// 					}))

// 					return response.end()
// 				}

// 				response.writeHead(201, DEFAULT_HEADER)
// 				response.write(JSON.stringify({
// 					error: 'Missing anything!!'
// 				}))

// 				return response.end()


// 			} catch (error) {
// 				return handlerError(response)(error)
// 			}
// 		}
// 	},
// 	"404": (request, response) => {
// 		response.write('404')
// 		response.end()
// 	}


// }

// const handlerError = response => {
// 	return error => {
// 		console.log('Deu Ruim', error)
// 		response.writeHead(500, DEFAULT_HEADER)
// 		response.write(JSON.stringify({
// 			error: 'Internal Server Error!!'
// 		}))
// 		response.end()
// 	}
// }


app.listen(PORT, () => console.log('Server runing at port:', PORT))