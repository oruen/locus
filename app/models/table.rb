class Table < ActiveRecord::Base
  attr_accessible :angle, :x, :y, :person_id
  validates :angle, :x, :y, :presence => true
end
