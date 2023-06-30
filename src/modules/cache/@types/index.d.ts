export type Offer = {
  destination_link: string;
}

export type APIResponse = {
  status: string;
  message: string;
  offer: Offer
}

export type Params = {
  params: {
    code: string;
  }
}