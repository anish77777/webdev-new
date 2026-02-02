# HTML — ALL-IN-ONE REVIEW NOTES

HTML defines the structure and content of a web page.

HTML elements are the building blocks of a page. Most elements have an opening and closing tag:
<element>Content</element>

Void elements have no content and no closing tag:
<img>
<meta>
<img />

Attributes provide extra information:
<element attribute="value"></element>

Boolean attributes are either present (true) or absent (false):
<input required disabled>

HTML comments:
<!-- This is a comment -->

HEADINGS:
<h1>Most important</h1>
<h6>Least important</h6>

PARAGRAPH:
<p>This is a paragraph</p>

IMAGE:
<img src="image.jpg" alt="Description">

BODY:
<body>Visible content</body>

SECTION:
<section>
  <h2>Title</h2>
  <p>Text</p>
</section>

DIV (generic container):
<div>Content</div>

LINK:
<a href="https://example.com">Visit</a>

LISTS:
<ul><li>Item</li></ul>
<ol><li>Item</li></ol>

EMPHASIS:
<em>Emphasis</em>
<strong>Strong importance</strong>

FIGURE:
<figure>
  <img src="cat.jpg" alt="Cat">
  <figcaption>Caption</figcaption>
</figure>

MAIN & FOOTER:
<main>Main content</main>
<footer>Footer</footer>

ID (unique):
<h1 id="title">Title</h1>

CLASS (reusable):
<div class="box red-box"></div>

HTML ENTITIES:
&amp; &lt; &gt;

CSS LINK:
<link rel="stylesheet" href="./styles.css">

JAVASCRIPT:
<script src="app.js"></script>

HTML BOILERPLATE:
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Page</title>
</head>
<body></body>
</html>

META DESCRIPTION (SEO):
<meta name="description" content="Page description">

OPEN GRAPH TAGS:
<meta property="og:title" content="Title">
<meta property="og:type" content="website">
<meta property="og:image" content="image-url">
<meta property="og:url" content="https://example.com">

IFRAME:
<iframe src="https://example.com" allowfullscreen></iframe>

AUDIO:
<audio src="audio.mp3" controls loop muted></audio>

VIDEO:
<video src="video.mp4" controls loop muted poster="img.jpg"></video>

MULTIPLE AUDIO SOURCES:
<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
</audio>

TARGET ATTRIBUTE:
<a href="url" target="_self">Same tab</a>
<a href="url" target="_blank">New tab</a>
<a href="url" target="_parent">Parent frame</a>
<a href="url" target="_top">Top window</a>

PATH SYNTAX:
/ = separator
. = current directory
.. = parent directory

PATH EXAMPLES:
./favicon.ico
../src/index.css

ABSOLUTE PATH:
<a href="https://example.com/image.png">Image</a>

RELATIVE PATH:
<a href="about.html">About</a>

LINK STATES (CSS ORDER: link → visited → hover → focus → active):
a:link { color: blue; }
a:visited { color: purple; }
a:hover { color: red; }
a:focus { color: green; }
a:active { color: black; }

KEY POINTS:
HTML = structure
IDs are unique
Classes are reusable
Relative paths for internal links
Absolute paths for external links
Correct link-state order matters
