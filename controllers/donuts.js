// require Donut model
const Donut = require("../models/donut.js");

/* POST /donuts: maak een nieuwe donut aan */
async function create(req, res) {
    // nieuw donut object maken
    let donut = new Donut(); 

    // juiste invulling vd velden
    donut.clientName = req.body.clientName;
    donut.clientEmail = req.body.clientEmail;
    donut.topping = req.body.topping;
    donut.sprinkles = req.body.sprinkles;
    donut.logo = req.body.logo;   
    donut.amount = req.body.amount;   
    donut.creationDate = req.body.creationDate;   
    donut.dueDate = req.body.dueDate;   
    donut.description = req.body.description;   

    // donut en gegevens opslaan
    try {
        let savedDonut = await donut.save()
        let response = {
            status: "success",
            data: savedDonut
        }
        res.json(response)
    }catch(err){
        let response = {
            status : "error",
            message : "Error creating donut: " + err.message
        }
        res.json(response);
    }
}

/* DELETE /donuts/{id}: delete een donut */
async function deleteById(req, res) {
    let donutId = req.params.id;
    try {
        let result = await Donut.deleteOne({ _id: donutId });
        let response = {
            status : "success",
            data: result
        }
        res.json(response);    
    }catch(err){
        res.json({
            status: "error",
            error: err.message
        })
    }
};

module.exports = {
    create,
    deleteById
}