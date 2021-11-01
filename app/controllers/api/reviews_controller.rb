class Api::ReviewsController < ApplicationController
    def index
        @reviews = Review.where(book_id: params[:book_id])
        render :index
    end

    def show
        @review = Review.where(book_id: params[:book_id], user_id: params[:user_id])
        render :show
    end

    def create
        @review = Review.new(review_params)
        if @review.user_id != current_user.id
            render json: ['Please log in to the correct account you are trying to post a review for.'], status: 422
            return
        end
        if @review.save
            render :show
        else
            render json: ['Your review is empty and requires either a body or rating.'], status: 422
        end
    end

    def update
        @review = Review.find(params[:id])
        if @review.user_id != current_user.id
            render json: ['You are not the owner of this review.'], status: 422
            return
        end
        if @review.update(review_params)
            render :show
        else
            render json: ['Your review is empty and requires either a body or rating.'], status: 422
        end
    end

    def destroy
        @review = Review.where(book_id: params[:book_id], user_id: params[:user_id])
        if @review.user_id != current_user.id
            render json: ['You cannot delete a review you do not own.'], status: 422
            return
        end
        if @review.destroy
            render :show
        else
            render json: ['Failed to delete review.'], status: 422
        end
    end

    private

    def review_params
        params.require(:review).permit(:body, :rating, :user_id, :book_id, :spoiler_flag)
    end

end