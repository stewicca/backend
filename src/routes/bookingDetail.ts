import { prisma } from '../utilities/prisma';
import { AppError } from '../utilities/error';
import express, { Request, Response } from 'express';
import { asyncWrapper } from '../utilities/asyncWrapper';

const router = express.Router();

// get all booking detail
router.get('/bookingDetail', asyncWrapper(async (req: Request, res: Response) => {
  const bookingDetails = await prisma.bookingDetail.findMany();

  if (!bookingDetails) throw new AppError(400, { message: 'An error occurred while retrieving booking details data.' });

  res.status(200).json({ data: bookingDetails });
}));

export default router;
