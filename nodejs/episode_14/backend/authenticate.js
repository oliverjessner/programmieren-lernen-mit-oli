import jsonwebtoken from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const publicKey = `-----BEGIN PUBLIC KEY-----\n${process.env.PUBLICKEY}\n-----END PUBLIC KEY-----`;

export default async (req, res, next) => {
    const barerHeader = req.headers['authorization'];
    const token = barerHeader && barerHeader.split(' ')[1];

    if (!token) {
        return res.sendStatus(401);
    }

    try {
        const decoded = jsonwebtoken.verify(token, publicKey, {
            algorithms: ['RS256'],
        });

        console.log(decoded);

        return next();
    } catch (e) {
        return res.sendStatus(401);
    }
};
