export interface Winner {
  id: string
  name: string
  timeAgo: string
  amountWon: string
  game: string
  avatarUrl: string
}

export const winners: Winner[] = [
  {
    id: '1',
    name: 'Sarah W.',
    timeAgo: '2 months ago',
    amountWon: '12.50',
    game: 'History Masters',
    avatarUrl: '/placeholder.svg?height=64&width=64'
  },
  {
    id: '2',
    name: 'Mike B.',
    timeAgo: '2 months ago',
    amountWon: '3.25',
    game: 'Pop Culture Quiz',
    avatarUrl: '/placeholder.svg?height=64&width=64'
  },
  {
    id: '3',
    name: 'Emily D.',
    timeAgo: '2 months ago',
    amountWon: '7.80',
    game: 'Geography Challenge',
    avatarUrl: '/placeholder.svg?height=64&width=64'
  },
  {
    id: '4',
    name: 'David W.',
    timeAgo: '2 months ago',
    amountWon: '15.00',
    game: 'Math Wizards',
    avatarUrl: '/placeholder.svg?height=64&width=64'
  },
  {
    id: '5',
    name: 'Jessica L.',
    timeAgo: '1 month ago',
    amountWon: '9.99',
    game: 'Science Trivia',
    avatarUrl: '/placeholder.svg?height=64&width=64'
  },
  {
    id: '6',
    name: 'Chris P.',
    timeAgo: '3 months ago',
    amountWon: '20.00',
    game: 'Sports Fanatic',
    avatarUrl: '/placeholder.svg?height=64&width=64'
  }
]
