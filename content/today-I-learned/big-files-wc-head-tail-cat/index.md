---
title: "Saving the Day: wc, head, tail, cat"
date: "2019-11-20"
spoiler: Dealing with large files is a pain.
---

So at work we're in a project that requires manipulation of **large XML files**. I use a **MacBook Pro with 16GB of RAM** and can't open these files with vi, vim, visual code, etc.

Luckly for me one of my tasks was to generate an **even bigger** file by combining some already large XML files. 😃

These were the format of the original files:

```xml
<!-- file1.xml -->
<?xml version="1.0" encoding="UTF-8"?>
<root>
    <!-- content of file 1 -->
</root>

<!-- file2.xml -->
<?xml version="1.0" encoding="UTF-8"?>
<root>
    <!-- content of file 2 -->
</root>

<!-- file3.xml -->
<?xml version="1.0" encoding="UTF-8"?>
<root>
    <!-- content of file 3 -->
</root>
```

_P.S: the files don't have indentation, it's just a looong line to make things better._

My goal was to have this:

```xml
<!-- huge_file.xml -->
<?xml version="1.0" encoding="UTF-8"?>
<root>
    <!-- content of file 1 -->
    <!-- content of file 2 -->
    <!-- content of file 3 -->
</root>
```

Since I couldn't open the files I used the command line, more precisely the GNU tools: [wc](https://linux.die.net/man/1/wc), [head](https://linux.die.net/man/1/head), [tail](https://linux.die.net/man/1/tail) and [cat](https://linux.die.net/man/1/cat).

### Step 1: Remove \</root> from the end of the first file

```bash
$ wc -c file1.xml
#84 file1.xml

$ head -c 77 file1.xml > new_file1.xml
```

`wc -c` returns the number of character in the file. `head -c n` return the top **n** characters of the file. So I returned the total amount of characters minus 7 (\</root>). Finally, the `>` redirects the output to a **new_file1.xml**.

### Step 2: Remove the <?xml...?> and \</root> from the second file

```bash
$ wc -c file2.xml
#84 file2.xml

$ tail -c 38 file2.xml > new_file2_temp.xml
$ wc -c new_file2_temp.xml
#38 new_file2_temp.xml
$ head -c 31 new_file2_temp.xml > new_file2.xml
```

By now you probably guessed what `tail -c` does. The same principle applies, the difference is that the I used an intermediate file to be extra save.

### Step 3: Remove the <?xml ...?> for the third file

```bash
$ wc -c file3.xml
#84 file3.xml
$ tail -c 38 file3.xml > new_file3.xml
```

### Step 4: Merge the files

```bash
$ cat new_file1.xml new_file2.xml new_file3.xml > huge_file.xml
```

Which gives me the file I wanted:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<root>
    <!-- content of file 1 -->
    <!-- content of file 2 -->
    <!-- content of file 3 -->
</root>
```
