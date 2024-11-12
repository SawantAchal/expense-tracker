import transactionModel from "../models/transactionModel.js"

const addTransaction = async (req, res) => {
    try {
        const transaction = new transactionModel({
            title:req.body.title,
            type:req.body.type,
            amount:req.body.amount,
            category:req.body.category,
            description:req.body.description,
        })
        await transaction.save()
        res.json({ success: true, message: 'transaction Added' });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message:error.message });
    }
}

const getAllTransaction = async (req, res) => {
    try {
        const transaction = await transactionModel.find({})
        res.json({success:true ,data:transaction})
    } catch (error) {
        console.log(error);
        res.json({ success: false, message:error.message });
    }
}

const deleteTransaction = async (req ,res) => {
    try {
        const transaction = await transactionModel.findById(req.body.id)
        await transactionModel.findByIdAndDelete(req.body.id)
        res.json({ success: true, message: 'transaction deleted' });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message:error.message });
    }
}
export {addTransaction , getAllTransaction , deleteTransaction}