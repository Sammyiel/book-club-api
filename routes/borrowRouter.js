import express from "express";
import { createBorrowRecord, viewAllBorrowRecords, viewBorrowRecord, viewMemberBorrowings, updateBorrowRecords } from '../controllers/borrowController.js'
import { authenticate } from '../middlewares/auth.js';

const borrowRouter = express.Router();

//Creat borrow record
borrowRouter.post("/", authenticate, createBorrowRecord);

//View a record borrowRecord/:id
borrowRouter.get("/:id", authenticate, viewBorrowRecord);

//View all borrowRecords borrowRecord/
borrowRouter.get("/", authenticate, viewAllBorrowRecords);

//Update record borrowRecord/
borrowRouter.put("/", authenticate, updateBorrowRecords);

//View member borrowRecords members/:id
borrowRouter.get("/:id", authenticate, viewMemberBorrowings);

export default borrowRouter;