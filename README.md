## Inkitt Chat App

### Live preview

https://inkittchat.netlify.app

### How to run this app

```
1. yarn install
2. yarn start
```

The application will start locally on `localhost:3000`

### How to run tests
`yarn test`

### Reasoning and considerations:
1. Given the size of the application and limited time I decided to not implement any kind of storage (e.g. Redux). For the same reason I didn't further extract logic from the App component, which doesn't belong there (e.g. Message object creation)
2. For the same reason I opted to using pure CSS (which is admittedly somewhat messy)
2. The edgecase of having too many nested messages (so many that they are not fitting in the screen) is deliberately not covered.
3. Repeated spreading operations in reassigning `state` variables can be a performance bottleneck. Introducing ImmutableJS might improve situation, but it requires benchmarking.
