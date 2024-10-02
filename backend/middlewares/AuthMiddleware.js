import jwt from "jsonwebtoken";

export const verifyToken = (request, response, next) => {
  const token = request.cookies.jwt;
  console.log("Token received:", token);
  if (!token) {
    console.log("No token provided");
    return response.status(401).send("You aren't authorised!");
  }
  jwt.verify(
    token,
    "HGFY%#%$@%EDYTE&^$&^PUP_)(YUT&^%&^%#%$STR(P(^*T_()UPHOY%YFUR%E%DEY%WRS)",
    async (err, payload) => {
      if (err) {
        console.log("Token verification error:", err.message);
        return response.status(403).send("Token is invalid!");
      }
      request.userId = payload.userId;
      next();
    }
  );
};
