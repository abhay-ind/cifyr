import { INR } from 'currency-symbol-map/map'
import React from 'react'
import { Card } from 'react-bootstrap'
import { connect } from 'react-redux'

export const PostCard = (props) => {
    return (
        <div>
            <Card className="p-2 mb-1">
                <h5>{props.name}</h5>
                <p className="text-truncate">{props.desc}</p>
                <h5>{INR+' '+props.amount}</h5>
                <span style={{fontSize:13}} className="">Created: {props.createdAt}</span>
                <span style={{fontSize:13}} className="mb-2">Last Modified: {props.modifiedAt}</span>
                <h5>Investors</h5>
            {/* Investor Card */}
            </Card>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(PostCard)
