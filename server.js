const express =  require('express')
const cors  =  require('cors')
const routes =  require('./routes.js')

const PORT = 3333

const app = express()
app.use(cors({ 
 origin: "*",
 methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}))
 
app.use((request, response, next) => {
    response.append('Access-Control-Allow-Origin', ['*']);
    response.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    response.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use(routes)

app.listen(PORT, () => console.log('Server runing at port:', PORT))
