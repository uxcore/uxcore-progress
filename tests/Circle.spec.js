import expect from 'expect.js';
import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Progress from '../src';

Enzyme.configure({ adapter: new Adapter() });

describe('<Progress.Circle />', () => {
  it('render default props', () => {
    const wrapper = mount(<Progress.Circle />);
    // percent
    expect(wrapper.props().percent).to.equal(0);
    // status
    expect(wrapper.props().status).to.equal('normal');
    expect(wrapper.find('.kuma-progress-circle-wrap').hasClass('status-normal')).to.equal(true);
    // strokeWidth
    expect(wrapper.props().strokeWidth).to.equal(6);
    // showInfo
    expect(wrapper.props().showInfo).to.equal(true);
    // size
    expect(wrapper.props().size).to.equal(156);
  });

  it('render 50 percent', () => {
    const wrapper = mount(<Progress.Circle percent={50} />);
    expect(wrapper.props().percent).to.equal(50);
  });

  it('render status is exception', () => {
    const wrapper = mount(<Progress.Circle status="exception" />);
    expect(wrapper.props().status).to.equal('exception');
    expect(wrapper.find('.kuma-progress-circle-wrap').hasClass('status-exception')).to.equal(true);
  });
  it('render status is active', () => {
    const wrapper = mount(<Progress.Circle status="active" />);
    expect(wrapper.props().status).to.equal('active');
    expect(wrapper.find('.kuma-progress-circle-wrap').hasClass('status-active')).to.equal(true);
  });

  it('render strokeWidth is 30', () => {
    const wrapper = mount(<Progress.Circle strokeWidth={30} />);
    expect(wrapper.props().strokeWidth).to.equal(30);
  });

  it('render showInfo is false', () => {
    const wrapper = mount(<Progress.Circle showInfo={false} />);
    expect(wrapper.props().showInfo).to.equal(false);
  });

  it('render 200 size', () => {
    const wrapper = mount(<Progress.Circle size={200} />);
    expect(wrapper.props().size).to.equal(200);
  });
});
