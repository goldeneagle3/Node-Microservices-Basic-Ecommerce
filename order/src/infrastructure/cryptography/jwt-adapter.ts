import jwt from "jsonwebtoken";

import { IDecrypter } from "@dal/protocols/cryptography/decrypter.interface";
import { IEncrypter } from "@dal/protocols/cryptography/encrypter.interface";

export class JwtAdapter implements IEncrypter, IDecrypter {
  constructor(private readonly secretKey: string) {}

  async encrypt(text: string): Promise<string> {
    return jwt.sign({ id: text }, this.secretKey) as any;
  }

  async decrypt(text: string): Promise<string> {
    return jwt.verify(text, this.secretKey) as any;
  }
}
