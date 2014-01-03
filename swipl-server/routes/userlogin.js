
/*
 * POST login
 */

exports.list = function(req, res){
  console.log(req.body);
  req.session.lastentry=req.body.email;
  res.end();
};
