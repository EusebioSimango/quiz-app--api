const express =  require('express')
const cors  =  require('cors')
const routes =  require('./routes.js')

const PORT = 3333

const app = express()
app.use(cors({ 
 origin: "*",
 methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}))
 
app.use(routes)

app.listen(PORT, () => console.log('Server runing at port:', PORT))
