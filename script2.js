const quotes = [
    {
      text: "Keep your face always toward the sunshine — and shadows will fall behind you.",
      author: "— Walt Whitman",
      image: "sunshine.webp"
    },
    {
      text: " Extraordinary things are always hiding in places people never think to look.",
      author: "— Jodi Picoul",
      image: "download3.jpg"  },
    {
      text: "Setting goals is the first step in turning the invisible into the visible.",
      author: " — Tony Robbins",
      image: "Webp.net-resizeimage-80-1024x655.jpg"  },
    {
      text: "You can have it all. Just not all at once.",
      author: "— Oprah Winfrey",
      image: "photo-1562690868-60bbe7293e94.jpg"  },
    {
      text: "Say something positive, and you’ll see something positive.",
      author: "— Jim Thompson",
      image: "download 5.jpg"  },
    {
      text: "All you need is the plan, the road map, and the courage to press on to your destination.",
      author: "— Earl Nightingale",
      image: "photo-1598111465162-5f38a4199576.jpg"  },
    {
      text: "The only limit to our realization of tomorrow will be our doubts of today.",
      author: "- Franklin D. Roosevelt",
      image: "question-mark-background-dark-space-room-concept-doubts-questionnaire_700226-1687.avif"  },
    {
      text: "Your time is limited, don't waste it living someone else's life.",
      author: "- Steve Jobs",
      image: "download 5.jpg"  },
    {
      text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      author: "- Winston Churchill",
      image: "sunshine.webp"  },
    {
      text: "The best way to predict the future is to create it.",
      author: "- Peter Drucker",
      image: "Webp.net-resizeimage-80-1024x655.jpg"  },
    {
      text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
      author: "- Nelson Mandela",
      image: "download3.jpg"  },
    {
      text: "Life is what happens when you're busy making other plans.",
      author: "- John Lennon",
      image: "istockphoto-1206800966-612x612.jpg"  },
    {
      text: "In the middle of every difficulty lies opportunity.",
      author: "- Albert Einstein",
      image: "photo-1562690868-60bbe7293e94.jpg"  },
    {
      text: "You miss 100% of the shots you don't take.",
      author: "- Wayne Gretzky",
      image: "download 6.jpg"  },
    {
      text: "The only person you are destined to become is the person you decide to be.",
      author: "- Ralph Waldo Emerson",
      image: "sleeping-white-rabbit.jpg"  },
    {
      text: "The future depends on what you do today.",
      author: "- Mahatma Gandhi",
      image: "download 6.jpg"  },
    {
      text: "It does not matter how slowly you go as long as you do not stop.",
      author: "- Confucius",
      image: "images.jpg"  },
    {
      text: "The way to get started is to quit talking and begin doing.",
      author: "- Walt Disney",
      image: "istockphoto-1206800966-612x612.jpg"  },
    {
      text: "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
      author: "- Christian D. Larson",
      image: "istockphoto-1025141940-612x612.jpg"  },
    {
      text: "Success usually comes to those who are too busy to be looking for it.",
      author: "- Henry David Thoreau",
      image: "Positive-Thinking-.jpg"  },
    {
      text: "Aim for the moon. If you miss, you may hit a star.",
      author: "- W. Clement Stone",
      image: "stars-16598773034x3.avif"  },
    {
        text:"Only in the darkness can you see the stars.",
        author:"— Martin Luther King",
        image:"full-moon-night-landscape-732x549-thumbnail-1.webp" },

  ];
  
  function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    const quoteElement = document.getElementById("quote");
    const authorElement = document.getElementById("author");
    quoteElement.textContent = quote.text;
    authorElement.textContent = quote.author;
  
    // Apply the random background image
    document.body.style.backgroundImage = `url(${quote.image})`;
  }
  
  generateQuote();
  
  document.getElementById("new-quote").addEventListener("click", generateQuote);