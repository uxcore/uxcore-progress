/**
 * Progress Component for uxcore
 * @author vicent.bian
 *
 * Copyright 2014-2015, Uxcore Team, Alinw.
 * All rights reserved.
 */
import React from 'react';
// import {Circle as Progresscircle} from 'rc-progress';
import assign from 'object-assign';

const prefixCls = 'kuma-progress';
// const statusColorMap = {
//   'normal': '#2db7f5',
//   'exception': '#ff6600',
//   'success': '#87d068'
// };

class Line extends React.Component {
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
                        <i className="anticon anticon-exclamation-circle"></i>
                    </span>
                );
            } else if (props.status === 'success') {
                progressInfo = (
                    <span className={`${prefixCls}-line-text`}>
                        <i className="anticon anticon-check-circle"></i>
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

        let percentStyle = {
            width: props.percent + '%',
            height: props.strokeWidth
        };

        return (
            <div className={`${prefixCls}-line-wrap fn-clear status-${props.status}${fullCls}`}>
                {progressInfo}
                <div className={`${prefixCls}-line-outer`}>
                    <div className={`${prefixCls}-line-inner`}>
                        <div className={`${prefixCls}-line-bg`} style={percentStyle}></div>
                    </div>
                </div>
            </div>
        );
    }
}
Line.displayName = "Progress-Line";
Line.propTypes = {
    status: React.PropTypes.oneOf(['normal', 'exception', 'active', 'success']),
    showInfo: React.PropTypes.bool,
    percent: React.PropTypes.number,
    strokeWidth: React.PropTypes.number
};
Line.defaultProps = {
    percent: 0,
    strokeWidth: 10,
    status: 'normal', // exception active
    showInfo: true
};

// class Circle extends React.Component {
//     render() {
//         let props = assign({}, this.props);
//
//         if (parseInt(props.percent, 10) === 100) {
//             props.status = 'success';
//         }
//
//         let style = {
//             'width': props.width,
//             'height': props.width,
//             'fontSize': props.width * 0.16 + 6
//         };
//         let progressInfo;
//         if (props.status === 'exception') {
//             progressInfo = (
//                 <span className={`${prefixCls}-circle-text`}>
//                     <i className="anticon anticon-exclamation"></i>
//                 </span>
//             );
//         } else if (props.status === 'success') {
//             progressInfo = (
//                 <span className={`${prefixCls}-circle-text`}>
//                     <i className="anticon anticon-check"></i>
//                 </span>
//             );
//         } else {
//             progressInfo = (
//                 <span className={`${prefixCls}-circle-text`}>{props.percent}%</span>
//             );
//         }
//
//         return (
//             <div className={`${prefixCls}-circle-wrap status-${props.status}`} >
//                 <div className={`${prefixCls}-circle-inner`} style={style}>
//                     <Progresscircle percent={props.percent}
//                         strokeWidth={props.strokeWidth}
//                         strokeColor={statusColorMap[props.status]} trailColor="#e9e9e9" />
//                     {progressInfo}
//                 </div>
//             </div>
//         );
//     }
// }
// Circle.propTypes = {
//     width: React.PropTypes.number,
//     percent: React.PropTypes.number,
//     strokeWidth: React.PropTypes.number,
//     status: React.PropTypes.oneOf(['normal', 'exception', 'active', 'success'])
// };
// Circle.defaultProps = {
//     width: 132,
//     percent: 0,
//     strokeWidth: 6,
//     status: 'normal' // exception
// };
//
// Circle.displayName = "Progress-Circle";
export default Line;

// export default {
//     Progress: Line,
//     ProgressCircle: Circle
// };
