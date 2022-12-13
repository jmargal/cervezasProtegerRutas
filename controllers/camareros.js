const { response, request } = require("express");
const Camarero = require("../models/camareros");

const getWaiters = async (req, res) => {
  const { limit = 10, skip = 0 } = req.query;
  const camareros = await Camarero.find()
    .limit(Number(limit))
    .skip(Number(skip));
  res.json({ limit, skip, camareros });
};

const getWaiter = async (req = request, res = response) => {
  const id = req.params.id;
  const waiter = await Camarero.findOne({ _id: id });
  if (waiter) {
    res.json(waiter);
  } else {
    res.json({ message: `El camarero ${id} no existe` });
  }
};

async function addWaiter(req = request, res = response) {
  const { Nombre, Puesto, Edad } = req.body;
  const waiter = new Camarero({
    Nombre,
    Puesto,
    Edad
  });
  await waiter.save();
  res.json({
    waiter
  });
}

const deleteWaiter=async(req = request, res = response) =>{
  const waiterId = req.params.id;
  const removed = await Camarero.remove({ _id: waiterId });
  res.json(removed);
}


const editwaiter=async(req = request, res = response)=> {
  const waiterId = req.params.id;
  const waiter = req.body;
  const updatedWaiter = await Camarero.update({ _id: waiterId }, waiter);

  res.json(updatedWaiter);
}

module.exports = { getWaiters, getWaiter,addWaiter,deleteWaiter,editwaiter };
