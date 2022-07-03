const ArtistClass = require("../services/artist.service");
const {
  ReE,
  ReS,
  removeEmptyKeysFromObject,
  extractResponse,
} = require("../util/handler");

const Validator = (res) => {
  let response = extractResponse(res, [
    {
      name: "artist",
      type: "string",
      default: "",
    },
    {
      name: "rate",
      type: "string",
      default: "",
    },
    {
      name: "streams",
      type: "string",
      default: "",
    },
    {
      name: "amount",
      type: "string",
      default: "",
    },
    {
      name: "payout",
      type: "string",
      default: "",
    },
  ]);

  response = removeEmptyKeysFromObject(response);

  return response;
};
const GetAllArtist = async function (req, res, next) {
  try {
    const initArtist = new ArtistClass({});

    const Artist = await initArtist.findAll();

    return ReS(res, { Artist });
  } catch (error) {
    return ReE(res, req, { error: error.toString() }, 400);
  }
};

const GetArtistByID = async function (req, res, next) {
  try {
    const initArtist = new ArtistClass({});

    const Artist = await initArtist.findById(req.params.id);

    return ReS(res, { Artist });
  } catch (error) {
    return ReE(res, req, { error: error.toString() }, 400);
  }
};

const CreateArtist = async function (req, res, next) {
  try {
    const Body = Validator(req.body);
    const initArtist = new ArtistClass({});

    const Artist = await initArtist.create(Body);

    return ReS(res, { Artist });
  } catch (error) {
    return ReE(res, req, { error: error.toString() }, 400);
  }
};

const UpdatedArtist = async function (req, res, next) {
  try {
    const Body = Validator(req.body);
    const initArtist = new ArtistClass({});

    console.log(Body);
    const Artist = await initArtist.update({
      id: req.params.id,
      data: Body,
    });

    return ReS(res, { Artist });
  } catch (error) {
    return ReE(res, req, { error: error.toString() }, 400);
  }
};

const DeletedArtist = async function (req, res, next) {
  try {
    const initArtist = new ArtistClass({});

    const Artist = await initArtist.delete(req.params.id);

    return ReS(res, { Artist });
  } catch (error) {
    return ReE(res, req, { error: error.toString() }, 400);
  }
};

module.exports = {
  GetAllArtist,
  GetArtistByID,
  CreateArtist,
  UpdatedArtist,
  DeletedArtist,
};
