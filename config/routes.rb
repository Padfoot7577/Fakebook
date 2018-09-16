Rails.application.routes.draw do
  root 'home#index'

  get 'home/index' => 'home#index'

  get  '/signup' => 'users#new'
  post '/signup' => 'users#create'

  resources :users

  get '/login' => 'sessions#new'
  post '/login' => 'sessions#create'
  delete '/logout' => 'sessions#destroy'

  resources :abominations
  post 'abominations' => 'abominations/create'
end
