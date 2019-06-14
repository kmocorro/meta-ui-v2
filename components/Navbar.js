import Link from 'next/link';
import React from 'react';

const Navbar = () => (
    <nav>
        <div className="pagename">
            <Link href={`/`}>
                <a>meta/fab4</a>
            </Link>
            <div className="username">
                <ul>
                    <li>
                        <Link as={`/u/admin`} href={`/user?id=1`}>
                            <a>kmocorro</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
        <style jsx>{`
            nav {
                height: 69px;
                background-color: rgba(255, 255, 255, 0.8);
                position: fixed;
                width: 100%;
                top: 0px;
                left: 0px;
                z-index: 15;
                border-bottom: 1px solid rgb(238, 238, 238);
            }
            .pagename {
                font-family: 'Arial';
                display: flex;
                -webkit-box-align: center;
                height: 100%;
                max-width: 1034px;
                margin: 0px auto
            }
            .username {
                display: flex;
                list-style: none;
                flex-grow: 1;  
            }
            a {
              text-decoration: none;
              display: inline-block;
              padding-top: .3125rem;
              padding-bottom: .3125rem;
              margin-left: 1rem;
              margin-right: 1rem;
              font-size: 1.0rem;
              line-height: 3.5;
              white-space: nowrap;
              color: black;
            }
            a:hover {
              opacity: 0.6;
            }
            ul {
                margin-left: auto;
                list-style: none;
                margin-bottom: 0px;
                margin-top: 0px;
            }
        `}</style>
    </nav>
)

export default Navbar;