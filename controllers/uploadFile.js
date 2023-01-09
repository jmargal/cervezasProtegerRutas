const { response, request } = require("express");
const { uploadFile } = require("../helpers/uploadFile");

const User = require('../models/usuario')
const Beer = require('../models/cerveza')



const upload = async (req, res = response) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files were uploaded.");
  }

  try {
    // txt, md
    // const nombre = await uploadFile( req.files, ['txt','md'], 'textos' );
    console.log(req.files);
    const name = await uploadFile(req.files, undefined, "imgs");
    res.json({ name });
  } catch (msg) {
    res.status(400).json({ msg });
  }
};

const updateImage = async (req=request, res=response) => {
  const id=req.params.id;
  const collection=req.params.collection;
  const image = await uploadFile(req.files, undefined, "imgs");
  switch (collection) {
    case "cervezas":
      const beerActualizar= Beer.findById(id);
      beerActualizar.image=image;
      
      res.json("cervezas")
      break;
    case "users":
      const userActualizar= User.findById(id);
      res.json("users")
      break;
      
  }
};

module.exports = { upload ,updateImage};
