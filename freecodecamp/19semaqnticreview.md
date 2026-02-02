Semantic HTML Review

Importance of Semantic HTML

Structural hierarchy for heading elements:
It is important to use the correct heading element to maintain the structural hierarchy of the content. The h1 element is the highest level of heading and the h6 element is the lowest level of heading.

Presentational HTML elements:
Elements that define the appearance of content. Examples include deprecated elements such as center, big, and font.

Semantic HTML elements:
Elements that hold meaning and structure. Examples include header, nav, and figure.

Semantic HTML Elements

Header element:
Used to define the header of a document or section.
<header>
  <h1>CatPhotoApp</h1>
  <p>Welcome to our cat gallery.</p>
</header>

Main element:
Used to contain the main content of the web page.
<main>
  <section>
    <h2>Cat Photos</h2>
    <p>Browse adorable cat pictures.</p>
  </section>
</main>

Section element:
Used to divide up content into smaller sections.
<section>
  <h2>About Me</h2>
  <p>Hi, I am Jane Doe and I am a web developer.</p>
</section>

Navigation (nav) element:
Represents a section with navigation links.
<nav>
  <ul>
    <li><a href="#photos">Photos</a></li>
    <li><a href="#videos">Videos</a></li>
  </ul>
</nav>

Figure element:
Used to contain illustrations and diagrams.
<figure>
  <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg" alt="Two tabby kittens sleeping together on a couch." />
  <figcaption>Cats <strong>hate</strong> other cats.</figcaption>
</figure>

Emphasis (em) element:
Marks text that has stress emphasis.
<p>Never give up on <em>your</em> dreams.</p>

Idiomatic Text (i) element:
Used for highlighting alternative voice or mood, idiomatic terms from another language, technical terms, and thoughts.
<p>There is a certain <i lang="fr">je ne sais quoi</i> in the air.</p>

Strong Importance (strong) element:
Marks text that has strong importance.
<p><strong>Warning:</strong> This product may cause allergic reactions.</p>

Bring Attention To (b) element:
Used to bring attention to text that is not important for the meaning of the content.
<p>We tested the <b>SuperSound 3000</b>, <b>QuickCharge Pro</b>, and <b>Ecoclean Vacuum</b>.</p>

Description List (dl, dt, dd):
<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language</dd>
  <dt>CSS</dt>
  <dd>Cascading Style Sheets</dd>
</dl>

Block Quotation (blockquote) element:
Used to represent a section quoted from another source.
<blockquote cite="https://www.freecodecamp.org/news/learn-to-code-book/">
Can you imagine what it would be like to be a successful developer?
</blockquote>

Citation (cite) element:
Used to mark the title of the referenced work.
<p>- Quincy Larson, <cite>How to Learn to Code and Get a Developer Job</cite></p>

Inline Quotation (q) element:
Used to represent a short inline quotation.
<p><q cite="https://www.freecodecamp.org/news/learn-to-code-book/">Momentum is everything.</q></p>

Abbreviation (abbr) element:
Used to represent abbreviations or acronyms.
<p><abbr title="HyperText Markup Language">HTML</abbr> is the foundation of the web.</p>

Address element:
Used to represent contact information.

Time (time) element:
Used to represent a date or time.
<p>The reservations are for <time datetime="20:00">20:00</time>.</p>

Superscript (sup) element:
Used to represent superscript text.
<p>2<sup>2</sup> (2 squared) is 4.</p>

Subscript (sub) element:
Used to represent subscript text.
<p>CO<sub>2</sub></p>

Inline Code (code) element:
Used to represent a fragment of computer code.
<code>color: blue;</code>

Preformatted Text (pre) element:
Represents preformatted text.
<pre>
<code>
body {
  color: red;
}
</code>
</pre>

Unarticulated Annotation (u) element:
Used to represent inline text with non-textual annotation.
<p><u>inccccort</u> <u>spling</u> <u>issses</u></p>

Ruby Annotation (ruby) element:
Used for pronunciation or meaning explanations.
<ruby>
明日 <rp>(</rp><rt>Ashita</rt><rp>)</rp>
</ruby>

Strikethrough (s) element:
Used to represent content that is no longer accurate.
<p><s>Tomorrow's hike will be meeting at noon.</s></p>
<p>Due to unforeseen weather conditions, the hike has been canceled.</p>

Internal links:
Used to link to another section of the page.
<a href="#about-section">Go to About Section</a>
<section id="about-section">
  <h2>About</h2>
  <p>This is the about section of the page.</p>
</section>
