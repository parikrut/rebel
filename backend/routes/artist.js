var express = require("express");
const {
  GetAllArtist,
  GetArtistByID,
  CreateArtist,
  UpdatedArtist,
  DeletedArtist,
} = require("../controller/artist.controller");
var router = express.Router();

/* GET artist listing. */
router.get("/", GetAllArtist);

router.get("/:id", GetArtistByID);

router.post("/", CreateArtist);

router.put("/:id", UpdatedArtist);

router.delete("/:id", DeletedArtist);

module.exports = router;
