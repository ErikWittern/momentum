class Recommendation < ActiveRecord::Base
  belongs_to :user
  belongs_to :place

  BY_ROLES = %w(novice regular local)
  INTENTIONS = %w(eat drink party explore)

  validates :intention, inclusion: { in: INTENTIONS }, presence: true
  validates :by_role, inclusion: { in: BY_ROLES }, presence: true
end
