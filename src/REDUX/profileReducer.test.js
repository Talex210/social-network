import profileReducer, {addPostActionCreator, deletePost} from './profileReducer'

let state = {
    postsData: [
        {id: 1, message: 'Hi, how are you?', likeCounter: 16, dislikeCounter: 3},
        {id: 2, message: "It's my firs post", likeCounter: 30, dislikeCounter: 4}
    ],
}
test('length of posts should be incremented', () => {
    // 1. test data
    let action = addPostActionCreator('it-kamasutra.com')
    // 2. action
    let newState = profileReducer(state, action)
    // 3. expectation
    expect(newState.postsData.length).toBe(3)
})

test('message new post should be correct', () => {
    // 1. test data
    let action = addPostActionCreator('it-kamasutra.com')

    // 2. action
    let newState = profileReducer(state, action)
    // 3. expectation
    expect(newState.postsData[2].message).toBe('it-kamasutra.com')
})

test('after deleting length of messages should be decrement', () => {
    // 1. test data
    let action = deletePost(1)

    // 2. action
    let newState = profileReducer(state, action)
    // 3. expectation
    expect(newState.postsData.length).toBe(1)
})

test(`after deleting length  shouldn't be decrement if id is incorrect`, () => {
    // 1. test data
    let action = deletePost(1000)

    // 2. action
    let newState = profileReducer(state, action)
    // 3. expectation
    expect(newState.postsData.length).toBe(2)
})


