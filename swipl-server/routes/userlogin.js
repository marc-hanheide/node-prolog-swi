
/*
 * POST login
 */

exports.list = function(req, res){
  console.log(req.body);
  var m = swipl.module("myown");
  var ret = '';
  r = m.assert(req.body.email);
  q = m.open_query("red", ["Result"]);
  r = q.next_solution();
  while( r ) {
	ret = ret + '<tr><td>' + r.Result+'</td></tr>';
	r = q.next_solution();
  }
  q.close();
	console.log(ret);
  res.type('html');
  res.end('<table>'+ret+'</table>');
};
