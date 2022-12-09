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

/* GET /donuts: geef alle donuts terug */
async function getAll(req, res) {
    Donut.find({}, (err, donuts) => {
        try {
            let response = {
                status: "success",
                data: donuts
            }
            res.json(response);
        }catch(err){
            res.json({
                status: "error",
                error: err.message
            })
        }
    
    });
}

/* GET /donuts/{id}: geef een specifieke donut terug */
async function getById(req, res) {
    let donutId = req.params.id;
    try {
        let donut = await Donut.findById({ _id: donutId });
        let response = {
            status: "success",
            data: donut
        }
        res.json(response);
    }catch(err){
        res.json({
            status: "error",
            error: err.message
        })
    }
}

/* PUT /donuts/{id}: update een specifieke donut */
async function updateById(req, res) {
    let donutId = req.params.id;
    try {
        let donutU = await Donut.findById({ _id: donutId });

        donutU.clientName = req.body.clientName;
        donutU.clientEmail = req.body.clientEmail;
        donutU.topping = req.body.topping;
        donutU.sprinkles = req.body.sprinkles;
        donutU.logo = req.body.logo;
        donutU.amount = req.body.amount;
        donutU.dueDate = req.body.dueDate;
        donutU.description = req.body.description;
        donutU.done = req.body.done;
        
        let savedDonut = await donutU.save()
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





module.exports = {
    create,
    deleteById,
    getAll,
    getById,
    updateById
}