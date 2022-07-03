const _ = require("lodash");
const moment = require("moment");

const ReE = function (res, req, err, code) {
  // Error Web Response
  if (typeof err == "object" && typeof err.message != "undefined") {
    err = err.message;
  }

  if (typeof code !== "undefined") res.statusCode = code;

  // //Email here
  // ErrorEmail(`${req.originalUrl} | ${JSON.stringify(err)}`);
  console.log({ err });
  return res.json({ success: false, ...err });
};

const ReS = function (res, data, code) {
  // Success Web Response
  let send_data = { success: true };

  if (typeof data == "object") {
    send_data = Object.assign(data, send_data); //merge the objects
  }

  if (typeof code !== "undefined") res.statusCode = code;

  return res.json(send_data);
};

const parseBooleanParam = (val, param) => {
  return _.has(val, param)
    ? _.get(val, param) === "true"
      ? 1
      : _.get(val, param) === "false"
      ? 0
      : undefined
    : undefined;
};

const parseDateParam = (val, param) => {
  if (_.has(val, param)) {
    const dateString = _.get(val, param);
    let date = moment(dateString);
    if (date.isValid()) {
      return date.toDate();
    } else {
      if (parseInt(dateString) !== NaN) {
        date = moment(parseInt(dateString));
        return date.toDate();
      } else {
        return undefined;
      }
    }
  } else {
    return undefined;
  }
};

const parseFloatParam = (val, param) => {
  return _.has(val, param) ? parseFloat(_.get(val, param)) : undefined;
};

const parseIntegerParam = (val, param) => {
  return _.has(val, param) ? parseInt(_.get(val, param)) : undefined;
};

const extractResponse = (params, extractedParams) => {
  let resultParams = {};
  extractedParams.forEach((param) => {
    const name = param.name;
    const type = param.type;
    const defaultVal = param.default;

    let value;
    switch (type) {
      case "boolean":
        value = parseBooleanParam(params, name);
        break;
      case "date":
        value = parseDateParam(params, name);
        break;
      case "float":
        value = parseFloatParam(params, name);
        break;
      case "int":
        value = parseIntegerParam(params, name);
        break;
      default:
        value = _.get(params, name);
    }
    if (value === undefined) {
      value = defaultVal;
    }
    if (value === null) {
      value = defaultVal;
    }

    if (value === "undefined") {
      value = defaultVal;
    }
    if (value === "null") {
      value = defaultVal;
    }
    resultParams[name] = value;
  });
  return resultParams;
};

const removeEmptyKeysFromObject = (obj) => {
  var result = _.omitBy(
    obj,
    (v) => _.isUndefined(v) || _.isNull(v) || v === ""
  );
  return result;
};

module.exports = {
  ReE,
  ReS,
  extractResponse,
  removeEmptyKeysFromObject,
};
