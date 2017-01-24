module.exports = function(server) {
  var APIConnector;
  APIConnector = server.datasources.APIDataSource.connector;
  return APIConnector.observe('after execute', function(ctx, next) {

    // the headers of the response: ctx.res.headers
    // the code of the response: ctx.res.body.code
    // the method of our request: ctx.req.method


    // if (ctx.req.method === 'POST') {
    //   ctx.res.body.location = ctx.res.headers.location;
    //   return ctx.end(null, ctx, ctx.res.body); //(err, ctx, result)
    // } else {
    //   return next();
    // }



    // var err, ref, ref1;
    // if (/^[5]/.test((ref = ctx.res) != null ? (ref1 = ref.body) != null ? ref1.code : void 0 : void 0)) {
    //   err = new Error('Error from the API');
    //   err.status = 403;
    //   err.message = ctx.res.body.message;
    //   return ctx.end(err, ctx, ctx.res.body);
    // } else {
    //   return next();
    // }

    return next();
  });
};
