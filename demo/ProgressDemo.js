/**
 * Progress Component Demo for uxcore
 * @author vicent.bian
 *
 * Copyright 2014-2015, Uxcore Team, Alinw.
 * All rights reserved.
 */

let classnames = require('classnames');

let Progress = require('../src');

class Demo extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            percent: 0
        };
    }

    increase() {
        let percent = this.state.percent + 10;
        if (percent > 100) {
            percent = 100;
        }
        this.setState({ percent });
    }
    decline() {
        let percent = this.state.percent - 10;
        if (percent < 0) {
            percent = 0;
        }
        this.setState({ percent });
    }

    render() {
        return (
            <div>
                <div>
                    <p>标准的进度条</p>
                    <Progress percent={30} />
                    <Progress percent={50} status="active" />
                    <Progress percent={70} status="exception" />
                    <Progress percent={100} />
                    <Progress percent={50} showInfo={false} />
                </div>
                <div style={{ width: 170 }}>
                    <p>适合放在较狭窄的区域内。</p>
                    <Progress percent={30} strokeWidth={5} />
                    <Progress percent={50} strokeWidth={5} status="active" />
                    <Progress percent={70} strokeWidth={5} status="exception" />
                    <Progress percent={100} strokeWidth={5} />
                </div>
                <div>
                    <p>动态展示。</p>
                    <Progress percent={this.state.percent} />
                    <button className="kuma-button kuma-button-secondary kuma-button-sm" onClick={this.decline.bind(this)}>
                        <i className="kuma-icon kuma-icon-stop"></i>
                    </button>
                    <button className="kuma-button-secondary kuma-button-sm" onClick={this.increase.bind(this)}>
                        <i className="kuma-icon kuma-icon-follow"></i>
                    </button>
                </div>
            </div>
        );
    }
};

module.exports = Demo;
