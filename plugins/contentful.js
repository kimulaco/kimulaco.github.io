import * as contentful from 'contentful'

const createClient = () => {
  return contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
  })
}

const client = createClient()

export const entryId = {
  public: {
    product: process.env.CONTENTFUL_PUBLIC_PRODUCT
  }
}

export const getEntries = async (entryId) => {
  const entry = await client.getEntries(entryId)
  return entry.items.map((item) => {
    return item.fields
  })
}
