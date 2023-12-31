const express=require('express');

const cors= require('cors');

const app = express();

app.use(cors());

const mongoose =require("mongoose")

const dotenv =require('dotenv')


const categorieRouter =require("./routes/categorie.route")
const scategorieSchema=require("./routes/scategorie.route")
const articleRouter =require("./routes/article.route")
const paymentRouter = require( "./routes/payment.route.js")
const userRouter=require("./routes/user.route")

dotenv.config()



//BodyParser Middleware
app.use(express.json());

mongoose.set("strictQuery", false);
// Connexion à la base données
mongoose.connect(process.env.DATABASECLOUD,{
useNewUrlParser: true,
useUnifiedTopology: true
})
.then(() => {console.log("Connexion à la base de données réussie");
})
.catch(err => {
console.log('Impossible de se connecter à la base de données', err);
process.exit();
});

app.listen(process.env.PORT, () => {
console.log(`Server is listening on port ${process.env.PORT}`); });

app.use('/api/categories', categorieRouter);
app.use('/api/scategorie',scategorieSchema);
app.use('/api/articles', articleRouter);
app.use('/api/payment', paymentRouter);
app.use('/api/users', userRouter);
module.exports = app;