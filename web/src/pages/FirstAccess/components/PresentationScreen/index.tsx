import React from "react";

import TruncatedContainer from "../../../../components/TruncatedContainer";
import YouTube from "react-youtube";

function PresentationScreen() {
    return (
        <TruncatedContainer
            title="Apresentação"
            className="presentation-container"
        >
            <YouTube className="video" videoId="Zc1OOS4aMbU" />
        </TruncatedContainer>
    );
}

export default PresentationScreen;
