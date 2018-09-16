class AbominationsController < ApplicationController
  def new
    if !logged_in?
      return redirect_to '/'
    end
    @abomination = Abomination.new
  end

  def create
    @abomination = Abomination.new(params.require(:abomination).permit(:name, :description, :url))
    if @abomination.save
      flash[:success] = "Haters gotta hate."
      # redirect_to @abomination
    else
      render 'new'
    end
  end

  def show
    @abomination = Abomination.find(params[:id])
  end
end
