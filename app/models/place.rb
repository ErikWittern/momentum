class Place < ActiveRecord::Base
  has_many :recommendations

  validates :name, uniqueness: true
end
