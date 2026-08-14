import type { Request, Response, NextFunction } from "express";
import jwt from  "jsonwebtoken";

const verifyToken = (req: Request, res: Response, next: NextFunction): void => {
    
    const token = req.headers['authorization'];

    if(!token) {
        res.status(401).json({ message: 'Unauthenticated' })
        return;
    };

    jwt.verify(token, process.env.JWT_SECRET as string, (err, decoded) => {
        
        if (err || !decoded || typeof decoded === "string") {
            res.status(401).json({ message: "Invalid Token" });
            return;
        }

        req.userId = decoded.id;

        next();
    })
}

