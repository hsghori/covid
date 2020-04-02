# NYT Covid data

This is a simple program that compiles the [NYT Covid data](https://github.com/nytimes/covid-19-data/) into a
simple graph of Covid cases by time for a set of states.

To run:

```
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python process_data.py
```

THe plot should be available in `plots/covid_plot.png`. You can customize the states that you want to consider by
updating the list of states in `process_data.py` file. 
