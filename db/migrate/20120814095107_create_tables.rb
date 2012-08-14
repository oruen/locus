class CreateTables < ActiveRecord::Migration
  def change
    create_table :tables do |t|
      t.integer :x, :y, :angle, :null => false
      t.integer :person_id

      t.timestamps
    end
  end
end
