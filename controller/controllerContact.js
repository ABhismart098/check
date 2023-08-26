// const db = require ('../Config/dbConnections')
// const { validateContact, handleValidationErrors } = require('../Validation/contactValidation');

// //create a main function 

// const Contact = db.ContactForms;
//  //  Main work is started 

//   const addContact = async (req, resp) => {
//     try {
//         let info = {
//             FirstName: req.body.FirstName,
//             LastName: req.body.LastName,
//             Email: req.body.Email,
//             Phone: req.body.Phone,
//             Describe: req.body.Describe,
//             Message: req.body.Message,
            
//         }
//         const contactForms = await Contact.create(info)
//         resp.status(200).send(contactForms)
//     }
//     catch (err) {
//         console.log("err", err)
//     }

//     }
//     const getAllConnections = async (req, resp) => {
//         try {
//             const contactForms = await Contact.findAll();
//             resp.status(200).send({contactForms})
//         }
//         catch (err) {
//             console.log('err', err)
//         }
//     }
    
// module.exports= {
//     addContact,
//     getAllConnections
// }
        

