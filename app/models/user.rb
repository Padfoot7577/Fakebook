# frozen_string_literal: true

# == Schema Information
#
# Table name: users
#
#  id                            :integer          not null, primary key
#  email                         :string           default(""), not null
#  name                          :string           default(""), not null
#  created_at                    :datetime         not null
#  updated_at                    :datetime         not null
#  password_digest               :string
#
# Indexes
#
#  index_users_on_email                 (email) UNIQUE

class User < ActiveRecord::Base
  has_secure_password

  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i

  validates :email, length: { maximum: 255 }, format: { with: VALID_EMAIL_REGEX }, uniqueness: { case_sensitive: false }
  validates :name,  length: { maximum: 50 }
  validates :password, presence: true, length: { minimum: 6 }

  before_save :format_email

  has_many :animosities
  has_many :abominations, :through => :animosities

  def get_gravatar_link
    gravatar_id = Digest::MD5::hexdigest(self.email)
    "https://secure.gravatar.com/avatar/#{gravatar_id}"
  end

  def get_comrades
    abominations.map(&:users).flatten.select { |u| u.id != id }.uniq { |u| u.id }
  end

  def for_api_short
    {
      :id => id,
      :email => email,
      :name => name,
      :gravatar_link => get_gravatar_link,
    }
  end

  def for_api
    json_hash = for_api_short
    json_hash[:abominations] = abominations.map(&:for_api)
    json_hash[:comrades] = get_comrades.map(&:for_api_short)
    json_hash
  end

  private

  def format_email
    self.email = email.downcase
  end
end