import fs from 'fs';
import jsonwebtoken from 'jsonwebtoken';

const jwt = jsonwebtoken;

export const RSA_PUBLIC_KEY = fs.readFileSync('./public.key');
export const RSA_PRIVATE_KEY = fs.readFileSync('./private.key');

export const authenticateToken = (req, res, next) => {
  console.log(req.headers);
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, RSA_PRIVATE_KEY, (err, user) => {
    console.log(err);

    if (err) return res.sendStatus(403);

    req.user = user;

    next();
  });
};
