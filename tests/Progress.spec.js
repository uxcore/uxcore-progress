import expect from 'expect.js';
import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import Progress from '../src';

Enzyme.configure({ adapter: new Adapter() });

describe('<Progress.Line />', () => {
  it('render default props', () => {
    const wrapper = mount(<Progress.Line />);
    // all
    expect(wrapper.find('.kuma-progress-line-bg').html())
    .to.equal('<div class="kuma-progress-line-bg" style="width: 0%; height: 10px;"></div>');
    // percent
    expect(wrapper.props().percent).to.equal(0);
    // status
    expect(wrapper.props().status).to.equal('normal');
    expect(wrapper.find('.kuma-progress-line-wrap').hasClass('status-normal')).to.equal(true);
    // strokeWidth
    expect(wrapper.props().strokeWidth).to.equal(10);
    // showInfo
    expect(wrapper.props().showInfo).to.equal(true);
  });

  it('render 50 percent', () => {
    const wrapper = mount(<Progress.Line percent={50} />);
    expect(wrapper.props().percent).to.equal(50);
    expect(wrapper.find('.kuma-progress-line-bg').html())
      .to.equal('<div class="kuma-progress-line-bg" style="width: 50%; height: 10px;"></div>');
  });

  it('render status is exception', () => {
    const wrapper = mount(<Progress.Line status="exception" />);
    expect(wrapper.props().status).to.equal('exception');
    expect(wrapper.find('.kuma-progress-line-wrap').hasClass('status-exception')).to.equal(true);
  });
  it('render status is active', () => {
    const wrapper = mount(<Progress.Line status="active" />);
    expect(wrapper.props().status).to.equal('active');
    expect(wrapper.find('.kuma-progress-line-wrap').hasClass('status-active')).to.equal(true);
  });

  it('render strokeWidth is 30', () => {
    const wrapper = mount(<Progress.Line strokeWidth={30} />);
    expect(wrapper.props().strokeWidth).to.equal(30);
  });

  it('render showInfo is false', () => {
    const wrapper = mount(<Progress.Line showInfo={false} />);
    expect(wrapper.props().showInfo).to.equal(false);
  });
});
