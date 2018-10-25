var sql = require('../db.js');

//Parcel object constructor
var Parcel = function(parcel){
    this.parcel = parcel.parcel;
    this.type = parcel.type;
    this.weight = parcel.weight;
    this.volumn = parcel.volume;
    this.recipient = parcel.recipient;
    this.address = parcel.address;
    this.city = parcel.city;
    this.zipcode = parcel.zipcode;
};

Parcel.createParcel = function createParcel(newParcel, result) {    
        sql.query("INSERT INTO parcels set ?", newParcel, function (err, res) {
                
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    console.log(res.insertId);
                    result(null, res.insertId);
                }
            });           
};

Parcel.getParcelById = function getParcel(parcelId, result) {
        sql.query("Select parcel from parcels where id = ? ", parcelId, function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};

Parcel.estimateById = function createUser(parcelId, result) {
    sql.query("Select * from parcels where id = ? ", parcelId, function (err, res) {             
            if(err) {
                console.log("error: ", err);
                result(err, null);
            }
            else{
            	console.log(res);
                result(null, res);
          
            }
        });   
};

Parcel.getAllParcel = function getAllParcel(result) {
        sql.query("Select * from parcels", function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('parcels : ', res);  

                 result(null, res);
                }
            });   
};

Parcel.updateById = function(id, parcel, result){
  sql.query("UPDATE parcels SET parcel = ? WHERE id = ?", [parcel.parcel, id], function (err, res) {
          if(err) {
              console.log("error: ", err);
                result(null, err);
             }
           else{   
             result(null, res);
                }
            }); 
};

Parcel.remove = function(id, result){
     sql.query("DELETE FROM parcels WHERE id = ?", [id], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
               
                 result(null, res);
                }
            }); 
};

module.exports= Parcel;