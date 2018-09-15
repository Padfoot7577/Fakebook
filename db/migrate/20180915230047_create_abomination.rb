# frozen_string_literal: true

class CreateAbomination < ActiveRecord::Migration[5.2]
  def change
    create_table :abominations do |t|
      t.string :name, null: false, default: ''
      t.text :description
      t.string :url, :null => false, default: '/images/placeholder.png'

      t.timestamps :null => false
    end

    add_index :abominations, :name, unique: true
  end
end
