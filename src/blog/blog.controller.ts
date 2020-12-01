import { Controller, Get, Query } from '@nestjs/common'
import { BlogService } from './blog.service'

@Controller('blog')
export class BlogController {
  constructor(private readonly blogService: BlogService){}

  @Get()
  getArticle(@Query() query){
    console.log(query)
    return this.blogService.articlesInfo(query)
  }

}