# frozen_string_literal: true

# == Schema Information
#
# Table name: abominations
#
#  id                            :integer          not null, primary key
#  name                          :string           default(""), not null
#  description                   :text
#  url                           :string           default("/images/placeholder.png"), not null
#  created_at                    :datetime         not null
#  updated_at                    :datetime         not null
#
# Indexes
#
#  index_abominations_on_name                 (name) UNIQUE

class Abomination < ActiveRecord::Base

  validates :name, length: { maximum: 255 }, uniqueness: { case_sensitive: true }

  has_many :animosities
  has_many :users, :through => :animosities

  def for_api
    {
        :id => id,
        :name => name,
        :description => description,
        :url => url,
    }
  end
end