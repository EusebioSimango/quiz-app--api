const HTTP = require("http")
const PORT = 8080
const DEFAULT_HEADER = {
	"Content-Type": "application/json"
}
const db = [
{}
]

const routes = {
	"/": async (request, response) => {
		response.write('API MADE BY EUSEBIO SIMANGO')
		response.end()		
	},

	"/questions/all:get": async (request, response) => {
		const { find } = await db.generateData()
		const data = await find()
		response.write(JSON.stringify( data ))
		response.end()
	},
	"/questions/all:post": async (request, response) => {
		for await (const data of request) {
			try {
				const question = JSON.parse(data)
				const { isValid } = newQuestion(question)
				const { error, valid } = isValid()

				if (!valid) {
					response.writeHead(400, DEFAULT_HEADER)
					response.write(JSON.stringify({
						error: error.join(',')
					}))
					return response.end()
				}

				const { create } = await db.generateData()
				await create(question)
				response.writeHead(201, DEFAULT_HEADER)
				response.write(JSON.stringify({
					sucess: 'Question added sucessfully!!'
				}))

				return response.end()
				
			} 
			catch (error) {
				return handlerError(response)(error)
			}
		}
	},
	"404": (request, response) => {
		response.write('404')
		response.end()
	}


}

const handlerError = response => {
	return error => {
		console.log('Deu Ruim', error)
		response.writeHead(500,DEFAULT_HEADER)
		response.write(JSON.stringify({
			error: 'Internal Server Error!!'
		}))
		response.end()
	}
}

const handler = (request, response) => {

	const { url, method } = request
	const [ home, questions, all ] = url.split('/')
	//Routes 
	const api = `/${questions}/${all}:${method.toLowerCase()}`

	const key = (questions && all) ? api : `/`

	console.log(key)
	const chosen = routes[key] ? routes[key] : routes["404"] 

	response.setHeader('Access-Control-Allow-Origin', '*')
	response.setHeader('Access-Control-Request-Method', '*')
	response.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET')
	response.setHeader('Access-Control-Allow-Headers', '*')
	return chosen(request, response)
}

HTTP.createServer(handler)
	.listen(PORT, () => console.log('Server runing at port:', PORT))