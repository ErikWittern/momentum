# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

users = User.create(
  [
    { username: 'Erik',   email: 'erik@momentum.io' },
    { username: 'Gesi',   email: 'gesi@momentum.io' },
    { username: 'Chris',  email: 'chris@momentum.io' },
    { username: 'Jurgen', email: 'jurgen@momentum.io' }
  ]
)

places = Place.create(
  [
    {
      name: 'Prince Street Pizza',
      description: 'Best pizza ever!  Get the "Special"',
      longitude: 151.199025,
      latitude: -33.870775,
      neighborhood: 'Soho',
      city: 'New York City',
      country: 'USA'
    },
    {
      name: 'Best Pizza',
      description: 'Really the best',
      longitude: 40.7121463,
      latitude: -73.965175,
      neighborhood: 'Williamsburg',
      city: 'New York City',
      country: 'USA'
    },
    {
      name: 'Vinnies Pizzeria',
      description: 'So good',
      longitude: 40.7121437,
      latitude: -73.965175,
      neighborhood: 'Williamsburg',
      city: 'New York City',
      country: 'USA'
    },
    {
      name: 'Solo Pizza NYC',
      description: 'Wicked',
      longitude: 40.7130545,
      latitude: -73.9841435,
      neighborhood: 'East Village',
      city: 'New York City',
      country: 'USA'
    }
  ]
)

recommendations = Recommendation.create(
  [
    { intention: 'eat', user: users[0], place: places[0] },
    { intention: 'eat', user: users[1], place: places[0] },
    { intention: 'eat', user: users[2], place: places[0] },
    { intention: 'eat', user: users[3], place: places[0] },
  ]
)
