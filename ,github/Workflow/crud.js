const axios = require('axios');

const BASE_URL = 'https://jsonplaceholder.typicode.com';

// Function to fetch all posts
async function getAllPosts() {
    try {
        const response = await axios.get(`${BASE_URL}/posts`);
        return response.data;
    } catch (error) {
        console.error('Error fetching posts:', error.message);
    }
}

// Function to create a new post
async function createPost(postData) {
    try {
        const response = await axios.post(`${BASE_URL}/posts`, postData);
        return response.data;
    } catch (error) {
        console.error('Error creating post:', error.message);
    }
}

// Function to update a post by ID
async function updatePost(postId, postData) {
    try {
        const response = await axios.put(`${BASE_URL}/posts/${postId}`, postData);
        return response.data;
    } catch (error) {
        console.error(`Error updating post ${postId}:`, error.message);
    }
}

// Function to delete a post by ID
async function deletePost(postId) {
    try {
        const response = await axios.delete(`${BASE_URL}/posts/${postId}`);
        return response.data;
    } catch (error) {
        console.error(`Error deleting post ${postId}:`, error.message);
    }
}

// Example usage:
(async () => {
    // Fetch all posts
    const posts = await getAllPosts();
    console.log('All posts:', posts);

    // Create a new post
    const newPostData = {
        userId: 1,
        title: 'New Post',
        body: 'This is a new post created via API.'
    };
    const newPost = await createPost(newPostData);
    console.log('New post:', newPost);

    // Update the newly created post
    const updatedPostData = {
        title: 'Updated Post',
        body: 'This post has been updated via API.'
    };
    const updatedPost = await updatePost(newPost.id, updatedPostData);
    console.log('Updated post:', updatedPost);

    // Delete the newly created post
    const deletedPost = await deletePost(newPost.id);
    console.log('Deleted post:', deletedPost);
})();
