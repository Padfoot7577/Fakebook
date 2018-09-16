Rails.application.routes.draw do
  root 'home#index'

  get 'home/index' => 'home#index'

  get  '/signup' => 'users#new'
  post '/signup' => 'users#create'

  resources :users

  get '/login' => 'sessions#new'
  post '/login' => 'sessions#create'
  delete '/logout' => 'sessions#destroy'

  get 'abominations/list_all' => 'abominations#list_all'
  resources :abominations
end
