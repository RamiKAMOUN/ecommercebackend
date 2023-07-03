const express = require('express');
const router = express.Router();
const Categorie=require("../models/categorie");
const categorie = require('../models/categorie');

router.post('/', async (req, res) => {
  
  
try {
  const { nomcategorie, imagecategorie} = req.body;
  const newCategorie = new Categorie({nomcategorie:nomcategorie,
  imagecategorie:imagecategorie})
await newCategorie.save();
res.status(200).json(newCategorie );
} catch (error) {
res.status(404).json({ message: error.message });
}
});

router.get('/', async(req,res)=>{
try {
  affiche=await categorie.find()
  res.status(200).send(affiche)
} catch (error) {
  res.status(404).send(error)
}

})

router.get('/:categorieId',async(req,res)=>{
  try {
    Myid= req.params.categorieId;
    afficheid= await categorie.findById(Myid)
    res.status(200).send(afficheid)
  } catch (error) {
    res.status(404).send(error)
  }
})
router.put('/:categorieId', async(req,res)=>{

  try {
  myid=req.params.categorieId;
  newData=req.body;
  modif= await categorie.findOneAndUpdate({_id:categorieId},newData);
  res.status(200).send(modif)

  } catch (error) {
    res.status(404).send(error)
  }

})
  router.delete('/:categorieId',async(req,res)=>{
  try {
    lireid=req.params.categorieId;
    up= await categorie.findOneAndDelete(lireid);
    
  } catch (error) {
    res.status(404).send(error);
  }
})

module.exports = router;