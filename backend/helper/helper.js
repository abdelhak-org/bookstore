const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return JWT.sign({ id }, "secret-string", { expiresIn: maxAge });
};



module.exports={createToken}