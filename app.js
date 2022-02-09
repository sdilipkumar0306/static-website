import express from 'express';
import env from 'dotenv';
env.config();
const router = express.Router();
const app = express();
const port = process.env.PORT ?? 3000;

//-------------------------- Directives Configuration start ---------------------------------------------
import path from "path";
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.json());
app.use(express.static(__dirname + '/css/'));
app.use(express.static(__dirname + '/js/'));

function getPath(fileName) {
    return path.join(__dirname +'/html/'+fileName+'.html') 
}
// ------------------------ Directives Configuration end ------------------------------------------------



router.get('/',function(req,res){
    res.sendFile(getPath('index'))
});
router.get('/service',function(req,res){
    res.sendFile(getPath('service'))
});
router.get('/contact',function(req,res){
    res.sendFile(getPath('contact'))
});


app.use('/', router);


app.listen(port,()=> console.log(`App Running on Port : localhost:${port}`))
