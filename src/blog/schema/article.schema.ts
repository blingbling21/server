import * as mongoose from 'mongoose'


export const ArticlesSchema = new mongoose.Schema({
  title:String,
  info:[{
    tag:String,
    value:String
  }],
  content:String
})