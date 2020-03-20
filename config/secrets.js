const JWT_SECRET = process.env.JWT_SECRET || "is it secret, is it safe?";
const JWT_SECRET_REFRESH =
  process.env.JWT_SECRET_REFRESH || "is it safe, is it secret?";

module.exports = { JWT_SECRET, JWT_SECRET_REFRESH };
