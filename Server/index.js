const express = require('express')
const app = express()
const cors = require('cors')
const userRoutes = require('./routes/usersRoutes')
const productsRoutes = require('./routes/productsRoutes')
const db = require('./Config/mongodb');
const middle = require('./Middleware/samplemiddleware')
const verifytoken = require('./Middleware/authmiddleware')
const authRouter = require('./routes/authRouter')

const port = 8000


db();
app.use(cors());
app.use(express.json())
app.use(middle);
app.use('/auth',authRouter)
app.use('/users',verifytoken,userRoutes);
app.use('/products',verifytoken,productsRoutes);

app.get('/', (req, res) => {
    res.send('Wlecome to the server')
})

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})
