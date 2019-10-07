const express = require('express');
const router = express.Router();

const infoPro = require('./infoPro-model');

//route for Document Information for Procedures
router.get('/', (req, res) => {
	infoPro
		.getInfoPro()
		.then(information => {
			for (let i = 0; i < information.length; i++) {
				if (information[i].request_value === '1') {
					information[i].request_value = 'Import Permit';
				} else if (information[i].request_value === '2') {
					information[i].request_value = 'Valid Invoice';
				} else if (information[i].request_value === '3') {
					information[i].request_value =
						'Simplified Certificate Of Origin (SCOO)';
				} else if (information[i].request_value === '4') {
					information[i].request_value = 'National ID Card - Passport';
				} else if (information[i].request_value === '5') {
					information[i].request_value = 'Yellow Fever Card';
				} else if (information[i].request_value === '6') {
					information[i].request_value = 'Certificate of Origin';
				} else if (information[i].request_value === '7') {
					information[i].request_value = 'Phytosanitary Certificate';
				} else if (information[i].request_value === '8') {
					information[i].request_value = 'Import Entry Declaration Form (SAD)';
				} else if (information[i].request_value === '9') {
					information[i].request_value = 'Fumigation Certificate';
				} else if (information[i].request_value === '10') {
					information[i].request_value = 'Bill of Lading';
				} 
			}
			res.status(200).json(information);
		})
		.catch(err => {
			res.status(500).json(err);
		});
});

module.exports = router;
