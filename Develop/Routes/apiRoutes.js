  
const notesData = require('../data/notesData');

module.exports = (app) => {

    app.get('/api/notes', (req, res) => res.json(notesData));

    app.post('/api/notes', (req, res) => {
        notesData.push(req.body);
    });

    app.post('/api/clear', (req, res) => {
        notesData.length = 0;

        res.json({ ok: true });
    });
};