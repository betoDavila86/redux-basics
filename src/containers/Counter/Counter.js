import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {

    render() {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
                <CounterControl label="Add 5" clicked={this.props.onAddCounter} />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtractCounter} />
                <div>
                    <button onClick={this.props.onStoreResult}>Store result</button>
                </div>
                <div>
                    <ul style={{ listStyle: 'none' }}>
                        {this.props.storedResults.map(({ value, id }) => {
                            return <div key={id} style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '5px' }}>
                                <li>
                                    {value}
                                </li>
                                <button style={{ cursor: 'pointer' }} onClick={() => this.props.onDeleteResult(id)}>Delete</button>
                            </div>
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.counter,
        storedResults: state.results
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({ type: 'INCREMENT' }),
        onDecrementCounter: () => dispatch({ type: 'DECREMENT' }),
        onAddCounter: () => dispatch({ type: 'ADD', value: 5 }),
        onSubtractCounter: () => dispatch({ type: 'SUBTRACT', value: 5 }),
        onStoreResult: () => dispatch({ type: 'STORE_RESULT' }),
        onDeleteResult: (id) => dispatch({ type: 'DELETE_RESULT', resultId: id })
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);