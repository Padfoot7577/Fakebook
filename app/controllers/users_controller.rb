# frozen_string_literal: true

class UsersController < ApplicationController
  def new
    if logged_in?
      return redirect_to '/'
    end
    @user = User.new
  end

  def create
    @user = User.new(params.require(:user).permit(:name, :email, :password, :password_confirmation))
    if @user.save
      log_in @user
      flash[:success] = "Why are you on Fakebook?"
      redirect_to @user
    else
      render 'new'
    end
  end

  def show
    @user = User.find(params[:id])
  end
end
