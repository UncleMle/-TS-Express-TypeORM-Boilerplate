import express, { Request, Response, Router, query } from 'express';
import apiMethods from '../api/api';
import { IncomingHttpHeaders } from 'http';
import bcrypt from 'bcrypt';
import { Accounts } from '../db/entities/accounts';
import { AppDataSource } from '../db/data-source';
import { _SHARED } from '../shared/constants';
import rateLimit, { RateLimitRequestHandler } from 'express-rate-limit';
import { Repository } from 'typeorm';
import { red } from 'console-log-colors';

const limiter: RateLimitRequestHandler = rateLimit({
	windowMs: 30 * 60 * 1000,
	max: 200,
    message: 'To many requests have come from this IP, please try again later.',
	standardHeaders: true,
	legacyHeaders: false
});

export default express.Router().get('/', limiter, async(req: Request, res: Response): Promise<void | Response> => {
    res.status(200).send({
        info: 'Hello World'
    });
});


