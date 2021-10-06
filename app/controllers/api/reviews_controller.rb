class Api::ReviewsController < ApplicationController

    def index
        @reviews = Review.where(book_id: params[:book_id])
        render :index
    end

    def show
        @review = Review.find_by(book_id: params[:book_id], user_id: params[:user_id])
        render :show
    end

    def create
        @review = Review.new(review_params)
        if @review.save
            render :show
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def update
        @review = Review.find_by(book_id: params[:book_id], user_id: params[:user_id])
        if @review.update(review_params)
            render :show
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def destroy
        @review = Review.find_by(book_id: params[:book_id], user_id: params[:user_id])
        if @review.destroy
            render :show
        else
            render json: ['Failed to delete review.'], status: 422
        end
    end

    private

    def review_params
        params.require(:review).permit(:title, :body, :rating)
    end

end