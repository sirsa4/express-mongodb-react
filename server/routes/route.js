const express = require("express");

const {Router} = express;

const route = Router();

const {getUsers,getUser,postUser,updateUser,deleteUser} = require("../controllers/controllers");

route.get("/",getUsers);

route.post("/",postUser);

route.get("/:id",getUser);

route.patch("/:id",updateUser);

route.delete("/:id",deleteUser);

module.exports = route;