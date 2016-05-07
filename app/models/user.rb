class User < ActiveRecord::Base
  has_many :recommendations

  validates :email, uniqueness: true
end
