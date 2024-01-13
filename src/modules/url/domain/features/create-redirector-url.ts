export interface CreateRedirectorUrl {
  execute(input: CreateRedirectorUrl.Input): Promise<CreateRedirectorUrl.Ouput>
}

export namespace CreateRedirectorUrl {
  export type Input = {
    destinationLink: string;
    redirectorId: string;
    type: string;
  }

  export type Ouput = {
    id: string;
    code: string;
    shortLink: string;
    destinationLink: string;
    type: string;
  }
}