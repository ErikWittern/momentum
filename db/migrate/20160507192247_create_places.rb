class CreatePlaces < ActiveRecord::Migration
  def change
    create_table :places do |t|
      t.string :name
      t.string :description
      t.float :latitude
      t.float :longitude
      t.string :neighborhood
      t.string :city
      t.string :country
      t.string :google_place_id

      t.timestamps null: false
    end
  end
end
