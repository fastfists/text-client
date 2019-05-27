import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { SpringSystem, MathUtil } from 'rebound';

export default class Scroll extends Component {

    constructor(props, ...rest) {
        super(props, ...rest);
        this.handleSpringUpdate = this.handleSpringUpdate.bind(this);
    }

    componentDidMount() {
        this.springSystem = new SpringSystem();
        this.spring = this.springSystem.createSpring();
        this.spring.addListener({ onSpringUpdate: this.handleSpringUpdate });
        this.scrollToBottom.bind(this);
    }

    componentWillUnmount() {
        this.springSystem.deregisterSpring(this.spring);
        this.springSystem.removeAllListeners();
        this.springSystem = undefined;
        this.spring.destroy();
        this.spring = undefined;
    }

    getScrollTop() {
        return this.refs.scrollbars.getScrollTop();
    }

    getScrollHeight() {
        return this.refs.scrollbars.getScrollHeight();
    }

    getHeight() {
        return this.refs.scrollbars.getHeight();
    }

    scrollToBottom() {
        this.refs.scrollbars.scrollToBottom();
    }

    scrollTop(top) {
        const { scrollbars } = this.refs;
        const scrollTop = scrollbars.getScrollTop();
        const scrollHeight = scrollbars.getScrollHeight();
        const val = MathUtil.mapValueInRange(top, 0, scrollHeight, scrollHeight * 0.2, scrollHeight * 0.8);
        this.spring.setCurrentValue(scrollTop).setAtRest();
        this.spring.setEndValue(val);
    }

    handleSpringUpdate(spring) {
        const { scrollbars } = this.refs;
        const val = spring.getCurrentValue();
        scrollbars.scrollTop(val);
    }

    render() {
        setTimeout(() => this.scrollToBottom(),10);
        return (
            <Scrollbars {...this.props} ref="scrollbars" />
        );
    }
}