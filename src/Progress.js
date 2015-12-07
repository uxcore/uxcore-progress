/**
 * Progress Component for uxcore
 * @author vincent.bian
 *
 * Copyright 2014-2015, Uxcore Team, Alinw.
 * All rights reserved.
 */
import React from 'react';
import assign from 'object-assign';

const prefixCls = 'kuma-progress';

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

export default Line;
