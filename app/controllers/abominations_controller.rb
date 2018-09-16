class AbominationsController < ApplicationController
  def create
    @abomination = Abomination.new(params.require(:abomination).permit(:name, :description, :url))
    if @abomination.save
      flash[:success] = "Haters gotta hate."
      render :json => {:error => nil, :abomination => @abomination.for_api}

    else
      render :json => {:error => 'Abomination names must be unique'}
    end
  end

  def show
    @abomination = Abomination.find(params[:id])
  end
end
