import React from 'react';
import Chip from '@material-ui/core/Chip';
// import { translate } from 'react-admin';
// import segments from '../segments/data';

const styles = {
    main: { display: 'flex', flexWrap: 'wrap' },
    chip: { margin: 4 },
};

const SegmentsField = ({ record }) => (
    <span style={styles.main}>
         {console.log(record) } 
        {record.tags &&
            record.tags.map(segment => (
                <Chip
                    key={segment}
                    style={styles.chip}
                    label= {segment} //{segment} //{translate(segments.find(s => s.id === segment).name)}
                />
            ))}
    </span>
);

// const TranslatedSegmentsField = translate(SegmentsField);

const TranslatedSegmentsField = SegmentsField;
TranslatedSegmentsField.defaultProps = {
    addLabel: true,
    source: 'tags',
};

export default TranslatedSegmentsField;
