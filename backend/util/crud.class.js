const { Op } = require("sequelize");

module.exports = class CRUD {
  constructor(model) {
    this.model = model;
  }

  findAll(options) {
    return this.model.findAll(options);
  }

  create(data) {
    return this.model.create(data);
  }

  findOne(id) {
    return this.model.findOne({
      where: {
        id: {
          [Op.like]: id,
        },
      },
    });
  }

  update({ id, data }) {
    return this.model.update(data, {
      where: {
        id: id,
      },
    });
  }

  delete(id) {
    return this.model.destroy({
      where: {
        id: id,
      },
    });
  }
};
