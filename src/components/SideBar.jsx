import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { ListGroup, FormControl } from 'react-bootstrap';
import $ from 'jquery';

export class SideBar extends Component {

    constructor() {
        super();
        this.state = {
            query: ""
        }
        this.setQuery('214')
    }

    query = (number) => {
        if (number === "") {
            return true
        }
        return typeof number === 'string' && number.includes(this.state.query);
    }

    setQuery = (query) => {
        this.setState({ query: query })
    }

    componentDidMount() {
        var { setNumber } = this.props;
        console.log(this.props);
        setNumber("12144028404");
    }

    setNumber = (e, number) => {
        this.props.setNumber(number);
        var element = $(`#${number}`);
        element.addClass("active");
    }

    render() {
        var numbers = this.props.contacts.filter(this.query);
        return (
            <>
                <FormControl type="text" placeholder="Search" onChange={(e) => this.setState({ query: e.target.value })} />
                <Scrollbars style={{ height: 750 }}>
                    <ListGroup>
                        {numbers.map(number =>
                            <ListGroup.Item action s={this.state.query} href={`#${number}`} id={number} key={number} onClick={(e) => this.setNumber(e, number)}>
                                {number}
                            </ListGroup.Item>
                        )}
                    </ListGroup>
                </Scrollbars>
            </>
        );
    }
}
export default SideBar;
