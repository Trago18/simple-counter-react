import React from 'react'
import PropTypes from 'prop-types';

const Box = (props) => {

    return (
        <div className="border border-dark rounded px-4 py-3 fs-1">
            {props.icon}
            {props.seconds}
        </div>
    )
}

Box.propTypes = {
    icon: PropTypes.object,
    seconds: PropTypes.number
}

export default Box
