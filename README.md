# Plain Web Utilities

Utility programs written in javascript on a white backdrop.
Organized using Jekyll.
The design of the pages focus on speed of use.

# Adding a New Utility
If adding a page called 'example':
* Copy the shell page and rename it to 'example'
* In index.html:
  * Add 'type:utility' to the YAML header
  * (Optional) Update the 'order' value in the YAML header to where you'd like it in the sidebar
  * Make your page... updating shell.js if necessary.

# Building
```
docker build -t plainwebutils .
```
# Running
```
docker run -p 80:80 plainwebutils
```
