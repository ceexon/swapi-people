interface Person {
  name: string
  height: string
  mass: string
  gender: string
  homeworld: string
}

interface ServerData {
  results: [Person]
  count: number
  next: string
  previous: string
}

interface Planet {
  name: string
}

interface People {
  data: [Person]
  count: number
  next: string
  prev: string
}

export { People, ServerData, Planet, Person }