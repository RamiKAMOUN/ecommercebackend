const express=require('express');
const router=express.Router();
const scategories=require("../models/scategorie")

router.post('./', async(req,res)=>{
try {
  data=req.body;
  scat=new scategories(data);
  savedScat= await scat.save();
  res.send(savedScat)
} catch (error) {

  res.status(404).send(error)
  
}

})
router.get('./',async(req,res)=>{
  try {
    gall=await scategories.find();
  res.status(200).send(gall);
  } catch (error) {
    res.status(404).send(error)
    
  }
}
)
router.get('./:scategId',async(req,res)=>{
  try {
    Myid=req.params.scategId;
    gtid= await scategories.findOneById(Myid)
    res.status(200).send(gtid)
    
  } catch (error) {
    res.status(404).send(error)
  }
})

router.put('./:scategId',async(req,res)=>{
 try {
  Myid=req.params.scategId;
  newData=req.body;
  putid= await scategories.findOneAndUpdate({_id:scategId},newData);
  res.status(200).send(putid)
 } catch (error) {
  res.status(404).send(error)
 }
  
})
router.delete('./:scategId',async(req,res)=>{
  try {
    myid=req.params.scategId;
    del= await findOneAndDelete(myid);
    res.status(200).send(del)
  } catch (error) {
    res.status(404).send(error)
  }
})

module.exports = router;