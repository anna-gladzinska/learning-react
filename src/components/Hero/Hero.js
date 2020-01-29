import React from 'react';
import styles from './Hero.scss';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

class Hero extends React.Component {

  static propTypes = {
    titleText: PropTypes.node.isRequired,
    image: PropTypes.string,
  }
  render() {
    return (
      <header className={styles.component}>
        <h2 className={styles.title}>{ReactHtmlParser(this.props.titleText)}</h2>
        <img className={styles.image} src={this.props.image} alt="Space"></img>
      </header>);
  }
}


export default Hero;
