const express = require('express');
const router = express.Router();

const ReqAge = require('./mostReqAge-model');

router.get('/', (req, res) => {
	ReqAge.getReqAge()
		.then(reqAge => {
			for (let i = 0; i < reqAge.length; i++) {
				if (reqAge[i].request_value === '1') {
					reqAge[i].request_value =
						'Ministry of Agriculture Animal Industry & Fisheries (MAAIF)';
				} else if (reqAge[i].request_value === '2') {
					reqAge[i].request_value = 'Kenya Revenue Authority (KRA)';
				} else if (reqAge[i].request_value === '3') {
					reqAge[i].request_value =
						'COMESA Trade Information Desk Office (TIDO)';
				} else if (reqAge[i].request_value === '4') {
					reqAge[i].request_value =
						'Uganda National Bureau of Standards (UNBS)';
				} else if (reqAge[i].request_value === '5') {
					reqAge[i].request_value = 'PORT Health';
				} else if (reqAge[i].request_value === '6') {
					reqAge[i].request_value =
						'Kenya Plant Health Inspectorate Service (KEPHIS)';
				} else if (reqAge[i].request_value === '7') {
					reqAge[i].request_value = 'Uganda Revenue Authority (URA)';
				} else if (reqAge[i].request_value === '8') {
					reqAge[i].request_value = 'Kenya Bureau of Standards (KEBS)';
				} else if (reqAge[i].request_value === '9') {
					reqAge[i].request_value = 'National Biosafety Authority (NBA)';
				} else if (reqAge[i].request_value === '10') {
					reqAge[i].request_value =
						'Kenya National Chamber of Commerce & Industry (KNCCI)';
				} else if (reqAge[i].request_value === '11') {
					reqAge[i].request_value = 'Clearing Agent';
				} else if (reqAge[i].request_value === '15') {
					reqAge[i].request_value = 'Uganda Police Departments';
				} 
			}
			res.status(200).json(reqAge);
		})
		.catch(err => {
			res.status(500).json(err);
		});
});
// DB model for Requested Agency Information for Procedures
module.exports = router;
