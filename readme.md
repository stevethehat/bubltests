#Bubl Designer Notes

This is a full vNext MVC application but i have added a static page version in the wwwroot folder (index.html) which works just as well..

As a reminder to myself just run 'python -m SimpleHTTPServer' in that folder and browse http://localhost:8000.. tho this doesn't appear to be able to load the video for some reason :( 403!!

If you have vNext and mono (latest version from brew) installed.

update everyting with dnvm, then to run it.. 

1. go into the folder and run 'dnu restore'
2. run 'dnu build'
3. run './run.sh' (this kills any running versions of kestrel and starts it.. it doesn't seem to close cleanly)

It will be on http://localhost:5001


## Folder structure

