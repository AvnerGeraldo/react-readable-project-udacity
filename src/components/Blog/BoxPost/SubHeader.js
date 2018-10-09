import React from 'react'
import moment from 'moment'
import PropTypes from 'prop-types'

//Helpers
import capitalize from '../../../helpers/capitalize'

const SubHeader = (props) => {
    const { author, category, timestampPost } = props
    const dateTimePost = moment(timestampPost)
    return (
        <div>
            {dateTimePost.format('MMMM, D')} of {dateTimePost.format('YYYY')} at {dateTimePost.format('HH:mm:ss')} hs
            <br />
            Category: {category}
            <br />
            Author: {capitalize(author)}
        </div>
    )
}

const { string, number } = PropTypes

SubHeader.propTypes = {
    author: string.isRequired,
    category: string.isRequired,
    timestampPost: number.isRequired
}

export default SubHeader