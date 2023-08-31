import mongoose from 'mongoose';
const commentSchema = new mongoose.Schema({
  id: Number,
  content: String,
  user: {
    image: String,
    name: String,
    username: String,
  },
  replies: [
    {
      content: String,
      replyingTo: String,
      user: {
        image: String,
        name: String,
        username: String,
      },
    },
  ],
});

// Define the Product Request schema
const productRequestSchema = new mongoose.Schema({
  id: Number,
  title: String,
  category: String,
  upvotes: Number,
  status: String,
  description: String,
  comments: [commentSchema],
});

// Define the User schema
const userSchema = new mongoose.Schema({
  currentUser: {
    image: String,
    name: String,
    username: String,
  },
  productRequests: [productRequestSchema],
});

// Create and export the User model
export default mongoose.model('User', userSchema);
