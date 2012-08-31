class CreatePeople < ActiveRecord::Migration
  def change
    create_table :people do |t|
      t.string :name, :role, :email, :null => false

      t.timestamps
    end
  end
end
