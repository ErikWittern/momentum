class Place < ActiveRecord::Base
  has_many :recommendations, dependent: :destroy

  validates :name, uniqueness: true, presence: true
  validates :neighborhood, presence: true
  validates :google_place_id, presence: true
end
