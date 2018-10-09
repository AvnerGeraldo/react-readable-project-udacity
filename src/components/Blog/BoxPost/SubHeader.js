import React from 'react'
import moment from 'moment'
import PropTypes from 'prop-types'

const SubHeader = (props) => {
    const { category, timestampPost } = props
    const dateTimePost = moment.unix(timestampPost)
    return (
        <div>
            {dateTimePost.format('MMMM, D')} of {dateTimePost.format('YYYY')} at {dateTimePost.format('HH:mm:ss')} hs
            <br />
            Category: {category}
        </div>
    )
}

const { string, number } = PropTypes

SubHeader.propTypes = {
    category: string.isRequired,
    timestampPost: number.isRequired
}

export default SubHeader