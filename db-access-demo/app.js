var Sequelize = require ('sequelize');
var bcrpyt = require ('bcryptjs');

const conn = new Sequelize('issueTrackerDB', 'ApolloAdmin', 'IssueTracker2017', {
    host: 'mtsu-4700-2017.database.windows.net',
    dialect: 'mssql',
    driver: 'tedious',
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    },
    port: 1433,
    dialectOptions: {
      encrypt: true
    }
});

//import the database models
const Projects = conn.import(__dirname + '/models/IssueTracker_Projects.js')
const Users = conn.import(__dirname + '/models/IssueTracker_Users.js')
 // authenticate the connection
conn
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
});



Projects
 /* .create({
    ProjectId: 222,
    ProjectClient: 'ApolloSolutions',
    ProjectName: 'Issuetracker2',
    ProjectDescription: 'A new version of an old standard.',
    ProjectCreatorId: 82,
    ProjectManagerId: 82,
    ProjectCreationDate: new Date().toUTCString(),
    ProjectDisabled: '0'
  })
  .then(function(err, newProj) {
    if(err) {
      console.log('There was an error completing the insertion: ', err);
    }
    else {
      console.log(`New Project ${newProj.ProjectName}, with id ${newProj.id} has been created.`);
    }
});*/
    // query for a project with the client 'ApolloSolutions'
  .findOne({
    where: {
      ProjectClient: 'ApolloSolutions'
    }
  })
  .then(newProj => {
    console.log(`Found Project: ${newProj.ProjectName}`);
});
