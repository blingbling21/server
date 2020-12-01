import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'

@Injectable()
export class BlogService {
  constructor(@InjectModel('Articles') private readonly articlesModel){}

  async articlesInfo(query){
    return await this.articlesModel.find(query)
  }

}