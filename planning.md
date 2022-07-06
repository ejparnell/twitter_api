# Twitter API Dup planning docs

User stories: (starting with `As a user`)
- create a tweet
  - new schema
  - create a model to use
  - return newly created tweet
- view all my tweets
  - query all tweets in collection - find()?
  - return all tweets
- view a single tweet
  - query a single tweet in a collection - ObejctID?
  - return a single tweet
- update a single tweet
  - query a single tweet in a collection - ObejctID?
  - update single tweet
  - return updated tweet
- delete a single tweet
  - query a single tweet in a collection - ObejctID?
  - return a string of success
- be able to like a tweet
  - query a single tweet in a collection - ObejctID?
  - update liked field in single tweet
  - return updated tweet
- should be able to have sponsored post
  - query a single tweet in a collection - ObejctID?
  - update sponsored field
  - return updated tweet

Schemas: (Models)
- Tweet
  - title - string
  - body - string
  - author - string
  - likes - number - Should start at 0 if no likes are there
  - sponsored - bool - Should be false to start
