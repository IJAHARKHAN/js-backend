require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

// https://api.github.com/users/ijaharkhan
const gitUsers = {
    "login": "IJAHARKHAN",
    "id": 31922699,
    "node_id": "MDQ6VXNlcjMxOTIyNjk5",
    "avatar_url": "https://avatars.githubusercontent.com/u/31922699?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/IJAHARKHAN",
    "html_url": "https://github.com/IJAHARKHAN",
    "followers_url": "https://api.github.com/users/IJAHARKHAN/followers",
    "following_url": "https://api.github.com/users/IJAHARKHAN/following{/other_user}",
    "gists_url": "https://api.github.com/users/IJAHARKHAN/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/IJAHARKHAN/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/IJAHARKHAN/subscriptions",
    "organizations_url": "https://api.github.com/users/IJAHARKHAN/orgs",
    "repos_url": "https://api.github.com/users/IJAHARKHAN/repos",
    "events_url": "https://api.github.com/users/IJAHARKHAN/events{/privacy}",
    "received_events_url": "https://api.github.com/users/IJAHARKHAN/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "Ijaharuddin Khan",
    "company": null,
    "blog": "https://ijaharkhan.github.io/portfolio/",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": "I am Front-End Web Developer",
    "twitter_username": "Ijaharuddinkhan",
    "public_repos": 15,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2017-09-13T10:56:36Z",
    "updated_at": "2024-11-03T10:43:31Z"
  }

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/heading', (req, res) =>{
   res.send("<h1>Hello Heading</h1>")
})

app.get('/git-users', (req, res) =>{
  res.send(gitUsers)
})


app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${port}`)
})