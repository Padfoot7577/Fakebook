# frozen_string_literal: true

# == Schema Information
#
# Table name: marketing_tagged_content_assignments
#
#  id                             :integer          not null, primary key
#  user_id                        :integer          not null
#  abomination_id                 :integer          not null
#  deleted_at                     :datetime
#  created_at                     :datetime         not null
#  updated_at                     :datetime         not null
#
# Indexes
#
#  animosity_user_abomination_index  (user_id)
#  animosity_abomination_user_index  (abomination_id)
#

class Animosity < ActiveRecord::Base
  belongs_to :user
  belongs_to :abomination
end
