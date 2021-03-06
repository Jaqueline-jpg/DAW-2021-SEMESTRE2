const express = require('express');
const cors = require('cors');

const groupRouter = require('./routes/group-router');
const productRouter = require('./routes/product-router');

const app = express();

const PORT = 3333;

//Middleware
app.use(express.json());
app.use(cors());

//Rota principal
app.get('/', (req, res) => {
    res.send(`ESTÁ FUNCIONANDO!`);
});

//Demais rotas
app.use('/groups', groupRouter);
app.use('/products', productRouter);

app.listen(PORT, () => {
    console.log(`Executando na porta ${PORT}`);
});