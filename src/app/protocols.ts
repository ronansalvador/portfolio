export interface Tables<T> {
  fields: T | any
}

export interface ImageType {
  fields: {
    title: string
    description: string
    file: {
      url: string
      details: {
        image: {
          width: number
          height: number
        }
      }
    }
  }
}
