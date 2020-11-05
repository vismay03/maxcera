
const mongoose = require('mongoose');

const pdfSchema = new mongoose.Schema ({
    
    pdfcategory: String,
    pdf: {}
},{
    collection: "PDFs"
});
const pdfModel = mongoose.model('PDFs', pdfSchema);

module.exports = pdfModel;