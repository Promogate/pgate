export interface CreateUrl {
  execute(input: CreateUrl.Input): Promise<void>
}

export namespace CreateUrl {
  export type Input = {
    fullLink: string;
    storeId: string;
    storeName: string;
  }

  export type Ouput = {
    id: string;
    fullLink: string;
    storeId: string;
    storeName: string;
    code: string;
    shortLink: string;
    createdAt: Date;
  }
}