'use strict';


module.exports = function (app) {
  app.on('started', function () {
    var myAPI = app.models.MyAPI;
    myAPI.postStuff(null, 'my new stuff', function (err, data) {
      console.log(data)
      myAPI.deleteStuff(data.id,function(err,data){
        console.log(data)
        myAPI.getStuff(function (err, data) {
          console.log(data)
        });
      });
    });

    // setInterval(function () {
    //   console.log('iam here!');
    // }, 3000);
  })
};
