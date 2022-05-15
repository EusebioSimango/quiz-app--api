import express from 'express'
const routes = express.Router()

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

routes.get('/', (request, response) => {
  response.status(200).send('API MADE BY EUSEBIO SIMANGO')
})

routes.get('/questions/all', (request, response) => {
  const data = db
  console.log(JSON.stringify(data))
  response.status(200).send(JSON.stringify(data))
})

routes.post('/questions/all', async (request, response) => {
  for await (const data of request) {
    try {
      const question = JSON.parse(data)
      const isQuestion = (!!question.question)
      const isOptions = (!!question.a && !!question.b && !!question.c && !!question.c)
      const isRightOption = (!!question.rightAnswer)

      if (isQuestion && isOptions && isRightOption) {
        db.push(question)
        response.status(201).send(JSON.stringify({
          sucess: 'Question added sucessfully!!'
        }))

        return
      }

      response.send(JSON.stringify({
        error: 'Missing anything!!'
      }))

      return response.end()


    } catch (error) {
      response.status(500)
      response.send(JSON.stringify({
        Error: 'Internal Server Error!!',
        ErrorType: error
      }))
      return response.end()
    }
  }
})

const notFounded = (request, response) => {
  response.status(404).send({ "error": "Not Founded" })
}

routes.get('*', (request, response) => {
  notFounded(request, response)
})

routes.post('*', (request, response) => {
  notFounded(request, response)
})

export default routes 