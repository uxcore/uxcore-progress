import React from 'react';
import PropTypes from 'prop-types';
import assign from 'object-assign';

const defaultProps = {
  strokeWidth: 1,
  trailWidth: 1,
};

class Circle extends React.Component {

  render() {
    const props = assign({}, this.props);
    const prefixCls = props.prefixCls;
    const strokeWidth = props.strokeWidth;
    const radius = (50 - strokeWidth / 2);
    const pathString = `M 50,50 m 0,-${radius}
        a ${radius},${radius} 0 1 1 0,${2 * radius}
        a ${radius},${radius} 0 1 1 0,-${2 * radius}`;
    const len = Math.PI * 2 * radius;
    const pathStyle = {
      strokeDasharray: `${len}px ${len}px`,
      strokeDashoffset: `${((100 - props.percent) / 100 * len)}px`,
      transition: 'stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease',
    };

    let progressInfo;
    let textStyle = {
      lineHeight: `${props.size}px`,

    };

    if (props.showInfo === true) {
      const type = props.infoType
      if (props.status === 'exception') {
        progressInfo = (
          <span style={textStyle} className={`${prefixCls}-circle-text`}>
            {type === 'icon' ? <i className="icon-caution" /> : type === 'percent' ? `${props.percent}%` : 'Error'}
          </span>
          );
      } else if (props.status === 'success') {
        progressInfo = (
          <span style={textStyle} className={`${prefixCls}-circle-text`}>
            {type === 'icon' ? <i className="icon-success" /> : type === 'percent' ? `${props.percent}%` : 'Success'}
          </span>
          );
      } else {
        progressInfo = (
          <span style={textStyle} className={`${prefixCls}-circle-text`}>{props.percent}%</span>
          );
      }
    }

    ['strokeWidth', 'trailWidth'].forEach((item) => {
      if (item === 'trailWidth' && !props.trailWidth && props.strokeWidth) {
        props.trailWidth = props.strokeWidth;
        return;
      }
      if (!props[item]) {
        props[item] = defaultProps[item];
      }
    });

    return (
      <div
        className={`kuma-progress-circle-wrap status-${props.status}`}
        style={{ width: props.size, height: props.size }}
      >

        <svg className="kuma-progress-circle" viewBox="0 0 100 100">
          <path
            className="kuma-progress-circle-trail"
            d={pathString}
            strokeWidth={props.trailWidth}
            fillOpacity="0"
          />
          <path
            className="kuma-progress-circle-path"
            d={pathString}
            strokeLinecap="round"
            strokeWidth={props.strokeWidth}
            fillOpacity="0"
            style={pathStyle}
          />
        </svg>
        {progressInfo}
      </div>
    );
  }
}

Circle.displayName = 'Progress-Circle';
Circle.propTypes = {
  prefixCls: PropTypes.string,
  status: PropTypes.oneOf(['normal', 'exception', 'success']),
  percent: PropTypes.number,
  strokeWidth: PropTypes.number,
  size: PropTypes.number,
  showInfo: PropTypes.bool,
  infoType: PropTypes.string
};
Circle.defaultProps = {
  prefixCls: 'kuma-progress',
  status: 'normal', // exception active
  percent: 0,
  strokeWidth: 6,
  size: 156,
  showInfo: true,
  infoType: 'icon'
};

export default Circle;
