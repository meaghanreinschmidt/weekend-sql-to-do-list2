const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// Return our array of tasks when making
// a GET request to /task
router.get('/', (req, res) => {
    console.log('In GET /task');
    // The query to run
    const queryText = 'SELECT * FROM "task" ORDER BY "id";';
    pool.query(queryText).then((result) => {
        console.log('SELECT SUCCESS!', result);
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error in GET /task', error);
        res.sendStatus(500);
    });
});

router.post('/', (req, res) => {
    const task = req.body;
    const queryText = `INSERT INTO "task" ("task")
                       VALUES ($1);`
    pool.query(queryText, [task.task])
        .then((results) => {
            console.log(results);
            res.send(results);
        })
        .catch((error) => {
            console.log('Error in the POST /task', error);
            res.sendStatus(500);
        });
});

router.put('/:id', (req, res) => {
    const taskId = req.params.id;
    const queryText = `UPDATE "task"
                       SET "complete" = 1
                       WHERE "id" = $1;`;
    pool.query(queryText, [taskId]).then((results) => {
        res.sendStatus(200);
    }).catch((error) => {
        res.sendStatus(500);
    })
});

router.delete('/:id', (req, res) => {
    const queryText = 'DELETE FROM "task" WHERE "id" = $1;';
    pool.query(queryText, [req.params.id]).then((results) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    })
});

// Allows server.js to require our router
module.exports = router;