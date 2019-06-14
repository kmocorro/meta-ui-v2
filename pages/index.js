import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Dashboard from '../components/Dashboard';

const Index = () => (
    <div className="homepage">
        <div className="homepage-sub">
            <Navbar/>
            <Sidebar/>
            <Dashboard/>
            <style jsx>{`
                .homepage{
                    max-width: 100%;
                    display: flex;
                    padding-top:69px;
                    webkit-box-align: center;
                    align-items: center;
                    flex-direction: column;
                }
                .homepage-sub{
                    max-width: 1034px;
                    display: flex;
                    align-items: flex-start;
                    padding-top: 110px;
                    margin: 0px auto;
                }
            `}
            </style>
            <style global jsx>{`
                html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
                    margin: 0;
                    padding: 0;
                    border: 0;
                    font-size: 100%;
                    font: inherit;
                    vertical-align: baseline;
                }
                body, input, textarea, button, select {
                    font-family: fakt-web, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
                    font-weight: 400;
                    font-size: 14px;
                    -webkit-font-smoothing: antialiased;
                    -moz-osx-font-smoothing: grayscale;
                }
            `}
            </style>
        </div>
    </div>
    
)

export default Index;