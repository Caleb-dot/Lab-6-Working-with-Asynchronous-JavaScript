// script.js

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}


async function fetchUserProfile() {
  console.log('Fetching user profiles...');
  await delay(2000); // 2 seconds delay
  console.log('User profiles fetched');
  return { id: 1, name: 'John Doe' }; 
}


async function fetchPosts() {
  console.log('Fetching posts...');
  await delay(3000); // 3 seconds delay
  console.log('Posts fetched');
  return [{ id: 1, content: 'Hello World!' }]; 
}


async function fetchComments() {
  console.log('Fetching comments...');
  await delay(1500); // 1.5 seconds delay
  console.log('Comments fetched');
  return [{ id: 1, text: 'Great post!' }]; 
}                                                                       


async function executeTasks() {
  console.log('Task 1: Start');
  await fetchUserProfile();                                       
  console.log('Task 1: End');

  console.log('Task 2: Start');
  await fetchPosts();
  console.log('Task 2: End');

  console.log('Task 3: Start');
  await fetchComments();
  console.log('Task 3: End');
}

async function fetchSequentially() {
  console.time('Sequential Fetch');

  console.log('Fetching user profile...');
  const userProfile = await fetchUserProfile();

  console.log('Fetching posts...');
  const posts = await fetchPosts();

  console.log('Fetching comments...');
  const comments = await fetchComments();

  console.timeEnd('Sequential Fetch');
  return { userProfile, posts, comments };
}


fetchSequentially().then((result) => {
  console.log('Sequential result:', result);
});

async function fetchInParallel() {
  console.time('Parallel Fetch');

 
  const userProfilePromise = fetchUserProfile();
  const postsPromise = fetchPosts();
  const commentsPromise = fetchComments();

  const [userProfile, posts, comments] = await Promise.all([
    userProfilePromise,
    postsPromise,
    commentsPromise,
  ]);

  console.timeEnd('Parallel Fetch');
  return { userProfile, posts, comments };
}


fetchInParallel().then((result) => {
  console.log('Parallel result:', result);
});

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}


async function fetchUserProfile() {
  try {
    console.log('Fetching user profiles...');
    await delay(2000); // Simulate 2 seconds delay
    console.log('User profiles fetched');
    return { id: 1, name: 'John Doe' }; // Example data
  } catch (error) {
    console.error('Error fetching user profiles:', error);
    throw new Error('Failed to fetch user profiles.');
  }
}


async function fetchPosts() {
  try {
    console.log('Fetching posts...');
    await delay(3000); // Simulate 3 seconds delay
    console.log('Posts fetched');
    return [{ id: 1, content: 'Hello World!' }]; // Example data
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw new Error('Failed to fetch posts.');
  }
}


async function fetchComments() {
  try {
    console.log('Fetching comments...');
    await delay(1500); // Simulate 1.5 seconds delay
    console.log('Comments fetched');
    return [{ id: 1, text: 'Great post!' }]; // Example data
  } catch (error) {
    console.error('Error fetching comments:', error);
    throw new Error('Failed to fetch comments.');
  }
}


async function fetchSequentially() {
  console.time('Sequential Fetch');
  try {
    const userProfile = await fetchUserProfile();
    const posts = await fetchPosts();
    const comments = await fetchComments();
    console.timeEnd('Sequential Fetch');
    return { userProfile, posts, comments };
  } catch (error) {
    console.error('Error in sequential fetching:', error);
  }
}


async function fetchInParallel() {
  console.time('Parallel Fetch');
  try {
    const [userProfile, posts, comments] = await Promise.all([
      fetchUserProfile(),
      fetchPosts(),
      fetchComments(),
    ]);
    console.timeEnd('Parallel Fetch');
    return { userProfile, posts, comments };
  } catch (error) {
    console.error('Error in parallel fetching:', error);
  }
}

fetchSequentially().then((result) => {
  console.log('Sequential result:', result);
});

fetchInParallel().then((result) => {
  console.log('Parallel result:', result);
});


  return new Promise((resolve) => setTimeout(resolve, ms));


// Asynchronous function to fetch user profiles
async function fetchUserProfile() {
  try {
    console.log('Fetching user profiles...');
    await delay(2000); // Simulate 2 seconds delay
    console.log('User profiles fetched');
    return { id: 1, name: 'John Doe' }; // Example data
  } catch (error) {
    console.error('Error fetching user profiles:', error);
    throw new Error('Failed to fetch user profiles.');
  }
}

// Asynchronous function to fetch posts
async function fetchPosts() {
  try {
    console.log('Fetching posts...');
    await delay(3000); // Simulate 3 seconds delay
    console.log('Posts fetched');
    return [{ id: 1, content: 'Hello World!' }]; // Example data
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw new Error('Failed to fetch posts.');
  }
}

// Asynchronous function to fetch comments
async function fetchComments() {
  try {
    console.log('Fetching comments...');
    await delay(1500); // Simulate 1.5 seconds delay
    console.log('Comments fetched');
    return [{ id: 1, text: 'Great post!' }]; // Example data
  } catch (error) {
    console.error('Error fetching comments:', error);
    throw new Error('Failed to fetch comments.');
  }
}

// Sequential Fetching with Error Handling
async function fetchSequentially() {
  console.time('Sequential Fetch');
  try {
    const userProfile = await fetchUserProfile();
    const posts = await fetchPosts();
    const comments = await fetchComments();
    console.timeEnd('Sequential Fetch');
    return { userProfile, posts, comments };
  } catch (error) {
    console.error('Error in sequential fetching:', error);
  }
}

// Parallel Fetching with Error Handling
async function fetchInParallel() {
  console.time('Parallel Fetch');
  try {
    const [userProfile, posts, comments] = await Promise.all([
      fetchUserProfile(),
      fetchPosts(),
      fetchComments(),
    ]);
    console.timeEnd('Parallel Fetch');
    return { userProfile, posts, comments };
  } catch (error) {
    console.error('Error in parallel fetching:', error);
  }
}

// Run both sequential and parallel fetch functions
fetchSequentially().then((result) => {
  console.log('Sequential result:', result);
});

fetchInParallel().then((result) => {
  console.log('Parallel result:', result);
});

let promise = new Promise((resolve, reject) => {
  // An example of synchronous operation here
  var myTest = 1;
  let success = (myTest > 0); 
  if (success) {
    resolve("Operation completed successfully.");
  } else {
    reject("Operation failed.");
  }
});
console.log("Let's do something immediately after creating the promise");
promise.then((message) => {
  console.log(message);
}).catch((error) => {
  console.log(error);
});

// Async functions to simulate fetching data
async function fetchUserProfile() {
  await delay(2000); // Simulate 2 seconds delay
  console.log('User profile retrieved');
  return { id: 1, name: 'John Doe' };
}

async function fetchPosts() {
  await delay(3000); // Simulate 3 seconds delay
  console.log('Posts retrieved');
  return [{ id: 1, content: 'Hello World!' }];
}

async function fetchComments() {
  await delay(1500); // Simulate 1.5 seconds delay
  console.log('Comments retrieved');
  return [{ id: 1, text: 'Great post!' }];
}

// Primary function to fetch all data in sequence
async function getUserContent() {
  try {
    const userProfile = await fetchUserProfile();
    const posts = await fetchPosts();
    const comments = await fetchComments();
    
    // Combine all results
    const result = {
      userProfile,
      posts,
      comments,
    };
    
    console.log('All data retrieved:', result);
    return result;
  } catch (error) {
    console.error('Error fetching user content:', error);
  }
}

// Helper function to simulate delay
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Run the function
getUserContent();