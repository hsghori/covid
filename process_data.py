import pandas as pd
import matplotlib.pyplot as plt
import numpy as np
import argparse


def main(states=None):
    df = pd.read_csv('covid-19-data/us-states.csv')
    for state in states:
        df_state = df[df.state == state]
        plt.plot(df_state.date, np.log2(df_state.cases), label=state)
    x_ticks, _ = plt.xticks()
    plt.xticks(x_ticks[::7], rotation=45)
    plt.grid(axis='x')
    plt.title('Covid cases by date')
    plt.ylabel('Log2 of # of cases')
    plt.xlabel('Date')
    plt.legend(loc='best')
    plt.tight_layout()
    plt.savefig('plots/covid_plot.png')


if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('--states', type=str, dest='states', required=True, help='Comma delimited string of states')
    args = parser.parse_args()
    states = [s.strip() for s in args.states.split(',')]
    main(states=states)
