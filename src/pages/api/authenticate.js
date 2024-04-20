import jwt from "jsonwebtoken";

const authenticationToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) {
    return res.status(401).json({ message: "Inserire un token valido." });
  } else {
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      if (err)
        return res
          .status(403)
          .json({ message: "Non hai i permessi di verifica." });
      req.user = user;
      next();
    });
  }
};

export default authenticationToken;
