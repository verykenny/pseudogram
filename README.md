# Welcome to Pseudogram!

Pseudogram is a web application that allows users to post images and view/comment on the images posted by their friends. This project is inspired by [Instagram](https://instagram.com/), a website where individuals can upload their images, like and leave comments on other's images.
#### Live link: [Pseudogram](https://pseudogram2021.herokuapp.com/)
***

### Index
[Launch](#launch)

[Technologies](#technologies)

[Key Features](#key-features)

[Code Snippets](#code-snippets)

[Wiki Pages](#wiki-pages)

[Future Goals](#future-goals)

***
### Launch
- You can read more about the project using the wiki located at: https://github.com/verykenny/pseudogram/wiki
- To start a development environment:
  - Clone the repository at: https://github.com/verykenny/pseudogram
  - Install front-end locally using npm from the react-app directory:
    ```
    npm install
    npm start
    ```
  - Install back-end locally using pipenv "pipenv install" from the root directory:
    ```
    pipenv install
    pipenv run flask run
    ```
  - Navigate to the localhost port specified in config/index.js

***
### Technologies
#### Front End
- JavaScript
- React-Redux
- CSS styling
- [Favicon.io](https://favicon.io/) for favicon
- Heroku (Hosting)

#### Back End
- Flask
- PostgreSQL (Database)
- SQLAlchemy
- AJAX

***

### Key Features
- CSRUF library used to prevent csrf attacks
- Flask-Login used to authorize users when trying to view shelves and read/update their reviews
- Logged in users can create own image posts, like and comment on images posted by users they follow, and edit those comments and images that they post.
- Redux Store State is used to manage data on the front end
- Image hosting on AWS

***

### Wiki Pages
#### [API Documentation](https://github.com/verykenny/pseudogram/wiki/API-Route-Documentation)
#### [Wireframes](https://github.com/verykenny/pseudogram/wiki/WireFrames)
#### [Database Schema](https://github.com/verykenny/pseudogram/wiki/Database-Schema)
<img src="https://github.com/verykenny/pseudogram/blob/main/planning/pseudogram-database-schema.png" alt="pseudogram database schema" height="300">

#### [Feature List](https://github.com/verykenny/pseudogram/wiki/MVP-Feature-List)
#### [User Stories](https://github.com/verykenny/pseudogram/wiki/User-Stories)
***

### Future Goals
- User Profile Updates
- Messaging
- Image Tags
