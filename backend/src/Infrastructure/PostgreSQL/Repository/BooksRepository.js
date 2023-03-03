const {
    queryAsync
} = require('..');

const addAsync = async (name, author_id) => {
    console.info(`Adding book in database async...`);

    const books = await queryAsync('INSERT INTO books (name, author_id) VALUES ($1, $2) RETURNING *', [name, author_id]);
    return books[0];
};

const addPublisherAsync = async (price, book_id, publisher_id) => {
    console.info(`Adding book publisher in database async...`);

    const bookPublishers = await queryAsync('INSERT INTO publishers_books (price, book_id, publisher_id) VALUES ($1, $2, $3) RETURNING *', [price, book_id, publisher_id]);
    return bookPublishers[0];
};

const getAllAsync = async () => {
    console.info(`Getting all books from database async...`);

    return await queryAsync('SELECT * FROM mytable');
};

const getByIdAsync = async (id) => {
    console.info(`Getting the book with id ${id} from database async...`);

    const books = await queryAsync(`
    SELECT * from mytable 
    WHERE id = $1`, [id]);

    return books;
};

const updateByIdAsync = async (id, name, author_id, publishers_ids) => {

    console.info(`Updating the book with id ${id} in database async...`);

    const books =  await queryAsync('UPDATE books SET name = $1, author_id = $2 WHERE id = $3 RETURNING *', [name, author_id, id]);
    await deleteBookPublisherRelationshipAsync(id);

    for (let i = 0; i < publishers_ids.length; i ++) {
        await queryAsync('INSERT INTO publishers_books (book_id, publisher_id) VALUES ($1, $2)', [id, publishers_ids[i]]);
    }

    return books[0];
};

const updateBookPublisherPriceAsync = async (bookId, publisherId, price) => {

    console.info(`Updating the book with id ${id} price for publisher ${publisherId} into database async...`);

    await queryAsync('UPDATE publishers_books SET price = $1 WHERE book_id = $2 AND WHERE publisher_id = $3 RETURNING *', [price, bookId, publisherId]);
};

const deleteByIdAsync = async (id) => {
    console.info(`Deleting the book with id ${id} from database async...`);

    const books = await queryAsync('DELETE FROM books WHERE id = $1 RETURNING *', [id]);
    await deleteBookPublisherRelationshipAsync(id);

    return books[0];
};

const deleteBookPublisherRelationshipAsync = async (bookId) => {

    console.info(`Removing book publisher relation for book ${bookId}`);
    await queryAsync('DELETE FROM publishers_books WHERE book_id = $1', bookId);
}

module.exports = {
    addAsync,
    getAllAsync,
    getByIdAsync,
    updateByIdAsync,
    deleteByIdAsync,
    updateBookPublisherPriceAsync,
    addPublisherAsync
}