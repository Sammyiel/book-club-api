import BorrowRecord from "../models/members.model.js";

// Create Record
export async function createBorrowRecord(req, res) {
    try {
        let borrowRecord = await BorrowRecord.create(req.body);
        if (borrowRecord) {
            res.status(200).json({
                success: true,
                message: 'Borrow record created successfully',
                data: borrowRecord
            })
        } else {
            res.status(200).json({
                success: true,
                message: 'Borrow record could not be created at this time'
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oopss! Something is wrong..."
        })
    }
}
// View Record
export async function viewBorrowRecord(req, res) {
    try {
        let allBorrowRecords = await BorrowRecord.findAll({ where: { borrow_id: req.params.id } });
        if (allBorrowRecords) {
            res.json({
                success: true,
                message: 'Borrow records retrieved successfully',
                data: allBorrowRecords
            })
        } else {
            res.json({
                success: true,
                message: 'No Borrow records found.',
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oopss! Something is wrong..."
        })
    }
}
// View all records
export async function viewAllBorrowRecords(req, res) {
    try {
        let allBorrowRecords = await BorrowRecord.findAll();
        if (allBorrowRecords) {
            res.json({
                success: true,
                message: 'Borrow records retrieved successfully',
                data: allBorrowRecords
            })
        } else {
            res.json({
                success: true,
                message: 'No Borrow records found.',
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oopss! Something is wrong..."
        })
    }
}

// Update borrowing record
export function updateBorrowRecords(req, res) {
    console.log(req.body);
    res.send(req.body)
}
// View Member Borrowings
export function viewMemberBorrowings(req, res) {
    console.log(req.body);
    res.send(req.body)
}