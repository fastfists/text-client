import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

export class SideBar extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <Scrollbars style={{ height: 750 }}>
                    <ListGroup>
                        {this.props.contacts.map(number =>
                            <ListGroup.Item onClick={(e) => this.props.setNumber(number)}>
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