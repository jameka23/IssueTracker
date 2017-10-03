# Issue Tracker
Issue Tracker is an application to allow developers at decision source to log their billable hours. It is currently being developed.
## Usage
Right now, it's just a simple RESTful api. To test it out, do the following:

First, clone the repository:
```
git clone "https://github.com/micahhauge/IssueTracker.git"
```
To test the api, cd to the directory containing the api.
```
cd IssueTracker/issue-tracker-app/issue-api/
```

Once here, assuming you have node installed you can run the server in your bash client with:
```
PORT=3000 npm start
```
Or, if you have nodemon:
```
nodemon
```
Now that you have the server running, go to http://localhost:3000/projects in your browser. You should see a listing of all the projects in the DB in the form of a JSON.

You can also test the CRUD functionality in bash using curl. Leave the server running and open up a new terminal. You can test the api here using the following:

Get Project Listing:
```
curl localhost:3000/projects
```

Create a project: (replace SOME_UNIQUE_ID with unique id)
```
 curl -XPOST http://localhost:3000/projects -d 'ProjectId={SOME_UNIQUE_ID}&ProjectClient=ClientName&ProjectName=ProjectName&ProjectDescription=ProjectDescription&ProjectCreatorId=82&ProjectManagerId=82&ProjectDisabled=false'
```
Get a particular project by id: (replace SOME_UNIQUE_ID with unique id)
```
curl -XGET http://localhost:3000/projects/{SOME_UNIQUE_ID}
```

More examples can be found in the IssueTracker/issue-tracker-app/issue-api/routes/projects.js file. I would recommend taking a look at this file, as it's the bulk of the api.
