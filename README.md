# Installation guide
Make sure node.js with npm is installed on your device. If not install from https://nodejs.org/en/download.

Clone this project to your device.

Go to https://www.omdbapi.com/apikey.aspx and acquire a api key. After getting the key, 
create a .env file in root of your local clone of this project. 

In .env create two env-variables "REACT_APP_OMDB_API_URL" and "REACT_APP_OMDB_API_KEY". 
Set REACT_APP_OMDB_API_URL to "https://www.omdbapi.com?apikey=". Also initialize REACT_APP_OMDB_API_KEY with your Key. 

In terminal run the command "npm start"

Credits JavaScript Mastery "https://youtu.be/b9eMGE7QtTk"