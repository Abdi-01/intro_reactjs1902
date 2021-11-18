import React from 'react';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        let nama = "navbar"
        return (
            <div>
                <ul id="navbar" style={{ backgroundColor: "red", display: "flex", listStyleType: "none" }}>
                    <li>Home</li>
                    <li>Products</li>
                    <li>About</li>
                </ul>
            </div>
        );
    }
}

export default Navbar;