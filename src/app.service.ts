import { Injectable } from '@nestjs/common';
const fs = require('fs')

@Injectable()
export class AppService {
  getHello(): string {
    try {
      const res = fs.readFileSync("C:\\Users\\18023\\Documents\\typora文档\\css.md")
      console.log(res.toString())
    } catch (error) {
      console.log(error)
    }
    return 'Hello World!';
  }
}
