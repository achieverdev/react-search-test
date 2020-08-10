const express = require("express"),
  app = express(),
  port = process.env.PORT || 5000,
  cors = require("cors");
const axios = require('axios')
app.use(cors());

app.get('/users',  async function (req, res, next) {
  try {
      let result = await getUser();
      res.send(result)
    } catch (err) {
      console.log(err, 'error ');
      next(err);
    }
})

const getUser = async () => {
  try {
    const posts = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
    return ({ status: true, code: 200, message: 'Post Found', users: posts.data})
  } catch (error) {
    return ({ status: false, code: 404, message: 'Not Found', users: []})
}


}


app.listen(port, () => console.log("Backend server live on " + port));
