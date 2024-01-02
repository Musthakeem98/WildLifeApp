const express = require('express');
const bodyParser = require('body-parser');
const connectToMongoDB = require('./libs/connectToMongoDB');
const complaintsRouter = require('./routes/complaint_route');
const userRouter = require('./routes/user_routes')

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
connectToMongoDB().then(() => {
  app.use('/complaints', complaintsRouter);
  app.use('/user', userRouter)

  // Start the server
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}).catch((error) => {
  console.error('MongoDB connection error:', error);
});
