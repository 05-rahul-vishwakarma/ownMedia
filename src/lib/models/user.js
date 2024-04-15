import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  clerkId: {
    type: String,
    required: true,
    unique: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  profilePhoto: {
    type: String,
    required: true,
  },
  posts: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: "post" }],
    default: [],
  },
  savedposts: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: "post" }],
    default: [],
  },
  likeposts: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: "post" }],
    default: [],
  },
  followers: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: "user" }],
    default: [],
  },
  followeing: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: "user" }],
    default: [],
  },
  createdAt:{
    type:Date,
    default:Data.now,
  }
});

const User = mongoose.models.User || mongoose.model('User',UserSchema);

export default  User;