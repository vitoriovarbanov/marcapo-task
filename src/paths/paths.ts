export const paths = Object.freeze({
    home: '/',
    createBook: '/create-book',
    editBook: (id: string) => `/edit-book/${id}`,
});
