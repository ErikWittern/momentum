#!/usr/bin/env ruby

# Load Rails
ENV['RAILS_ENV'] = 'development'
DIR = File.dirname(__FILE__)
require DIR + '/../config/environment'

require 'unirest'
require 'byebug'

longitude = ARGV[0] || '151.199025'
latitude  = ARGV[1] || '-33.870775'

# export GOOGLE_PLACES_API_KEY=
key = ENV['GOOGLE_PLACES_API_KEY']

url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=#{latitude},#{longitude}&radius=500&types=food&name=pizza&key=#{key}"

response = Unirest.get(url)
results = response.body['results']

# TODO: need to find the "neighborhood" value based on lng, lat and then update

results.each do |result|
  Place.create(name: result['name'], google_place_id: result['place_id'], longitude: result['geometry']['location']['lng'], latitude: result['geometry']['location']['lat'], city: 'New York City', country: 'USA')
end
