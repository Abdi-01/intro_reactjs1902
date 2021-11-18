import React from 'react';
import Card from '../components/Card';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <div>
                    <h1>Home Page</h1>
                </div>
                <div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime tenetur, nostrum nisi quia, placeat itaque illum minus consequuntur fugiat quam dicta ratione accusantium cumque corrupti, libero inventore accusamus magnam! Alias?
                    </p>
                    <button className="btn btn-primary">Submit</button>
                </div>
                <div className="d-flex flex-wrap">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        );
    }
}

export default HomePage;