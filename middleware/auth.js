const jwt = require('jsonwebtoken');
const SECRET = "mYs3cr3T"
const authenticateJwt = (req, res, next) => {
    const authHeader = req.Headers.authorization;
    if (authHeader) {
        const token = authHeader.split(' ')[1];
        jwt.verify(token, secret, (err, user) => {
            if (err) {
                res.status(403).json({ message: "Authentication failed" });
            } else {
                req.user = user;
                next()
            }
        });
    } else {
        res.status(401).json({ message: "Session Expired" });
    }
}

module.exports = { authenticateJwt, SECRET };