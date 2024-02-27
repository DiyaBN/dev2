const Address = require("../Model/Address");
const Leads = require("../controllers/productController");

const address_create= async (req,res) => {
    const address = new Address({
        street:req.body.street,
        city:req.body.city,
        country:req.body.country,
        City:req.body.City,
        Zip_Code:req.body.Zip_Code,
        leadd_id:Leads.lead._id
    });

    try{
        const savedAddress = await address.save();
        res.send(savedLead);
    } catch (error) {
        res.json({message : error});
    }
};

module.exports = {
    address_create
}