# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


users = User.create(
  [
    { username: 'Erik',  email: 'erik@momentum.io' },
    { username: 'Gesi',  email: 'gesi@momentum.io' },
    { username: 'Chris', email: 'chris@momentum.io' }
  ]
)

places = Place.create(
  [
    { name: 'Prince Street Pizza' , description: 'Best pizza ever!  Get the "Special"', longitude: 151.199025, latitude: -33.870775, neighborhood: 'Soho', city: 'New York City', country: 'USA'}
  ]
)

recommendations = Recommendation.create(
  [
    { eat: true, drink: false, explore: false, party: false, user: users.first, place: places.first }
  ]
)
