const  productModel  = require('../models/productModel');

const router = require('express').Router();
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const loginModel = require('../models/productModel');
const pdfModel = require('../models/pdfModel');


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    
    filename: (req, file, cb) => {
        const filename = file.fieldname.toLowerCase().split(' ').join('-');
        // console.log(filename);
        cb(null, filename);
    }
});


const storagepdf = multer.diskStorage({
    destination: "pdfs/",
    
    filename: (req, file, cb) => {
        const filename = file.fieldname.toLowerCase().split(' ').join('-');
        // console.log(filename);
        cb(null, filename);
    }
});

const uploads = multer({ storage: storagepdf });

const upload = multer({
    storage: storage, 
    fileFilter: (req, file, cb) => {

        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg"  ) {
            cb(null, true);
        }
        else{
            cb(null, false);
            return cb(new Error('Only .png, .jpg, and .jpeg format allowed!'));
        }

    }
});



router.post('/admin', upload.single('productImage'), async (req,res,file) => {
    const url = req.protocol + '://' + req.get('host');
    const category = req.body.productCategory;

    const name = req.body.productName;
    const model = req.body.productModel;
    const size = req.body.productSize;

    const image = fs.readFileSync(path.join(__dirname + '/../uploads/'+req.file.filename))

console.log(req.file.filename);
const newProduct =  new productModel({
    category,
    image,
    name,
    model,
    size
});

await newProduct.save()
.then(()=>res.json('Product added'))
.catch((err)=>res.json(err))
})

// router.post("/washbasin/edit/:model",function(req,res){   
//     model.findByIdAndUpdate(req.body.id, { name:  req.body.name, category: req.body.address, contact: req.body.contact,email:req.body.email },   
//    function(err) {  
//     if (err) {  
//     res.send(err);  
//     return;
//     }  
//     res.send({data:"Record has been Updated..!!"});
//     });  
//    }) 


router.get('/admin/edit/:model' ,  (req, res)  => {

    // const products=  productModel.findOne(
    //      req.params.model, 
    // ).then((req) => console.log(req.data))
  
         productModel.findOne({model: req.params.model}, (err, data)=>{
            if (err) {
                res.json(err);
            }
            else{
               res.json(data);
            }
        })
});

router.route('/admin/edit/:model').put((req, res, next) => {
    productModel.findOneAndUpdate(req.params.model, {
        size: req.body.size, name: req.body.name, category: req.body.category, model: req.body.model
    }, (error, data) => {
      if (error) {
        return next(error);
        console.log(error)
      } else {
        res.json(data)
        console.log('Student updated successfully !')
      }
    })
  })

router.get('/washbasin' , async (req, res)  => {

    try{
   
  
        const products= await productModel.find({});
        res.send(products);
        res.redirect('/');

    }
    catch(err){
        res.status(500).send({ get_error: 'Products error' })
    }

    try{
        const login = await loginModel.find({});
        
        res.json(login);
        res.redirect('/');
    }
    catch(err) {
        res.status(500).send({ get_error: 'Login Error' })
    }
    
});


router.delete('/washbasin/delete/:model', (req, res)=>{
    const products=  productModel.deleteOne({
        model: req.params.model
    }).then((req) => console.log(req.data))
})

router.delete('/sendpdf/delete/:category', (req, res)=>{
    console.log(req.params.category);
    const products=  pdfModel.deleteOne({
        pdfcategory: req.params.category
    }).then((req) => console.log(req.data))
})

router.post('/send', uploads.single('pdfs'),  async (req,res,file) => {

    const pdfcategory = req.body.pdfCategory;
  
   

    const pdf = fs.readFileSync(path.join(__dirname + '/../pdfs/'+req.file.filename))
console.log(req.body);
const newPDF =  new pdfModel({
    pdfcategory,
    pdf
});

await newPDF.save()
.then(()=>console.log('PDF added'))
.catch((err)=>res.json(err))
})


router.get('/sendpdf' , async (req, res)  => {

    try{
   
  
        const pdfs= await pdfModel.find({});
        
        res.send(pdfs);
        res.redirect('/');

    }
    catch(err){
        res.status(500).send({ get_error: 'pdf error' })
    }

   
    
});


router.get('/emailsend', (req, res, next) => {
    "use strict";
    const nodemailer = require("nodemailer");
    
    // async..await is not allowed in global scope, must use a wrapper
    async function main() {
      // Generate test SMTP service account from ethereal.email
      // Only needed if you don't have a real mail account for testing
      let testAccount = await nodemailer.createTestAccount();
    
      // create reusable transporter object using the default SMTP transport
      let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: testAccount.user, // generated ethereal user
          pass: testAccount.pass,
          // generated ethereal password
        },
        tls:{
            rejectUnauthorized:false
        } 
      });
    
      // send mail with defined transport object
      let info = await transporter.sendMail({
        from: '"Fred Foo 👻" <foo@example.com>', // sender address
        to: "bar@example.com, baz@example.com", // list of receivers
        subject: "Hello ✔", // Subject line

        html: "<b>Hello world?</b>", // html body
      });
    
      if(info.messageId){
           res.send('Email Sent')
      }
      else {
         res.send('Error')
      }

      console.log("Message sent: %s", info.messageId);
      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    
      // Preview only available when sending through an Ethereal account
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
      // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    }
    
    main().catch(console.error);
})




module.exports = router


