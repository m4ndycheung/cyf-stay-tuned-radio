<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a name="readme-top"></a>

<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<br />
<div align="center">

  <h3 align="center">Stay Tuned Radio</h3>

  <p align="center">
    An awesome a music-sharing platform, designed to foster community engagement and discovery.
    <br />
    <a href="https://github.com/m4ndycheung/cyf-stay-tuned-radio/tree/main"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://stay-tuned-radio-frontend.onrender.com/">View Demo</a>
    ·
    <a href="https://github.com/m4ndycheung/cyf-stay-tuned-radio/issues">Report Bug</a>
    ·
    <a href="https://github.com/m4ndycheung/cyf-stay-tuned-radio/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Product Name Screen Shot][product-screenshot]](https://stay-tuned-radio-frontend.onrender.com/)

We like to share our music and we like to stream coding music while we work. But we don’t have our own radio station to share and discover music that resonates with the community.

Introducing our app, a music-sharing platform integrated with Spotify, designed to foster community engagement and discovery. Each day, a selection of songs from our extensive database is randomly curated and added to a Spotify playlist, accessible via a widget embedded within our app. Users can return daily to explore fresh tracks recommended by fellow community members.

While our app is publicly available, exclusive access to certain features, such as song submissions, is reserved for community members. Authentication is seamlessly facilitated through Slack, leveraging the Sign in with Slack feature. Team members are authenticated based on their membership within the designated Slack workspace. Upon authentication, users gain access to the song submission feature, where they can contribute to expanding our music database by providing song details and URL.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Christina Mifsud - [Github](https://github.com/christina-mifsud)
Irianni Munoz - [Github](https://github.com/munozirianni1988)
Mandy Cheung - [Github](https://github.com/m4ndycheung)
Man Sang Sin - [Github](https://github.com/ManSangSin)

Project Link: [https://github.com/m4ndycheung/cyf-stay-tuned-radio](https://github.com/m4ndycheung/cyf-stay-tuned-radio)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [![React][React.js]][React-url]
- [![Bootstrap][Bootstrap.com]][Bootstrap-url]
- [![Postgres][Postgres]][Postgres-url]
- [![Node][Node.js]][Node-url]

## Other technology used

- Slack API
  The Slack API enables secure authentication, verifying users' team membership before granting access to additional features.
- Spotify API
  The Spotify API facilitates seamless integration, allowing our app to dynamically generate and update playlists based on community submissions.
- JWT
  We employ JSON Web Tokens (JWT) to facilitate secure transmission of user data between frontend and backend components. Following industry best practices, JWTs are issued upon user authentication, enabling subsequent requests without exposing sensitive tokens

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these not-so-simple steps.

### Prerequisites

- npm
  ```sh
  npm install npm@latest -g
  ```
- Install ngrok <link>
- Create a Slack app <link>
- Create a Spotify app <link>
- Create a Postgresql database

### Installation

1.  Clone the repo
    ```sh
    git clone https://github.com/m4ndycheung/cyf-stay-tuned-radio.git
    ```
2.  Install NPM packages and dependencies

    ```sh
    npm install
    ```

3.  Create .env variable file in client folder
    ```sh
    VITE_SERVER_URL=http://localhost:3001
    VITE_FRONTEND_URL=http://localhost:5173
    ```
4.  Create .env variable file in server folder

    ```sh
     # spotify credentials
     SPOTIFY_CLIENT_ID=
     SPOTIFY_CLIENT_SECRET=
     SPOTIFY_REDIRECT_URI=
     SPOTIFY_PLAYLIST_ID=

     # slack credentials
     SLACK_CLIENT_ID=
     SLACK_CLIENT_SECRET=
     SLACK_REDIRECT_URI=
     SLACK_ADMIN_USER_ID=
     SLACK_WORKSPACE_NAME=

     # database credentials
     DB_USER=
     DB_PASSWORD=
     DB_HOST=
     DB_PORT=
     DB_NAME=

     # jwt variables
     JWT_SECRET=

     # addresses
     SERVER_URL=http://localhost:3001
     FRONTEND_URL=http://localhost:5173
    ```

5.  Get client IDs, secrets and user IDs

    ```sh
    SPOTIFY_CLIENT_ID and SECRET
    ```

    In order to get these, go to your Spotify app and copy them from here.
    More details here: https://developer.spotify.com/

    ```sh
    SPOTIFY_PLAYLIST_ID
    ```

    Create a playlist on Spotify and paste the playlist id here

    ```sh
    SLACK_CLIENT_ID and SECRET
    ```

    Go to your Slack App and copy them here.
    More details here: https://api.slack.com/authentication/sign-in-with-slack.

    ```sh
    SLACK_ADMIN_USER_ID
    ```

    To get this you need to login to your Slack workspace, click on the account you intend to make the admin. Click three dots and copy the member ID.

    ```sh
    SLACK_WORKSPACE_NAME
    ```

6.  Seed file is available in the data folder. This will create 2 tables:
    `sh
tracks
refresh_tokens_table
`
    The tracks table stores songs and information about the artists as well as the unique track id and the username of the user who submitted it.

tracks table:
It has 6 columns consisting of:

- id: which is automatically generated when a new song is added
- song_name: add the title of your chosen song
- artist_name: add the name of the artist of your chosen song
- cyf_slack_username (optional): add your slack username
- song_genre (optional): add the gene of your chosen song
- spotify_song_id: on Spotify, click on your chosen song, and from the browser copy the highlighted bit from the example below:
  https://open.spotify.com/track/**5fHXbmrx8mfOT1wfSa1Nc8**

refresh tokens table:
The refresh tokens table stores the refresh token provided by spotify which can then be exchanged for a new access token.
It has 2 columns consisting of:

- id: which is automatically generated when a refresh token is added
- refresh_token: refresh token provided by Spotify.

7.  Told you they weren't simple.

### On First Time Run

### Running the project locally

To start:

1. Go to Client folder and enter in terminal:
   ```sh
    npm run dev
   ```
2. Go to Server folder and enter:
   ```sh
   npm start
   ```
3. Start ngrok:
   ```sh
   ngrok http 3001
   ```
4. Copy the forwarding URL from ngrok CLI, it’ll look something like this: https://2e73-94-119-32-12.ngrok-free.app
5. Append /slack/oauth_redirect to this URL i.e. https://2e73-94-119-32-12.ngrok-free.app/**slack/oauth_redirect**
6. Paste into env file SLACK_REDIRECT_URI
7. Go to https://api.slack.com/ and go to Oauth and Permissions tab and paste into Redirect URLs.
8. Go to http://localhost:3001 to access the backend.
9. Go to http://localhost:5173 to access the frontend.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

How to update the playlist
There’s a button for this sitting on the front page

How to add songs to the database
User needs to be logged in for the add songs form to be shown

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

- [CodeYourFuture](https://codeyourfuture.io/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com
