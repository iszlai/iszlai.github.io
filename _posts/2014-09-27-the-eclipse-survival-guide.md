---
layout: post
title: "The Eclipse Survival Guide"
modified:
categories: 
excerpt:
tags: [eclipse,java,guide,scala,tutorial]
image:
  feature:
date: 2014-09-27T13:27:23+02:00
---
 

After starting with Java, Scala, C++ or any other language you probably start using an IDE, well there are many out there for everyones personal preferences I'll mainly focus on Eclipse.It's an Open Source IDE, mostly provided in Java, but it supports other the development languages by being extended with plug-ins.

##Turn on line numbers 

Seems trivial but it's really useful when you work on a team or want to find something at a specific line. All you have to do is right click the gutter and choose **Show line numbers**. It's a simple tip but often useful and you only have to do it once.
<br/><br/>
![alt text](/images/lineNum.gif "Show line numbers")


##Go to line 

Similarly you see a line number inside a log regarding an Exception all you do is fire up go to line using **Ctrl+L** type the line number and hit enter.
<br/><br/>
![alt text](/images/gotoLine.gif "Go to line")

##Settings search##

Eclipse is a huge platform and is continually growing it's really hard to find keep in mind where you can find the appropriate settings. Luckily theres a search for the settings.
Let's try to find the JRE settings as it's commonly needed. So all you do is go to settings which can be found at **Window** >> **Preferences** and type what you are searching for like **JRE**
<br/><br/>
![alt text](/images/settingsSearch.gif "Settings")

##Type hierarchy##
Ever wanted to know the whole supertype tree of a class of a class or to find the abstract type ? Using supertype hierarchy with **Ctrl**+**T** .
<br/><br/>
![alt text](/images/supertype.gif "Supertype")

##Comment out a block##
When in a hurry you want to check something out, and don't want the change to last, you could just easily comment out a block using **Ctrl**+**Shift**+**C**.
After you're done repeat the same to undo it. This is also available for majority of languages so don't have to type `<!-- -->` in xml ever again.Side note never leave commented out code blocks in code, it's messy and it makes the code harder to read, and there really is no reason to keep it anyway thats what the source control is for.
<br/><br/>
![alt text](/images/comment.gif "Comment")

##Extract method##
While refactoring you find a huge chunk of code that really should be a a method. So you could just create a method copy the chunk out, figure out the parameters and make it work. Or you could the IDE do most the work and just check the result. All you do is **Alt**+**Shift**+**M** and give a method name.As you can see eclipse really does a pretty fine job on it's own and saves you a lot of time.
<br/><br/>
![alt text](/images/extract.gif "Extract method")

##Delete a line##
Don't you just have it when there are empty lines in the wrong place ? Using **Ctrl**+**D** you delete the current line, it's really like Vim's DD command if that ain't a reason to love it, i don't know what is.
<br/><br/>
![alt text](/images/delete.gif "Delete a line")

##Find references##
You want to change something but you aren't sure if it's used by anything else or what else might be affected. In this case all you do is **Right-click**+**References**+**scope** (like workspace, project, etc) 
<br/><br/>
![alt text](/images/refferences.gif "References")

##Generate code##
Often you find yourself writing a bit boiler plate code like getters/setters, toString, simple constructors.All this can be done by eclipse for you in a pretty find grained matter. All you do is **Right-click**+**Source**+what code you want to generate.
You can choose things like:

* Getters and Setters
* Delegate methods
* hashCode() and equals()
* toString()
* Constructors

This bit can make you really productive but also please be careful don't let the IDE make design decisions for you if you don't need it don't add it it will be just a cluttered code.
<br/><br/>
![alt text](/images/generate.gif "Generate")


##Open resource##
You are working on a project with hundreds of files packages and a complex structure if you have sort of memory about what a file is called you can try opening it with open resources .To use it all you need is **Ctrl**+**Shift**+**Name** ,and you can also use `?` for any character match and `*` any string match
<br/><br/>
![alt text](/images/openRes.gif "Open resources")

##Open declaration/implementation##
When you see a method or an object and you would like to know where it's declared or where it's implemented you just hold down **Ctrl** + **click** 
<br/><br/>
![alt text](/images/openDec.gif "Open declaration/implementation")

##Search##
The search in eclipse is really powerful and has many functionalities to cover all of them it would take quite a lot.The two main things I would like to point out are 

* Search and replace in file 

The typical file search and replace theres not a lot to talk about it. All you do is **Ctrl**+**F** and then the usual functionality you would expect is there.

* Search workspace

A more powerful search with filtering capabilities on file type and search scope.I couldn't live without it on a windows box it's almost as good as `grep` .To use it all you need is **Ctrl** + **H** 
<br/><br/>
![alt text](/images/searchH.gif "Search")
