# Module 5 Week 4 Day 2 exercise

Declan Wilde — WEB 403

Start with `python3 -m http.server 4182` in this folder, then open http://localhost:4182. Use a server rather than opening files directly so Demo 3 can load its worker.

- Demo 1 keeps h1, p, h2, ul as the first four body elements. Each step performs the required DOM operation and displays its actual result. The same variables are available in DevTools.
- Demo 2 uses the starter quicksort and required arrays. Average O(n log n), worst O(n²). The PDF's O(log n) label is inaccurate for the whole sort.
- Demo 3 preserves the starter's intentionally repeated recursion (factorial-time), measures real timings, and runs in a worker. Its outputs are 1, 3628800, 479001600.
- Demo 4 calls exampleLinear(10), logging 0 through 9.
- Demo 5 deletes age before rendering, with buttons to compare rendering before/after deletion. Deleting a property does not update a string already displayed in the DOM.

Screenshots in `screenshots/` show the live results. No GAP submission has been made.
