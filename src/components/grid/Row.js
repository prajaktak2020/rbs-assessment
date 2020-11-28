import React from 'react';
import classNames from 'classnames';

const Row = ({ className, children, style }) => (
    <div className={classNames('row', className)} style={style}>
        {children}
    </div>
);


export default Row;