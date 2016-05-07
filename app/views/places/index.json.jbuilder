json.array!(@places) do |place|
  json.extract! place, :id, :name, :description, :latitude, :longitude, :neighborhood, :city, :country
  json.url place_url(place, format: :json)
end
