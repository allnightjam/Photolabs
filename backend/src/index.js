const PORT = process.env.PORT || 8001;
const ENV = require("./environment");

const app = require("./application")(ENV);
const server = require("http").Server(app);

function makeApiRequests() {
  fetch('http://localhost:8001/api/photos')
    .then(response => response.json())
    .then(photosData => {
      console.log(photosData);
    })
    .catch(error => {
      console.error('Error:', error);
    });

  fetch('http://localhost:8001/api/topics')
    .then(response => response.json())
    .then(topicsData => {
      console.log(topicsData);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  
  const topidId = 1;
  fetch('http://localhost:8001/api/topics/photos/:topic_id')
    .then(response => response.json())
    .then(photosByTopicData => {
      console.log(photosByTopicData);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT} in ${ENV} mode.`);
});
