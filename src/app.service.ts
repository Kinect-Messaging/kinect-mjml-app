// import { Injectable } from '@nestjs/common';

// @Injectable()
// export class AppService {
//   getHello(): string {
//     return 'Hello World!';
//   }
// }
import { Injectable } from '@nestjs/common';
import * as mjml2html from 'mjml';

@Injectable()
export class AppService {
  convertMjmlToHtml(mjml: string, options: any = {}): string {
      const decode = (str: string):string => Buffer.from(str, 'base64').toString('binary');
      const encode = (str: string):string => Buffer.from(str, 'binary').toString('base64');
    const mjmlResponse = mjml2html(decode(mjml), options);
    const htmlResponse = encode(mjmlResponse.html)
//     console.log(htmlResponse)
    console.log(`Returning MJML response`);
    return htmlResponse;
  }
}