# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2018_09_16_023307) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "abominations", force: :cascade do |t|
    t.string "name", default: "", null: false
    t.text "description"
    t.string "url", default: "/images/placeholder.png", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_abominations_on_name", unique: true
  end

  create_table "animosities", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "abomination_id", null: false
    t.datetime "deleted_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["abomination_id"], name: "animosity_abomination_user_index"
    t.index ["user_id"], name: "animosity_user_abomination_index"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "name", default: "", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "password_digest"
    t.index ["email"], name: "index_users_on_email", unique: true
  end

end
