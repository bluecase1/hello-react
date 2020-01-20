import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
    static defaultProps = {
        name: '기본 이름'
        
    }

    static propTypes = {
        name: PropTypes.string,
        age: PropTypes.number.isRequired //필수로 존재해야 하며 숫자
    }

    state = {
        number: 0
    }
    
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         number: 0
    //     }
    // }

    render() {
        return (
            <div>
                <p>
                New Component<br/>
                My name is {this.props.name}
                </p>
                <p>I am {this.props.age}</p>
                <p>number : {this.state.number}</p>
                <button onClick={()=> {
                    this.setState({
                        number: this.state.number+1
                    })
                }
                }>Add</button>
                
                <button onClick={()=> {
                    this.setState({
                        number: 0
                    })
                }
                }>Reset</button>
            </div>
        )
    }
}

//MyComponent.proptype = {
//    name: PropTypes.string // name type is string
//}


export default MyComponent;