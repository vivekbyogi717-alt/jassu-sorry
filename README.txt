JASSU SORRY WEBSITE
====================

This is a phone-first website made around your teddy-gift apology.

FILES
-----
index.html
style.css
script.js

HOW TO RUN
----------
Keep all 3 files in the same folder.
Double-click index.html on a laptop/PC.
It opens in Chrome.

HOW TO CHANGE THE MESSAGE
-------------------------
Open index.html in Notepad or VS Code.
Every screen is a section like:
<section class="screen" id="s1">

You can directly change:
- headings
- paragraphs
- button text
- names
- emojis

The main apology letter is in SCREEN 4.

HOW TO CHANGE NAMES
-------------------
Search for:
My Jassu
My Jass Manak
My Vivuu

Replace them with whatever you want.

HOW TO CHANGE COLORS
--------------------
Open style.css.
At the top:
--pink:#ff72b7;
--pink2:#ff3d98;

Change the hex values.

HOW TO ADD A PHOTO
------------------
Create an images folder next to index.html.
Put a photo there, e.g. jassu.jpg.

Inside any screen add:
<img src="images/jassu.jpg" class="photo">

Then add this CSS to style.css:
.photo{
  width:280px;
  height:280px;
  object-fit:cover;
  border-radius:22px;
  border:2px solid #ff79bd;
}

HOW TO ADD ANOTHER SCREEN
-------------------------
Copy an existing screen.
Change id="s8" to id="s9".
Add:
<button onclick="go(9)">Next →</button>

Then in script.js change:
const total=8;
to:
const total=9;

IMPORTANT
---------
Don't rename style.css or script.js unless you also change the filenames in index.html.
Keep the files together.

SHARING AS A REAL LINK
----------------------
WhatsApp cannot turn a local index.html file into a public website.
You need to upload this folder to a web host.

Easy method:
1. Create a GitHub account.
2. Create a new repository.
3. Upload index.html, style.css and script.js.
4. Repository Settings -> Pages.
5. Select Deploy from a branch.
6. Select the main branch and /root.
7. Save.
8. GitHub will give you a public https://...github.io/... link.
9. Send that link on WhatsApp.
10. She taps it -> Chrome/browser opens the webpage.

Do not send the ZIP if you want her to simply tap and view it.
Send the public website link.
