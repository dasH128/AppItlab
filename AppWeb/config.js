
module.exports = function (app, body_parser)
{
	app.use(body_parser({extended:false}));
	app.use(body_parser.json());
}