import React from 'react'
import contract from './contrat'


export class CommentThread extends React.Component {

    state = { test: '', currentComment: '', comments: [] }
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
            this.updateThread()
        })

        this.updateThread()
    }

    updateThread = async () => {
        const commentsCount = await observableToPromise(this.contract.commentsCount())

        let comments = []
        
        for (let i = 0; i < commentsCount; i++)
            comments.push(await observableToPromise(this.contract.comments(i)))

        //const test = await observableToPromise(this.contract.getComment())
        this.setState( { comments })
    }

    postComment = async () => {
        this.props.aragonApp.postComment(this.state.currentComment).subscribe(console.log)
    }

    render() {
        return (
            <div>
               {this.state.comments.map((comment, i) => 
                    <div>comment #{i}: {comment.message}</div>
                )}
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