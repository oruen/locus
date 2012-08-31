class MakeTableCoordsFloat < ActiveRecord::Migration
  def up
    change_column :tables, :x, :float, :null => false
    change_column :tables, :y, :float, :null => false
  end

  def down
    change_column :tables, :x, :integer, :null => false
    change_column :tables, :y, :integer, :null => false
  end
end
