const CRUD = require("../util/crud.class");

const { Artist } = require("../model");

module.exports = class ArtistClass {
  constructor({ id, artist, rate, streams }) {
    this.id = id;
    this.artist = artist;
    this.rate = rate;
    this.streams = streams;
    this.model = new CRUD(Artist);
  }

  async findAll() {
    try {
      const artist = await this.model.findAll({
        order: [["amount", "DESC"]],
      });
      return artist;
    } catch (error) {
      throw new Error(error);
    }
  }

  async findById(id) {
    try {
      const artist = await this.model.findOne(id);
      return artist;
    } catch (error) {
      throw new Error(error);
    }
  }

  async create(artist) {
    try {
      const newArtist = await this.model.create(artist);
      return newArtist;
    } catch (error) {
      throw new Error(error);
    }
  }

  async update({ id, data }) {
    try {
      const updatedArtist = await this.model.update({ id, data });
      return updatedArtist;
    } catch (error) {
      throw new Error(error);
    }
  }

  async delete(id) {
    try {
      const deletedArtist = await this.model.delete(id);
      return deletedArtist;
    } catch (error) {
      throw new Error(error);
    }
  }
};
