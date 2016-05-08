class Recommendation < ActiveRecord::Base
  belongs_to :user
  belongs_to :place

  BY_ROLES = %w(novice regular local)
  INTENTIONS = %w(eat drink party explore)
  TIMES = %w(Morning Afternoon Evening Night)
  DAYS = %w(Monday Tuesday Wednesday Thursday Friday Saturday Sunday)

  validates :intention, inclusion: { in: INTENTIONS }, presence: true
  validates :by_role, inclusion: { in: BY_ROLES }, presence: true
  validates :time, inclusion: { in: TIMES }, presence: true
  validates :day, inclusion: { in: DAYS }, presence: true
end
