import pandas as pd
import matplotlib.pyplot as plt
import numpy as np
import argparse


def main(states=None):
    df = pd.read_csv('covid-19-data/us-states.csv')
    fig, axes = plt.subplots(1, 2, figsize=(10, 5))
    longest_dates = []
    for state in states:
        df_state = df[df.state == state]
        axes[0].plot(df_state.date, np.log2(df_state.cases), label=state)
        axes[1].plot(df_state.date, df_state.cases.diff(), label=state)
        dates = df_state.date.to_numpy()
        if len(dates) > len(longest_dates):
            longest_dates = dates

    x_ticks = list(range(len(longest_dates)))[::7]
    labels = longest_dates[x_ticks]
    axes[0].set_xticks(x_ticks)
    axes[0].set_xticklabels(labels, rotation=45)
    axes[0].grid(axis='x')
    axes[0].set_title('Covid cases by date')
    axes[0].set_ylabel('Log2 of # of cases')
    axes[0].set_xlabel('Date')
    axes[0].legend(loc='best')

    axes[1].set_xticks(x_ticks)
    axes[1].set_xticklabels(labels, rotation=45)
    axes[1].grid(axis='x')
    axes[1].set_title('New cases by date')
    axes[1].set_ylabel('New cases')
    axes[1].set_xlabel('Date')
    axes[1].legend(loc='best')

    plt.tight_layout()
    plt.savefig('plots/covid_plot.png')


if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('--states', type=str, dest='states', required=True, help='Comma delimited string of states')
    args = parser.parse_args()
    states = [s.strip() for s in args.states.split(',')]
    main(states=states)
