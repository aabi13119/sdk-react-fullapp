const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");

// Authorization middleware. When used, the
// Access Token must exist and be verified against
// the Auth0 JSON Web Key Set
const checkJwt = jwt({
  // Dynamically provide a signing key
  // based on the kid in the header and
  // the signing keys provided by the JWKS endpoint.
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://dev-2gv2td8l.us.auth0.com/.well-known/jwks.json`,
  }),

  audience: "https://sdktest/api",
  issuer: [`https://dev-2gv2td8l.us.auth0.com/`],
  algorithms: ["RS256"],
});

module.exports = checkJwt;
