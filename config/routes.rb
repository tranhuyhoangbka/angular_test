Rails.application.routes.draw do
  resources :products, only: :index

  root "pages#home"
  get "/directive_scope.html" => "pages#directive_scope"
  get '/transclude.html' => "pages#transclude"
  get '/compile.html' => 'pages#compile'
  get '/directive_controller.html' => 'pages#directive_controller'
  get '/customForms.html' => 'pages#custom_forms'
  get '/example.html' => 'pages#example'
  get '/domApi.html' => 'pages#dom_api'
  get '/exception.html' => 'pages#exception'
  get '/html_data.html' => 'pages#html_data'
  get '/expressions.html' => 'pages#expressions'
  get '/ajax.html' => 'pages#ajax'
  get '/promises.html' => 'pages#promise'
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
