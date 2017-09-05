# Plain Web Utilities

Utility programs written in javascript on a white backdrop. The design of the pages
focus on speed of use.

Organized using jekyll. Utility pages have 'type: utility' in the YAML.

Uses wsgi_scripts to run some linux commands:
*youtube-dl

# Building
```
docker build -t plainwebutils .
```
# Running
```
docker run -p 80:80 plainwebutils
```
