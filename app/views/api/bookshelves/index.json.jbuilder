if !!@bookshelf
    @bookshelf.each do |shelving|
        json.set! shelving.id do
            json.partial! 'api/bookshelves/shelving', shelving: shelving
        end
    end
end