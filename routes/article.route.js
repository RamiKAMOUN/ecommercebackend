const express = require('express');
const router = express.Router();
const Article=require("../models/article")
const {verifyToken} =require("../middleware/veriftoken")
const {authorizeRoles} = require("../middleware/authorizeRoles")
// afficher la liste des articles.
router.get('/', verifyToken,authorizeRoles("user","admin","visiteur"), async (req, res )=> {
try {
const articles = await Article.find();
res.status(200).json(articles);
} catch (error) {
res.status(404).json({ message: error.message });
}
});
// créer un nouvel article
router.post('/', async (req, res) => {
const nouvarticle = new Article(req.body)
try {
await nouvarticle.save();
res.status(200).json(nouvarticle );
} catch (error) {
res.status(404).json({ message: error.message });
}
});
// chercher un article
//populate("scategorieID").exec() :populate C'est une jointure de l'ID sc avec l'article .exec() pour executer
router.get('/:articleId',async(req, res)=>{
try {
const art = await Article.findById(req.params.articleId).populate("scategorieID").exec();
res.status(200).json(art);
} catch (error) {
res.status(404).json({ message: error.message });
}
});
// modifier un article
router.put('/:articleId', async (req, res)=> {
const { reference,
designation,prix,marque,qtestock,imageart,scategorieID} = req.body;
const id = req.params.articleId;
try {
const art1 = {
reference:reference,designation:designation,prix:prix,marque:marque,
qtestock:qtestock,imageart:imageart,scategorieID:scategorieID, _id:id };

await Article.findByIdAndUpdate(id, art1);
res.json(art1);
} catch (error) {
res.status(404).json({ message: error.message });
}
});
// Supprimer un article
router.delete('/:articleId', async (req, res)=> {
const id = req.params.articleId;
await Article.findByIdAndDelete(id);
res.json({ message: "article deleted successfully." });
});
module.exports = router;