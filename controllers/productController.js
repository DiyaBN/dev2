const { response } = require("express");
const Product = require("../Model/Product");

const product_all= async(req,res) => {
    try{
        const leads = await Product.find({},{_id:0});
        res.json(leads);
        console.log('ok', response.leads);
    } catch (error) {
        res.json({message : error});
    }
};

const product_details= async (req,res) => {
    try{
        const leads = await Product.findById(req.params.leadId);
        res.json(leads);
    } catch (error) {
        res.json({message : error});
    }
};

const product_create= async (req,res) => {
    const lead = new Product({
        l_owner:req.body.l_owner,
        f_name:req.body.f_name,
        l_name:req.body.l_name,
        company:req.body.company,
        title:req.body.title,
        mobile:req.body.mobile,
        email:req.body.email,
        employees:req.body.employees
    });

    try{
        const savedLead = await lead.save();
        res.send(savedLead);
    } catch (error) {
        res.json({message : error});
    }
};

const product_update= async (req,res) => {
    try{
        const lead = ({
            l_owner:req.body.l_owner,
            f_name:req.body.f_name,
            l_name:req.body.l_name,
            company:req.body.company,
            title:req.body.title,
            mobile:req.body.mobile,
            email:req.body.email,
            employees:req.body.employees
        });

        const updatedLead = await Product.findByIdAndUpdate(
            { _id:req.params.leadId },
            lead
        );
        res.json(updatedLead);
    }catch (err){
        res.json({message:err});
    }
};

const product_delete= async (req,res) => {
    try{
        const removeLead = await Product.findByIdAndDelete(req.params.leadId)
        res.json(removeLead);
    } catch(err){
        res.json({ message: err});
    }
};

module.exports = {
    product_all,
    product_details,
    product_create,
    product_update,
    product_delete
}

// const { response } = require("express");
// const Product = require("../Model/Product");
// const convert = require('xml-js');

// // Function to convert object to XML format
// const convertToXml = (data) => {
//     const options = { compact: true, ignoreComment: true, spaces: 4 };
//     return convert.js2xml(data, options);
// };

// // Get all products
// const product_all= async(req,res) => {
//     try{
//         const leads = await Product.find({},{_id:0});
//         const xmlData = convertToXml({ leads });
//         res.set('Content-Type', 'text/xml');
//         res.send(xmlData);
//     } catch (error) {
//         res.json({ message: error });
//     }
// };

// // Single Product
// const product_details= async (req,res) => {
//     try{
//         const lead = await Product.findById(req.params.leadId);
//         const xmlData = convertToXml({ lead });
//         res.set('Content-Type', 'text/xml');
//         res.send(xmlData);
//     } catch (error) {
//         res.json({ message: error });
//     }
// };

// // Add new Product
// const product_create= async (req,res) => {
//     const lead = new Product({
//         name: req.body.name,
//         cost: req.body.cost,
//         age: req.body.age,
//         company: req.body.company
//     });

//     try{
//         const savedLead = await lead.save();
//         const xmlData = convertToXml({ savedLead });
//         res.set('Content-Type', 'text/xml');
//         res.send(xmlData);
//     } catch (error) {
//         res.json({ message: error });
//     }
// };

// // Update Product
// const product_update= async (req,res) => {
//     try{
//         const lead = {
//             name: req.body.name,
//             cost: req.body.cost,
//             age: req.body.age,
//             company: req.body.company
//         };

//         const updatedLead = await Product.findByIdAndUpdate(
//             { _id: req.params.leadId },
//             lead,
//             { new: true }
//         );
//         const xmlData = convertToXml({ updatedLead });
//         res.set('Content-Type', 'text/xml');
//         res.send(xmlData);
//     }catch (err){
//         res.json({ message: err });
//     }
// };

// // Delete Product
// const product_delete= async (req,res) => {};

// module.exports = {
//     product_all,
//     product_details,
//     product_create,
//     product_update,
//     product_delete
// };
