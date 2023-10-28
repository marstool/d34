
all:

m:
	vim Makefile

gs:
	git status

gd:
	git diff

gc:
	git commit -a 

gcX:
	git commit -a -m "`date `"

ga: 
	git add .

X: gcX up

