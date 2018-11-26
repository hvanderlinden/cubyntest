'use strict';
module.exports = function(app) {
	var parcels = require('../controllers/parcelController');

	// parcel Routes
	app.route('/parcels')
	.get(parcels.list_all_parcels)
	.post(parcels.create_a_parcel);

	app.route('/parcels/:parcelId')
	.get(parcels.read_a_parcel)
	.put(parcels.update_a_parcel)
	.delete(parcels.delete_a_parcel);
	
	app.route('/token').get(parcels.get_token);
};