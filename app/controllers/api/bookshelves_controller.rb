class BookshelvesController < ApplicationController

    def show
        @shelved_book = Bookshelf.find(params[:id])
        render :show
    end

    def index
        @shelved_books = Bookshelf.where(user_id: params[:user_id])
        render :index
    end

    def create

    end

    def update

    end

    def destroy

    end

    private

    def shelve_book_params
        params.require(:bookshelf).permit(:user_id, :book_id, :shelf)
    end

end