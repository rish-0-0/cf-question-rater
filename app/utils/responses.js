function statusResponse(res, status, success, data) {
  return res.status(status).send({ success, ...data });
}

module.exports = { statusResponse };
