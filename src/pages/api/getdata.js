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
		const query =
			"SELECT route, status, level, name, link, duration FROM Apprenticeships";
		const values = [];
		const [data] = await dbconnection.execute(query, values);
		dbconnection.end();

		res.status(200).json({ results: data });
	} catch (error) {
		res.status(500).json({ error: "error" });
	}

	// try {
	// 	// const query = "SELECT route FROM `webform`";
	// 	// const values = [];
	// 	// const [rows, fields] = await dbconnection.execute(query, values);
	// 	// dbconnection.end();

	// 	res.status(200).json({ results: data });
	// } catch (error) {res.status(500).json({error: "error"})}
}
