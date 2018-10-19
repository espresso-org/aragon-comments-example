import React from 'react'
import contract from './contrat'


export class CommentThread extends React.Component {

    state = { test: '', currentComment: '' }
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

        this.contract.events().subscribe(event => {
            console.log('NEW EVENT: ', event)
            this.updateThread()
        })

        this.updateThread()
    }

    updateThread = async () => {
        const test = await observableToPromise(this.contract.test())
        this.setState( { test })
    }

    postComment = async () => {
        this.props.aragonApp.postComment(this.state.currentComment).subscribe(console.log)
    }

    render() {
        return (
            <div>
                test: {this.state.test}
                <br /><br />
                <input type="text" value={this.state.newComment} onChange={e => this.setState({ currentComment: e.target.value })} /><br/>
                <button onClick={this.postComment}>Send</button>
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