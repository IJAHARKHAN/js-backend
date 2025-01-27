import express from 'express'

const app = express();


app.get('/', (req, res) =>{
   res.send('Server is ready.')
});


app.get('/api/jokes', (req, res) =>{
    const jokes = [
        {
          id: 1,
          title: "Why don't scientists trust atoms?",
          content: "Because they make up everything!"
        },
        {
          id: 2,
          title: "Why did the bicycle fall over?",
          content: "Because it was two-tired!"
        },
        {
          id: 3,
          title: "Why don’t skeletons fight each other?",
          content: "They don’t have the guts."
        },
        {
          id: 4,
          title: "Why couldn’t the leopard play hide and seek?",
          content: "Because he was always spotted."
        },
        {
          id: 5,
          title: "What do you call cheese that isn't yours?",
          content: "Nacho cheese!"
        },
        {
          id: 6,
          title: "Why couldn’t the pony sing?",
          content: "Because it was a little hoarse."
        },
        {
          id: 7,
          title: "What do you call fake spaghetti?",
          content: "An impasta!"
        },
        {
          id: 8,
          title: "Why don’t oysters donate to charity?",
          content: "Because they are shellfish."
        },
        {
          id: 9,
          title: "How do you organize a space party?",
          content: "You planet!"
        },
        {
          id: 10,
          title: "Why did the scarecrow win an award?",
          content: "Because he was outstanding in his field."
        }
      ]; 
   res.send(jokes)
})



const port = process.env.PORT || 3000;
// const port = 3000;

app.listen(port, () =>{
    console.log(`Serve at http://localhost:${port}`)
})