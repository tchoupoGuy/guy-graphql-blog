const UserList = [
  {
    id: 1,
    name: 'John',
    username: 'Doe',
    age: 24,
    nationality: 'CANADA',
    friends: [
      {
        id: 2,
        name: 'Leo',
        username: 'Messi',
        age: 34,
        nationality: 'ARGENTINA',
      },
      {
        id: 5,
        name: 'Marc',
        username: 'Manamane',
        age: 24,
        nationality: 'ENGLAND',
      },
    ],
  },
  {
    id: 2,
    name: 'Leo',
    username: 'Messi',
    age: 34,
    nationality: 'ARGENTINA',
    friends: [
      {
        id: 1,
        name: 'John',
        username: 'Doe',
        age: 24,
        nationality: 'CANADA',
      },
    ],
  },
  {
    id: 3,
    name: 'Paul',
    username: 'Pogba',
    age: 24,
    nationality: 'FRANCE',
  },
  {
    id: 4,
    name: 'Christiano',
    username: 'Rolnado',
    age: 24,
    nationality: 'PORTUGAL',
  },
  {
    id: 5,
    name: 'Marc',
    username: 'Manamane',
    age: 24,
    nationality: 'ENGLAND',
  },
]

const MovieList = [
  {
    id: 1,
    name: 'Avengers Endgame',
    yearOfPublication: 2019,
    isInTheaters: true,
  },
  {
    id: 2,
    name: 'Interstellar',
    yearOfPublication: 2007,
    isInTheaters: true,
  },
  {
    id: 3,
    name: 'Matrix',
    yearOfPublication: 2004,
    isInTheaters: true,
  },
  {
    id: 4,
    name: 'Black panther',
    yearOfPublication: 2019,
    isInTheaters: true,
  },
]

module.exports = { UserList, MovieList }
