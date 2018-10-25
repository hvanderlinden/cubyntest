'use strict';
module.exports = function(app) {
	var parcels = require('../controllers/parcelController');

	// parcel Routes
	app.route('/parcels')
	.get(parcel.list_all_parcels)
	.post(parcel.create_a_parcel);

	app.route('/parcels/:parcelId')
	.get(parcel.read_a_parcel)
	.put(parcel.update_a_parcel)
	.delete(parcel.delete_a_parcel);s
};