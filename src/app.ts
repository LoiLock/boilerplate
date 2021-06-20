// Import routers
import {apiRoute} from './router/router';


import express from 'express';
import nunjucks from 'nunjucks';


// Create express instance and configure it
const app = express();
app.use(express.json());

// Server static files (css, client-side js, etc)
app.use(express.static('public'));

app.use('/api', apiRoute);

// Configure nunjucks
nunjucks.configure('./src/views', {
    express: app,
    autoescape: true,
});

const PORT = 8001;

app.get('/', (req, res) => {
    return res.render('index.html', {
        company_name: 'Test name',
    });
});

// Run app on all interfaces (0.0.0.0) and port 8001
// todo: Set port to .env configured value
app.listen(PORT, '0.0.0.0', () => {
    console.log(`App is running on port: ${PORT}`);
});
