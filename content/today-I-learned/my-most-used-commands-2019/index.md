---
title: "My Most Used Commands in 2019"
date: "2019-12-25"
spoiler: A quick look at how I spend most of my days.
---

I made the switch from a Lenovo to a Macbook Pro 2017 at work back in August. Since now I have a decent terminal I decided that it would be fun to check my most used commands for this year. Which can be found by running:

```bash
history | awk '{print $2}' | sort | uniq -c | sort -rn | head -n 10
```

And this is the result:

```textile
1242 git
1088 cd
794 ls
324 j
280 mvn
206 code
186 ssh
182 ps
157 docker
136 scp
```

All normal stuff except for **j**, which is a faster way to navigate in your filesystem. I highly recommend for you to check its [Github](https://github.com/wting/autojump) and give it a try.

### Command explanation

- **history**: has the history of all commands used. It has a limitation of the size of records stored, which varies according to the shell. A useful thing to know is that you can execute commands without them being stored in the history by adding a space at the beginning of the command.
- **awk '{print \$2}'**: I won't even attempt to describe `awk` here, it's enough to know that this will get just the second word of the history command which corresponds to the command itself.
- **sort**: self-explanatory.
- **uniq -c**: by default `unique` outputs a list of each unique line, the `-c` option precedes each line with the count of the number of times this line appeared.
- **sort -rn**: `-r` sorts in reverse order and `-n` is for numeric sorting.
- **head -n 10**: prints the beginning of the input and the `-n NUM` argument prints only the first _NUM_ lines. By default `head` will only print the first 10 lines, but I like to be a little more verbose in order to be explicit.

## Personal computer

On my personal computer, my history goes all the way back to 28 February 2018, which is when I installed my distro. I don't want to filter by time right now, so here's the list dated back to 2018:

```textile
1417 git
1388 cd
906 sudo
856 yarn
737 ls
654 python
345 npm
240 j
236 code
194 pip
```

Comparing the two list it's interesting to see that although I use almost exclusively **Java** at work, at home I mostly use **JavaScript** (mostly React and Node) and **Python**.

> I definitely had fun doing this and will try to make it a yearly tradition from now on!
