# NYT Covid data

This is a simple program that compiles the [NYT Covid data](https://github.com/nytimes/covid-19-data/) into a
simple graph of Covid cases by time for a set of states.

To run:

```
usage: process_data.py [-h] --states STATES

optional arguments:
  -h, --help       show this help message and exit
  --states STATES  Comma delimited string of states
```

### Virtual env setup
The dependencies are contained in the `requirements.txt file.

```Bash
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```
