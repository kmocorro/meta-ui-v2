import React from 'react';
import Link from 'next/link';

const Sidebar = () => (
    <sidebar>
        <div className="sidebar-width">
            <div className="sidebar-content">
                <ul>
                    <li>
                        <Link as={`/`} href={`/`}>
                            <a>Spares</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
        <style jsx>{`
            sidebar {
                position: sticky;
                top: 110px;
            }
            .sidebar-width{
                width: 160px;
            }
            .sidebar-content{
                display: block;
            }
            ul{
                list-style: none;
            }
            a{
                display: flex;
                align-items: flex-start,
                cursor: pointer;
                color: rgb(51, 51, 51);
                font-size: 13px;
                word-break: break-word;
                padding-top: 8px;
                padding-bottom: 8px;
                text-decoration: none;
            }
        `}
        </style>
    </sidebar>
)

export default Sidebar;
