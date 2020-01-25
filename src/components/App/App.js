import React from 'react';
import styles from './App.scss';
import PropTypes from 'prop-types';
import List from '../List/ListContainer.js';
// import Creator from '../Creator/Creator.js';

class App extends React.Component {
  // state = {
  //   list: this.props.list || [],
  // }

  static propTypes = {
    title: PropTypes.node,
    subtitle: PropTypes.node,
    lists: PropTypes.array,
  }

  // addList(title) {
  //   this.setState(state => (
  //     {
  //       list: [
  //         ...state.list,
  //         {
  //           title,
  //         },
  //       ],
  //     }
  //   ));
  // }

  render() {
    const { title, subtitle, lists } = this.props;
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
        {lists.map(listData => (
          <List key={listData.id} {...listData} />
        ))}

        {/* {this.state.list.map(({ title }) => (
          <List title={title} description={listData.description} image={listData.image} key={listData.key} />
        ))
        } */}

        {/* <Creator text={settings.listCreatorText} action={title => this.addList(title)} /> */}
      </main>
    );
  }
}

export default App;
