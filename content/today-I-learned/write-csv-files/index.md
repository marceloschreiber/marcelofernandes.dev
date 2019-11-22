---
title: "Writing CSV with Python"
date: "2019-11-22"
spoiler: Plain simple but useful for future me.
---

Again, having to generate large files at work, this time a **CSV** (**C**omma **S**eparated **V**alues). I decided to use Python because it is deadly simple for this:

```python
import csv

counter = 1
number_of_rows = 3
header = ['COLUMN_1', 'COLUMN_2']

with open('huge_file.csv', 'w', newline='') as csv_file:
    csv_writer = csv.writer(csv_file, delimiter=',', lineterminator='!##!\n')
    csv_writer.writerow(header)

    while counter <= number_of_rows:
        counter_str = str(counter)
        csv_writer.writerow(['DATA_' + counter_str, 'DATA_' + counter_str])
        counter = counter + 1
```

The generated file:

```csv
COLUMN_1,COLUMN_2!##!
DATA_1,DATA_1!##!
DATA_2,DATA_2!##!
DATA_3,DATA_3!##!
```

For more complex cases [Pandas](https://pandas.pydata.org/) is probably better.

![Image of an actual panda for maximazing joke potencial](./panda.jpg)
