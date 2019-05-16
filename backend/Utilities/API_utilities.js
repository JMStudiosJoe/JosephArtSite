const posts_db_name = process.env.NODE_ENV
    ? 'posts'
    : 'posts';

const users_db_name = process.env.NODE_ENV
    ? 'users'
    : 'users';

export {
    posts_db_name,
    users_db_name,
}