export type Offer = {
  id: string,
  image: string,
  title: string,
  old_price: string,
  price: string,
  destination_link: string,
  store_image: string | null,
  store_name: string,
  description: string,
  expiration_date: string,
  short_link: string,
  created_at: string,
  is_on_showcase: boolean,
  is_featured: boolean,
  is_free_shipping: boolean
}

export type APIResponse = {
  status: string,
  message: string,
  offer: Offer
}

export type Params = {
  params: {
    code: string;
  }
}
