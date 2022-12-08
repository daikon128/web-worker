class LinkCards {
  list: LinkCard[]
  constructor(list: LinkCard[]) {
    this.list = list
  }
}

class LinkCard {
  title: string
  url: string

  constructor(title: string, url: string) {
    this.title = title
    this.url = url
  }

}


export {
  LinkCards,
  LinkCard
}