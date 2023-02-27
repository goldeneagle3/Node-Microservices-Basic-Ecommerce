import bcrypt from "bcrypt";

import { IHasher } from "@dal/protocols/cryptography/hasher.interface";
import { IHashComparer } from "@dal/protocols/cryptography/hash-comparer.interface";

export class BcryptAdapter implements IHasher, IHashComparer {
  constructor(private readonly salt: number) {}

  async hash(text: string): Promise<string> {
    return bcrypt.hash(text, this.salt);
  }

  async compare(text: string, digest: string): Promise<boolean> {
    return bcrypt.hash(text, digest);
  }
}
