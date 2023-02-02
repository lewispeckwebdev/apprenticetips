import mysql from "mysql2/promise";

export default async function handler(req, res) {
	const dbconnection = await mysql.createConnection({
		host: "ap-sp-proj.chwmwhavjzga.eu-west-2.rds.amazonaws.com",
		port: 3306,
		user: "admin",
		password: "i5PSCv6LZjuHtyqqFXfS",
		database: "webform",
		socketPath: "",
	});

	try {
		const query = `INSERT INTO Contact (firstname, surname, email, phone, previous_level, agriculture, business, care, catering, construction, creative, digital, education, engineering, hair, health, legal, protective, sales, transport, comments, assigned_to) VALUES ("${req.body.firstname}", "${req.body.surname}", "${req.body.email}", "${req.body.phone}", "${req.body.previous_level}", "${req.body.agriculture}", "${req.body.business}", "${req.body.care}", "${req.body.catering}", "${req.body.construction}", "${req.body.creative}", "${req.body.digital}", "${req.body.education}", "${req.body.engineering}", "${req.body.hair}", "${req.body.health}", "${req.body.legal}", "${req.body.protective}", "${req.body.sales}", "${req.body.transport}", "${req.body.comments}", "${req.body.assigned_to}")`;

		dbconnection.query(query);
		dbconnection.end();
		res.redirect("http://localhost:3000/components/submission");
	} catch (error) {
		res.status(500).json({ error: error });
	}
	//firstname, surname, email, phone, previous_level, agriculture, business, care, catering, construction, creative, digital, education, engineering, hair, health, legal, protective, sales, transport, comments, assigned_to
}
