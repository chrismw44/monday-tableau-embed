import React, { useRef, useEffect } from 'react';

const { tableau } = window;

function TableauEmbed() {
    const ref = useRef(null);
    const url = "YOUR_TABLEAU_SERVER_DASHBOARD_SHARING_URL"
    ;

    const options = {
        device: "desktop"
    };

    function initViz() {
        let viz = window.tableau.VizManager.getVizs()[0];

        if (viz) {

            viz.dispose();

        }
        new tableau.Viz(ref.current, url, options);
    }

    useEffect(() => {
        initViz()
    }, [])

    return (
        <div>
            <div ref={ref}></div>
        </div>
    );
}

export default TableauEmbed;