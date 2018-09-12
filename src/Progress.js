import React from 'react';
import PropTypes from 'prop-types';
import assign from 'object-assign';

class Line extends React.Component {
  
  render() {
    const props = assign({}, this.props);
    const prefixCls = props.prefixCls;

    if (parseInt(props.percent, 10) === 100) {
      props.status = 'success';
    }

    let progressInfo;
    let fullCls = '';

    if (props.showInfo === true) {
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
      width: `${props.percent}%`,
      height: props.strokeWidth,
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

Line.displayName = 'Progress-Line';
Line.propTypes = {
  prefixCls: PropTypes.string,
  status: PropTypes.oneOf(['normal', 'exception', 'active', 'success']),
  showInfo: PropTypes.bool,
  percent: PropTypes.number,
  strokeWidth: PropTypes.number,
};
Line.defaultProps = {
  prefixCls: 'kuma-progress',
  percent: 0,
  strokeWidth: 10,
  status: 'normal', // exception active
  showInfo: true,
};

export default Line;
