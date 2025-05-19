export default async function handler(req, res) {

    const data = require('../src/data/db.json');

    res.status(200).json(data);
}