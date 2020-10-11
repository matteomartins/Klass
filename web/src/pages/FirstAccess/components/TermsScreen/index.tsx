import React from "react";
import Checkbox from "../../../../components/Checkbox";
import TruncatedContainer from "../../../../components/TruncatedContainer";

import Terms from "../../../../utils/Terms";

import "./styles.css";

function TermsScreen() {
    return (
        <TruncatedContainer title="Termos de Uso" className="terms-container">
            <Terms className="terms-text" />
            <Checkbox
                label="Li e concordo com os Termos de Uso"
                name="according"
            />
        </TruncatedContainer>
    );
}

export default TermsScreen;
