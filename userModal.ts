import mongoose, { Document, Schema } from 'mongoose';

// Define the Comment interface
interface IComment extends Document {
  id: number;
  content: string;
  user: {
    image: string;
    name: string;
    username: string;
  };
  replies: IReply[];
}

// Define the Reply interface
interface IReply extends Document {
  content: string;
  replyingTo: string;
  user: {
    image: string;
    name: string;
    username: string;
  };
}

// Define the ProductRequest interface
interface IProductRequest extends Document {
  id: number;
  title: string;
  category: string;
  upvotes: number;
  status: string;
  description: string;
  comments: IComment[];
}

// Define the User interface
interface IUser extends Document {
  currentUser: {
    image: string;
    name: string;
    username: string;
  };
  productRequests: IProductRequest[];
}

// Define the Comment schema
const commentSchema = new Schema<IComment>({
  id: Number,
  content: String,
  user: {
    image: String,
    name: String,
    username: String,
  },
  replies: [{
    content: String,
    replyingTo: String,
    user: {
      image: String,
      name: String,
      username: String,
    },
  }],
});

// Define the Product Request schema
const productRequestSchema = new Schema<IProductRequest>({
  id: Number,
  title: String,
  category: String,
  upvotes: Number,
  status: String,
  description: String,
  comments: [commentSchema],
});

// Define the User schema
const userSchema = new Schema<IUser>({
  currentUser: {
    image: String,
    name: String,
    username: String,
  },
  productRequests: [productRequestSchema],
});

// Create and export the User model
export default mongoose.model<IUser>('User', userSchema);


