import React from 'react';
import styles from './App.scss';
import PropTypes from 'prop-types';
import List from '../List/List.js';
import { pageContents, listData, settings } from '../../data/dataStore';
import Creator from '../Creator/Creator.js';

class App extends React.Component {
  state = {
    list: this.props.list || [],
  }

  static propTypes = {
    title: PropTypes.node,
    list: PropTypes.array,
  }

  addList(title) {
    this.setState(state => (
      {
        list: [
          ...state.list,
          {
            title,
          }
        ]
      }
    ));
  }

  render() {
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{pageContents.title}</h1>
        <h2 className={styles.subtitle}>{pageContents.subtitle}</h2>
        <List {...listData} />

        {this.state.list.map(({ title }) => (
          <List title={title} description={listData.description} image={listData.image} />
        ))
        }

        <Creator text={settings.listCreatorText} action={title => this.addList(title)} />
      </main>
    )
  }
}

export default App;