class Api::ReviewsController < ApplicationController

    def index
        @reviews = Review.where(book_id: params[:book_id])
        render :index
    end

    def show
        if !!current_user
            @review = Review.find_by(book_id: params[:book_id], user_id: current_user.id)
            render :show
        end
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
        if !!current_user
            @review = Review.find_by(book_id: params[:book_id], user_id: current_user.id)
            if @review.update(review_params)
                render :show
            else
                render json: @review.errors.full_messages, status: 422
            end
        end
    end

    def destroy
        if !!current_user
            @review = Review.find_by(book_id: params[:book_id], user_id: current_user.id)
            if @review.destroy
                render :show
            else
                render json: ['Delete failed.'], status: 422
            end
        end
    end

    private

    def review_params
        params.require(:review).permit(:title, :body, :rating)
    end

end