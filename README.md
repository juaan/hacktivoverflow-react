## Server Routes

#### /login
    Method: Post
    Body: {
      username: string,
      password: string
    }

#### /users
    Method: Get

#### /users/:id
    Method: Get
    
#### /users/:iduser/panel
    Method: Get
    
#### /users/signup
    Method: Post
    Body: {
      email: string,
      username: string,
      password: string
    }

#### /users/login
    Method: Post
    Body: {
      username: string,
      password: string
    }

#### /questions
    Method: Get

#### /questions/:id
    Method: Get

#### /questions
    Method: Post
    Body: {
      user: string,
      title: string,
      content: string
    }

#### /questions/:id
    Method: Put
    Body: {
      title: string,
      content: string
    }

#### /questions/:id
    Method: Delete

#### /questions/upvotes/:id
    Method: Put
    Body: {
      user: string
    }

#### /questions/downvotes/:id
    Method: Put
    Body: {
      user: string
    }


#### /questions/answer/:id
    Method: Post
    Body: Answers

#### /questions/answer/upvotes/:id
    Method: Put
    Body: {
      user: string,
      answer: string
    }

#### /questions/answer/downvotes/:id
    Method: Put
    Body: {
      user: string,
      answer: string
    }
