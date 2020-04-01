const JWT_SECRET = process.env.JWT_SECRET || "is it secret, is it safe?";
const JWT_SECRET_RESET =
  process.env.JWT_SECRET_RESET || "is it safe, is it secret, i dont know";

module.exports = { JWT_SECRET, JWT_SECRET_RESET };
