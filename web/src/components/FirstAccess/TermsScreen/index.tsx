import React from 'react';

import Terms from '../../../utils/Terms';
import Checkbox from '../../Checkbox';
import TruncatedContainer from '../../TruncatedContainer';

function TermsScreen() {
    return (
        <TruncatedContainer title="Termos de Uso" className="terms-container">
            <Terms  className="terms-text" />
            <Checkbox label="Li e concordo com os Termos de Uso" name="according"/>
        </TruncatedContainer>
    )
}

export default TermsScreen