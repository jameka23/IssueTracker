var express = require('express');
var router = express.Router();
var Sequelize = require ('sequelize');
const config = require('../config/database');
module.exports = router;

/* importing all of the db models for worklogs/projects/issues */
const Worklogs = config.connect.import('../models/IssueTracker_Worklogs.js');
const WorklogsLock = config.connect.import('../models/IssueTracker_WorklogsLock.js');
const Issues = config.connect.import('../models/IssueTracker_Issues.js');
const Projects = config.connect.import('../models/IssueTracker_Projects.js')




/* render from worklogs.ejs */
router.get('/', function(req, res, next) {
    res.render('worklogs');
});

//GET Projects
router.get('/projects.json', (req, res, next) => {
    Projects.findAll()
    .then(projects => {
    console.log(`Found Project: ${projects}`);
res.send(projects);
});
});

//GET Issues
router.get('/issues.json', (req, res, next) => {
    Issues.findAll()
    .then(issues => {
    if(!issues.Disabled)
issues.Status = 'Active';
else{
    issue.Status = 'Inactive';
}
console.log(`Found Issues: ${issues}`);
res.send(issues);
});
});

//GET Worklogs
router.get()

//POST Worklogs
router.post('/worklogs.json', (req, res, next) => {
    //must figure out

)};
