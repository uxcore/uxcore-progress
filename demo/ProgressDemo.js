/**
 * Progress Component Demo for uxcore
 * @author vicent.bian
 *
 * Copyright 2014-2015, Uxcore Team, Alinw.
 * All rights reserved.
 */

import classnames from 'classnames';
import {Line, Circle} from '../src';

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
                    <Line percent={30} />
                    <Line percent={70} status="exception" />
                    <Line percent={100} />
                    <Line percent={50} showInfo={false} />
                    <Circle percent={30} />
                    <Circle percent={70} status="exception" />
                    <Circle percent={100} status="success" />
                    <Circle percent={50} showInfo={false} />
                </div>
                <div style={{ width: 170 }}>
                    <p>适合放在较狭窄的区域内。</p>
                    <Line percent={30} strokeWidth={5} />
                    <Line percent={70} strokeWidth={5} status="exception" />
                    <Line percent={100} strokeWidth={5} />
                </div>
                <div>
                    <p>动态展示。</p>
                    <Line percent={this.state.percent} />
                    <Circle percent={this.state.percent} />
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
