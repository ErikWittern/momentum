class AddTimeAndDayToRecommendations < ActiveRecord::Migration
  def change
    add_column :recommendations, :time, :string
    add_column :recommendations, :day, :string
  end
end
