Rails.application.routes.draw do
  get 'users/new'
  root 'home#index'

  get 'home/index' => 'home#index'

  get  '/signup',  to: 'users#new'
  resources :users

  get '/login' => 'sessions#new'
  post '/login' => 'sessions#create'
  delete '/logout' => 'sessions#destroy'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
