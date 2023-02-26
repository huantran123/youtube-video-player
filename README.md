# YouTube Video Player App
>This project is a front-end application that imitates the video player page of YouTube. It allows users to watch videos, read their descriptions, and select from a list of related videos. The app also has a search feature that responds to every keyword the user types in to find corresponding videos.

## Built With
- React
- CSS
- YouTube API

## Getting Started
1. Clone the repo:

  ```
    git clone https://github.com/your-username/your-repo.git
  ```

2. Install dependencies:

  ```
    npm install
  ```
  
3. In the folder `/src/config/`, duplicate the file config.example.js and rename to config.js, grab the Youtube API key and place to the string

  ```
    var YOUTUBE_API_KEY = '';
  ```

4. Start the development server:
  ```
    npm start
  ```

5. Open http://localhost:3000 to view it in the browser.

## Usage
When you first open the app, you will see a video player and related videos on the right side of the page. The video player will display the first video from the related videos list by default. You can click on any of the related videos to play them in the video player.

To search for a specific video, enter a keyword in the search bar at the top of the page and press enter. The app will display a list of videos that match the keyword. Click on any of the videos to play them in the video player.

## Contributing
Contributions are welcome! If you find any bugs or have suggestions for new features, please create an issue or submit a pull request.

