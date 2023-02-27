import { BaseServerMessageHelper } from "@presentation/helpers/messages/server-messages.helper";

export class InfoMessages extends BaseServerMessageHelper {
  static requestMultipleChoises =
    "The Request has more than one possible responses.";
  static requestWithSuccess = "The Request has succeeded.";
  static signedInWithSuccess(username: string): string {
    return `Our user ${username.toUpperCase()} signed in to the website successfully.`;
  }
  static newPostWithSuccess(
    title: string,
    authorId: string,
    text: string
  ): string {
    return `New Post created successfully : 
    title : ${title},
    author : ${authorId},
    text : ${text},
  `;
  }
  static newUsertWithSuccess(email: string, username: string): string {
    return `New User created successfully : 
    email : ${email},
    username : ${username},
  `;
  }
}
