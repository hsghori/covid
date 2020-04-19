# NYT Covid Data Dashboard

This web application provides basic visualization of time series coronavirus data provided by
[The New York Times](https://github.com/nytimes/covid-19-data). You can
[access the application](https://hsghori.github.io/covid/) on web and mobile (though phone screen s will likely be
too small to take advantage of the visualization). You must have JavaScript enabled in your browser to use this
application. 

While there are a lot of Covid visualization tools out there for example:
- [Johns Hopkins](https://coronavirus.jhu.edu/us-map)
- [New York Times](https://www.nytimes.com/interactive/2020/us/coronavirus-us-cases.html)
- [WHO](https://covid19.who.int/)

These dashboards are often clunky, confusing, and difficult to navigate. They also don't usually offer the ability
to easily compare different locales, change graph scales (use logarithmic scales), etc. This project attempts to
address these problems by providing a clean, easy to use interface to visualize covid data.

Currently this application offers the following options:
- Select state(s)
- Select graph scale (regular, log2, ln, log)
- Select window size (for smoothing)
- Show new cases (default is to show cumulative counts)
