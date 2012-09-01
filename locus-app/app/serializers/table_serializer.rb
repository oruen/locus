class TableSerializer < ActiveModel::Serializer
  attributes :id, :x, :y, :angle, :person_id
end
