class CreateAnimosity < ActiveRecord::Migration[5.2]
  def change
    create_table :animosities do |t|
      t.integer :user_id, :null => false
      t.integer :abomination_id, :null => false
      t.index [:user_id], :name => 'animosity_user_abomination_index'
      t.index [:abomination_id], :name => 'animosity_abomination_user_index'
      t.datetime :deleted_at
      t.timestamps :null => false
    end
  end
end
