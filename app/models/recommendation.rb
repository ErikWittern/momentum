class Recommendation < ActiveRecord::Base
  belongs_to :user
  belongs_to :place

  validates :category, inclusion: { in: %w(eat drink party explore), presence: true
end
