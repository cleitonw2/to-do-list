const express = require('express');
const path = require('path');

const checkListRouter = require('./src/routes/checklist');
const rootRouter = require('./src/routes');
const methodOverride = require('method-override');

require('./config/database');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));

app.use('/', rootRouter)

app.use('/checklists', checkListRouter)


app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'ejs');

app.listen(3000, () => {
    console.log('servidor rodando na porta 3000');
});