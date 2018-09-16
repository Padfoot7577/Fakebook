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

  validates :name, uniqueness: { case_sensitive: true }

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

  def antagonize(user)
    current_haters = Hash[users.map { |u| [u.id, u] }]
    current_haters[user.id] = user
    self.update!(:users => current_haters.values)
  end

  def unantagonize(user)
    current_haters = Hash[users.map { |u| [u.id, u] }]
    current_haters.delete(user.id)
    self.update!(:users => current_haters.values)
  end

  def self.list_all
    Abomination.all.to_a.map { |a| a.for_api }
  end
end