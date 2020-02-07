import React from 'react';
import MenuItem from '../menu-item/menu-item.component';

import './directory.style.scss';
import { connect } from 'react-redux';
import { selectDirectorySection } from './directoy.selectors';
import { createStructuredSelector } from 'reselect';

const Directory = ({sections}) => (
        <div className="directory-menu">
            {
                sections.map(({id, ...otherSectionProps}) => (
                    <MenuItem key = {id} {...otherSectionProps} />
                ))
            }
        </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySection
});

export default connect(mapStateToProps)(Directory);