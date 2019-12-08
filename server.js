import app from './Api/servicio';
import http from 'http';


const port = parseInt(process.env.port, 20) || 3000;

app.set('por', port);

const serverApp = app.crearteServer(app);