// rotating blog posts on home page
	//1. identify the 5 most recent posts
	//2. pull in their first picture
	//3. pull in their h3 (blog post title)
	//4. on click, scroll to next post 


//instagram feed
// https://www.google.com/search?q=What%20is%20my%20Instagram%20account%20ID%3F

<script type="text/javascript">
    var feed = new Instafeed({
        get: 'user',
        userId: 'YOUR_USER_ID',
        clientId: 'YOUR_CLIENT_ID'
    });
    feed.run();
</script>

//contact page
 <form method="POST" action="http://formspree.io/YOUREMAILHERE">
  	<input type="email" name="email" placeholder="Your email">
  	<textarea name="message" placeholder="Your message"></textarea>
  	<button type="submit">Contact me</button>
</form>


