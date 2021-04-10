const express = require('express');
const fs = require('fs');
const path = require('path');


module.exports = app => {


    fs.readFile("./db/db.json","utf8", (err, data) => {

        if (err) throw err;

        var noteList = JSON.parse(data);

        app.get("/api/notes", function(req, res) {
            res.json(noteList);
        });

        app.post("/api/notes", function(req, res) {
            let noteNew = req.body;
            noteList.push(noteNew);
            handleUpdate();
            res.json(noteNew);
        });

        app.get("/api/notes/:id", function(req,res) {
            res.json(noteList[req.params.id]);
        });

        function handleUpdate() {
            fs.writeFile("./db/db.json",JSON.stringify(noteList,'\t'),err => {
                if (err) throw err;
                return true;
            });
        }
      });
    }

