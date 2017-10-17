/**
 * Progress Component for uxcore
 * @author vincent.bian
 *
 * Copyright 2014-2015, Uxcore Team, Alinw.
 * All rights reserved.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import assign from 'object-assign';

const prefixCls = 'kuma-progress';

class Line extends React.Component {
  static displayName = 'Progress-Line';
  static propTypes = {
    status: PropTypes.oneOf(['normal', 'exception', 'active', 'success']),
    showInfo: PropTypes.bool,
    percent: PropTypes.number,
    strokeWidth: PropTypes.number,
  }
  static defaultProps = {
    percent: 0,
    strokeWidth: 10,
    status: 'normal', // exception active
    showInfo: true
  }
  render(){
    let props = assign({}, this.props);

    if (parseInt(props.percent, 10) === 100) {
      props.status = 'success';
    }

    let progressInfo;
    let fullCls = '';

    if(props.showInfo === true){
      if (props.status === 'exception') {
        progressInfo = (
          <span className={`${prefixCls}-line-text`}>
            <i className="icon-caution"></i>
          </span>
        );
      } else if (props.status === 'success') {
        progressInfo = (
          <span className={`${prefixCls}-line-text`}>
            <i className="icon-success"></i>
          </span>
        );
      } else {
        progressInfo = (
          <span className={`${prefixCls}-line-text`}>{props.percent}%</span>
        );
      }
    } else {
      fullCls = ` ${prefixCls}-line-wrap-full`;
    }

    const percentStyle = {
      width: props.percent + '%',
      height: props.strokeWidth
    };

    const outerStyle = {
      paddingTop: (22 - props.strokeWidth) / 2,
    };

    return (
      <div className={`${prefixCls}-line-wrap fn-clear status-${props.status}${fullCls}`}>
        {progressInfo}
        <div className={`${prefixCls}-line-outer`} style={outerStyle}>
          <div className={`${prefixCls}-line-inner`}>
            <div className={`${prefixCls}-line-bg`} style={percentStyle}></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Line;
