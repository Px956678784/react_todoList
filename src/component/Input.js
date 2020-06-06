import React, { Component } from 'react';

class input extends Component {
    render() {
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="listInput">Add things</label>
                    <input type="text" className="form-control" id="listItemInput" placeholder="Add new todo" onChange={this.props.onChange} />
                    <button className="btn btn-primary" onClick={this.props.submmit}>Add Item</button>
                </div>
            </form>
        )
    }

}

export default input