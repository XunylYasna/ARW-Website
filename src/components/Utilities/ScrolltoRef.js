import React from "react";

const ScrollToRef = (ref) => {
    ref.current.scrollIntoView({
        behavior: "smooth"
    })
}

export { ScrollToRef }