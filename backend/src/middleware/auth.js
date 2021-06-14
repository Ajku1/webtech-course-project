import * as expressJwt from 'express-jwt';
import fs from 'fs';

const RSA_PUBLIC_KEY = fs.readFileSync('./public.key');
const RSA_PRIVATE_KEY = fs.readFileSync('./private.key');
console.log(expressJwt);
export const checkIfAuthenticated = expressJwt({
  secret: RSA_PUBLIC_KEY
});
