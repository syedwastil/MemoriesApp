# Digital Stories

The project "Digital Story" is a web application that allows users to create and share stories in various formats, including text, image, and video. The application has a front end built using React with Redux, and a back end consisting of a RESTful API and a database.

## Features
-  `Registration`: Registration requires the user to enter their name, a unique username, a correctly formatted email address, and an optional profile picture.
-  `Login`: User Has to log in to create and view stories. If the user attempts to navigate to another page by entering the address in the address bar, they will be asked to log in before being directed to the requested page.
-   `Authoring Story`: Create a new story for authoring. Author a story with text, image, and video components.
- `Persistent Stories`:  Stories will be persistent for later access to preview, edit, and delete. 
- `Story View`: Stories will be displayed in either a list format, one below the other, or a grid format, based on the user's choice
- `Story Formatting`: Users will be able to style their stories with colors and fonts, as well as position and order them.
- `Private Stries`: All stories will be private by default, but users can choose to make them public. If a story is made public, it will be visible to all users
- `Story Vote`: Users can upvote/downvote stories, view the number of upvotes/downvotes a story has received, and what percentage of total users have reacted to a particular story.
- `Story Comment`:Users can comment on stories, and the trending stories feature is available at the /trending route.
- `Engagement`: In “engagement,” a user can see which stories they have reacted to and which of their stories other users have reacted to.
- `Trending`: Trending stories feature should be available at the /trending route. Trending stories include the most upvoted stories from all users.
- `Leaderboard`: The leaderboard is available at the /leaderboard route and shows each user's name, picture, total number of stories posted, and total upvotes received from all stories combined.
- `Sortable Stories`: Stories are sortable by creation timestamp, upvotes, and downvotes for each user and all users.
- `Dark/Bright Mode`: User can switch between dark and bright mode using a button in navbar.


## Getting Started

### Installation
To install the app, follow these steps:
1. Clone the repository:
```bash
    git clone https://github.com/syedwastil/MemoriesApp
```
2. Install the dependencies:
Digital Stories requires [Node.js](https://nodejs.org/) v10+ to run.
    1. Open terminal for `server` and run:
        ```bash
            cd memoriesApp/server
            npm install
        ```
    2. One another terminal for `client` and run:
        ```bash
            cd memoriesApp/client
            npm install
        ```

### Running the App
We will run server app and client app seperately.
1. For `Server` app:
    ```bash
        npm start
    ```
2. For `Client` app:
    ```bash
        npm run dev
    ```

This will start the server and the client, and open the app in your default browser.

## Architecture
### Overview
The app is built using the MERN stack:
- MongoDB for the database
- Express.js for the server
- React for the client
- Redux for client side store management
- Node.js as the runtime environment


### ERD
Entity relationship diagram of project is given as:
![This is an image](docs/erd.png)

 the ERD may include the following entities:

- `User`: This entity will store information about the user, including their name, email, username, and password. Each user can have multiple stories.
- `Story`: This entity will store information about each story, including the author, the story content (text, image, video), and the style information (colors, fonts, etc.). Each story belongs to a single user and can have multiple comments and reactions (upvotes/downvotes).
- `Comment`: This entity will store information about each comment, including the author, the comment content, and the timestamp. Each comment belongs to a single story.
- `Vote`: This entity will store information about each vote, including the author, the vote value(upvote/downvote), and the timestamp. Each vote belongs to a single story and user.
The ERD will show the relationships between these entities, such as:

The ERD will show the relationships between these entities, such as:
- One-to-many relationship between `User and Story`: Each user can have multiple stories, but each story belongs to a single user.
- One-to-many relationship between `Story and Comment`: Each story can have multiple comments, but each comment belongs to a single story.
- One-to-many relationship between `Story and Vote`: Each story can have multiple votes, but each vote belongs to a single comment.

### Backend

The backend of the app is built using Express.js and Node.js. Here are the main components:
- `index.js`: The main server file that sets up the Express.js app and connects to the database. All third party middlewares are also defined here.
- `routes/auth.js,user.js,story.js,comment.js,vote.js`: Defines the API endpoints for CRUD operations on each entity separately.
- `controllers/auth.js,user.js,story.js,comment.js,vote.js`: Implements the logic for CRUD, aggregate and auth operations on each entity separately.
- `models/user.js,story.js,comment.js,vote.js`: Defines the schema for the entities in the database.

### Frontend
The frontend of the app is built using React with redux. Frontend code is mainly divided into state, scenes, components and widgets.
#### 1. State:
- `state/index.js` contain code of redux state in a single file. Redux toolkit is used to optimze writing the code.
#### 2. Scenes:
- `scenes/loginPage.jsx` contain forms for login and registration page both.
Login Page
![Login](docs/login.png)
Register Page
![Register](docs/register.png)

- `scenes/homePage.jsx` After login user will be redirected to home page which display info about user logged in, navbar, stories posted, sort and grid filter pannels.\
Home Page [Light Mode]
- ![homepage](docs/home%20W.png)

Home Page [Dark Mode]
- ![homepage](docs/home%20B.png)

- `scenes/trendingPage.jsx` Display all stories sorted by upVotes.\
Trending Page [Light Mode]
- ![trendingPage](docs/trending%20W.png)
Trending Page [Dark Mode]
- ![trendingPage](docs/trending%20B.png)
- `scenes/Leaderboard.jsx` Display top users with highest upVotes and their stats.\
Leaderboard Page [Light Mode]
- ![leaderboard](docs/leaderboard%20w.png)
Leaderboard Page [Dark Mode]
- ![leaderboard](docs/leaderboard%20b.png)
- `scenes/profilePage.jsx` contain all stories posted by user whose profile is being visited.
- ![profilePage](docs/home%20B.png)
- `scenes/pageNotFound.jsx` Display 404 page.
- ![404 Page](docs/404.png)

#### 2. Widgets:
- `components/postWidget.jsx` Render component for displaying a story.
 ![Display Story](docs/story.png)
- `components/createPostWidget.jsx` Render component for creating a story.
 ![Create Story](docs/create.png)
- `components/editPostWidget.jsx` Render component for edit a posted story.\
 ![Edit Story](docs/edit.png)
- `components/sortWidget.jsx` Render component containing sort buttons.\
 ![Sort Story](docs/sort.png)
- `components/commentWidget.jsx` Render component which display comments.\
 ![Comment](docs/comment.PNG)


## Tech

Digital Stories uses a number of open source projects to work properly:

- [ReactJS] - HTML enhanced for web apps!
- [formik] - awesome web-based text editor
- [jodit-react] - awesome web-based text editor
- [node-html-parser] - awesome web-based text editor
- [react-redux] - awesome web-based text editor
- [yup] - awesome web-based text editor
- [node.js] - evented I/O for the backend
- [Express] - fast node.js network app framework 
- [body-parser] - the streaming build system
- [cookie-parser] - the streaming build system
- [dotenv] - the streaming build system
- [express-jwt] - the streaming build system
- [bcrypt] - the streaming build system
- [jsonwebtoken] - the streaming build system
- [mongoose] - the streaming build system
