import jsonplaceholder from '../apis/jsonPlaceholder'

export const fetchPosts = async () => {
    //returns an action with the type 'FETCH_POSTS'
    const res = await jsonplaceholder.get('./posts')
    return {
        type: 'FETCH_POSTS',
        payload: res
    }
}