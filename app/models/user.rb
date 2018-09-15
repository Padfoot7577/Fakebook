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

  validates :email, length: { maximum: 255 },
                    format: { with: VALID_EMAIL_REGEX },
                    uniqueness: { case_sensitive: false }
  validates :name,  length: { maximum: 50 }
  validates :password, presence: true, length: { minimum: 6 }

  before_save :format_email

  def format_email
    self.email = email.downcase
  end

  def get_gravatar_link
    gravatar_id = Digest::MD5::hexdigest(self.email)
    "https://secure.gravatar.com/avatar/#{gravatar_id}"
  end

  def for_api
    {
      :id => id,
      :content_type => content_type,
      :authored_by_agent_id => authored_by_agent_id,
      :body => body,
      :body_format => body_format,
      :title => title,
      :url_slug => url_slug,
      :published_at => published_at,
      :author_name => author_name,
      :tags => api_tags,
      :assets => api_assets
    }
  end
end