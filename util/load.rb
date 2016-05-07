#!/usr/bin/env ruby

def retrieve_neighborhood(lat, lng)
    neighborhood_url = "https://maps.googleapis.com/maps/api/geocode/json?&latlng=#{lat},#{lng}"
    response = Unirest.get(neighborhood_url )
    res = response.body['results']

    #unless res.count > 0


    res[0]['address_components'].each do |local|
      if local['types'].include? 'neighborhood'
        return local['long_name']
      end

      if local['types'].include? 'sublocality'
        return local['long_name']
      end
    end

    return 'xx'
end


# Load Rails
ENV['RAILS_ENV'] = 'development'
DIR = File.dirname(__FILE__)
require DIR + '/../config/environment'

require 'unirest'
require 'byebug'

#sydney
#longitude = ARGV[0] || '151.199025'
#latitude  = ARGV[1] || '-33.870775'

# east flatbush
#longitude = ARGV[0] || '-73.949997'
#latitude  = ARGV[1] || '40.650002'

# red hook
longitude = ARGV[0] || '-74.009584'
latitude  = ARGV[1] || '40.675103'

# export GOOGLE_PLACES_API_KEY=
key = ENV['GOOGLE_PLACES_API_KEY']

url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=#{latitude},#{longitude}&radius=500&types=food&name=pizza&key=#{key}"

response = Unirest.get(url)
results = response.body['results']


Place.destroy_all

results.each do |result|
  # TODO: need to find the "neighborhood" value based on lng, lat and then update
  lat = result['geometry']['location']['lat']
  lng = result['geometry']['location']['lng']

  neighborhood = retrieve_neighborhood(lat, lng)

  Place.create(
    name: result['name'],
    google_place_id: result['place_id'],
    longitude: lng,
    latitude: lat,
    neighborhood: neighborhood,
    city: 'New York City',
    country: 'USA'
  )
end
