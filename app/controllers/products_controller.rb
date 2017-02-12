class ProductsController < ApplicationController
  def index
    respond_to do |format|
      format.json{render json: Product.all}
      format.xml{render xml: Product.all}
    end
  end
end
