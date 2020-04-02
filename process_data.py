import pandas as pd
import matplotlib.pyplot as plt
import numpy as np


def main(states=None):
    df = pd.read_csv('covid-19-data/us-states.csv')
    for state in states:
        df_state = df[df.state == state]
        plt.plot(df_state.date, np.log(df_state.cases), label=state)
    x_ticks, _ = plt.xticks()
    plt.xticks(x_ticks[::10], rotation=45)
    plt.title('Covid cases by date')
    plt.ylabel('Log of # of cases')
    plt.xlabel('Date')
    plt.legend(loc='best')
    plt.tight_layout()
    plt.savefig('plots/covid_plot.png')


if __name__ == '__main__':
    main(states=['Washington', 'California', 'New York', 'Michigan'])
