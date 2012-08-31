class PersonSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :role
end
