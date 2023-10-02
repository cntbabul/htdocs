import express from'express';
import cors from 'cors'
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import userRoutes from './routes/user.routes.js'
import {config} from 'dotenv';
config();

const app = express();

app.use(express.json());

app.use(cors({
    origin:[process.env.FRONTED_URL],
    credientials:true
}));

app.use(cookieParser());

app.use(morgan('dev'));

app.use('/ping', function(req,res){
    res.send('PONG (i am live)');

});

app.use('/api/v1/user', userRoutes)

//routes of 3 modules
app.all('*', (req,res) => {
    res.status(404).send('OOPS! 404 not found')
});

export default app;