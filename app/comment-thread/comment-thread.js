import React from 'react'
import styled from 'styled-components'
import contract from './contrat'
import { Button } from '@aragon/ui'
import aclContract from './acl-contract'
//import Web3 from 'web3'


export class CommentThread extends React.Component {

    state = { test: '', currentComment: '', comments: [] }
    contract

    constructor(props) {
        super(props)
        this.init()
        window.comments = this
        //window.web33 = Web3
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

    async acl() {
        let aclAddr = await observableToPromise(this.props.aragonApp.call('acl'))
        this.aclAddr = aclAddr
        let w = new Web3(web3.currentProvider)
        //let acl = w.eth.contract(aclContract.abi).at(aclAddr)
        let acl = this.props.aragonApp.external(aclAddr, aclContract.abi)
        this.acl = acl

        //acl.ACL_APP_ID(console.log)
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
            <Main>
               {this.state.comments.map((comment, i) => 
                    <Comment>{comment.message}</Comment>
                )}
                <br /><br />
                <InputBox type="text" value={this.state.newComment} onChange={e => this.setState({ currentComment: e.target.value })} />
                <Button onClick={this.postComment}>Send</Button>
            </Main>
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

const Main = styled.div`
    width: 300px;
`

const Comment = styled.div`
    background: white;
    border-radius: 4px;
    border: 1px solid #eee;
    padding: 10px;
    margin-bottom: 8px;
`

const InputBox = styled.input`
    width: 236px;
    height: 43px;
    border: none;
`