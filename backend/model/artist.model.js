const Sequelize = require("sequelize");
const db = require("../db");

const Artist = db.define("artist", {
  artist: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  rate: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  streams: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  amount: {
    type: Sequelize.INTEGER,
  },
  payout: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
});

const CalculateAmount = (artist) => {
  const amount = Number(artist.rate * artist.streams).toFixed(2);
  artist.amount = amount;
};

Artist.beforeCreate(CalculateAmount);

module.exports = Artist;
