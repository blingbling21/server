import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { BlogController } from './blog.controller'
import { BlogService } from './blog.service'
import { ArticlesSchema } from './schema/article.schema'

@Module({
  imports:[MongooseModule.forFeature([{name:'Articles',schema:ArticlesSchema,collection:'Articles'}])],
  controllers:[BlogController],
  providers:[BlogService]
})
export class BlogModule {}