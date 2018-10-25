var Parcel = require('../model/parcelModel.js');

exports.list_all_parcels = function(req, res) {
  Parcel.getAllParcel(function(err, parcel) {

    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', parcel);
    res.send(parcel);
  });
};



exports.create_a_parcel = function(req, res) {
  var new_parcel = new Parcel(req.body);

  //handles null error 
   if(!new_parcel.parcel || !new_parcel.status){

            res.status(400).send({ error:true, message: 'Please provide parcel/status' });

        }
else{
  
  Parcel.createParcel(new_parcel, function(err, parcel) {
    
    if (err)
      res.send(err);
    res.json(parcel);
  });
}
};


exports.read_a_parcel = function(req, res) {
  Parcel.getParcelById(req.params.parcelId, function(err, parcel) {
    if (err)
      res.send(err);
    res.json(parcel);
  });
};


exports.update_a_parcel = function(req, res) {
  Parcel.updateById(req.params.parcelId, new Parcel(req.body), function(err, parcel) {
    if (err)
      res.send(err);
    res.json(parcel);
  });
};


exports.delete_a_parcel = function(req, res) {
  Parcel.remove( req.params.parcelId, function(err, parcel) {
    if (err)
      res.send(err);
    res.json({ message: 'Parcel successfully deleted' });
  });
};

exports.estimate_a_parcel = function(req, res) {
	  Parcel.estimateById(req.params.parcelId, function(err, parcel) {
	    if (err)
	      res.send(err);
	    res.json(parcel);
	  });
	};