export interface CreateUrl {
  execute(input: CreateUrl.Input): Promise<CreateUrl.Ouput>
}

export namespace CreateUrl {
  export type Input = {
    fullLink: string;
    offerId: string;
    storeName: string;
    resourceId: string;
    destinationLink: string;
  }

  export type Ouput = {
    id: string;
    fullLink: string;
    resourceId: string;
    offerId: string;
    storeName: string;
    code: string;
    shortLink: string;
    createdAt: Date;
  }
}