class Api::BookshelvesController < ApplicationController

    def show
        @shelving = Bookshelf.find_by(book_id: params[:book_id])
        render :show
    end

    def index
        @bookshelf = Bookshelf.where(user_id: params[:user_id])
        render :index
    end

    def create
        @shelving = Bookshelf.new(book_to_shelve_params)
        if @shelving.user_id != current_user.id
            render json: ['Please log into the correct account you are trying to shelve a book for.'], status: 422
            return
        end
        if @shelving.save
            render :show
        else
            render json: @shelving.errors.full_messages, status: 422
        end
    end

    def update
        @shelving = Bookshelf.find_by(id: params[:id])
        if @shelving.user_id != current_user.id
            render json: ['You are not logged in the correct account.'], status: 422
            return
        end
        if @shelving.update(book_to_shelve_params)
            render :show
        else
            render json: @shelving.errors.full_messages, status: 422
        end
    end

    def destroy
        @book_to_shelve = Bookshelf.find_by(id: params[:id])
        if @book_to_shelve.user_id != current_user.id
            render json: ['You do not own this shelving.'], status: 422
            return
        end
        if @book_to_shelve.destroy
            render :show
        else
            render json: ['Failed to delete shelving.'], status: 422
        end
    end

    private

    def book_to_shelve_params
        params.require(:shelving).permit(:user_id, :book_id, :shelf)
    end

end