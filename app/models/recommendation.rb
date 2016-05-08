class Recommendation < ActiveRecord::Base
  belongs_to :user
  belongs_to :place

  BY_ROLES = %w(novice regular local)
  CATEGORIES = %w(eat drink party explore)

  validates :category, inclusion: { in: CATEGORIES }, presence: true
  validates :by_role, inclusion: { in: BY_ROLES }, presence: true
end
