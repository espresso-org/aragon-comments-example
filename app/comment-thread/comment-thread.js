import React from 'react'
import contract from './contrat'


export class CommentThread extends React.Component {

    state = { test: 0, contractAddr: 0 }
    contract

    constructor(props) {
        super(props)
        this.init()
        window.comments = this
    }

    async init() {
        await wait(500)
        const contractAddr = await observableToPromise(this.props.aragonApp.call('getAragonCommentsApp'))
        this.contract = this.props.aragonApp.external(contractAddr, contract.abi)

        this.updateThread()
    }

    async updateThread() {
        const test = await observableToPromise(this.contract.test())
        this.setState( { test })
    }

    render() {
        return (
            <div>
                contract: {this.state.contractAddr} <br />
                test: {this.state.test}

            </div>
        )
    }

}


function observableToPromise(observable) {
    return new Promise(resolve => {
        observable.subscribe(resolve)
    })
}


function wait(ms) {
    return new Promise(res => setTimeout(res, ms))
}