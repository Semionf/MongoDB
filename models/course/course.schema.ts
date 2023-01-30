import mongoose from "mongoose";

//schema to define  the shape of document in collection
//collection ~ table
//document ~ row
//SQL create table

export const courseSchema = new mongoose.Schema({
  title: String,
  description: String,
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now },
  isPublish: Boolean,
});
