

import express, { Request, Response, NextFunction } from 'express';
import morgan from 'morgan';
import Block from '../lib/block';
import Blockchain from '../lib/blockchain';


const app = express();