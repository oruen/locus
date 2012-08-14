class Person < ActiveRecord::Base
  attr_accessible :email, :name, :role
  has_one :table
end
