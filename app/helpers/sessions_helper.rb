module SessionsHelper
  def log_in(user) # log in the user
    session[:user_id] = user.id
  end

  def current_user # get the current logged-in user (if exists)
    if session[:user_id]
      @current_user ||= User.find_by(:id => session[:user_id])
    end
  end

  def logged_in?
    !current_user.nil?
  end

  def log_out
    session.delete(:user_id)
    @current_user = nil
  end
end
