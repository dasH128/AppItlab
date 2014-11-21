
module.exports = function (app, express, express_session, cookie_parser, path, swig, cons, body_parser){

	var allowCrossDomain = function(req, res, next) {
	    res.header('Access-Control-Allow-Origin', "*");
	    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	    res.header('Access-Control-Allow-Headers', 'Content-Type');
	    next();
	}

	app.use(express.static(path.join(__dirname, 'public')));
	//app.use(express.logger('dev'));
	//app.use(express.json());
	app.use(cookie_parser());
	
	app.use(
		express_session(
				{ 	secret : "appitlab", 
					cookie: { maxAge: 1800000 }
				}
			)
	);

	app.engine('.html', cons.swig);
  	app.set('view engine', 'html');
	app.set('views', __dirname + '/views');


	app.use(allowCrossDomain);
	app.use(body_parser({extended:false}));
	app.use(body_parser.json());
}