import React from 'react'
import { Card } from 'react-bootstrap'
import { connect } from 'react-redux'

export const TransactionHistory = (props) => {
    return (
        <div>
            <Card className="w-50 m-3 p-3">
                 
            </Card>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionHistory)
