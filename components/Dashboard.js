import React from 'react';
import Details from './Details';

function getDashboardDetails() {
    return [
        {id: '1', name: 'Rank 1', value: 3, compare: 'WTS'},
        {id: '2', name: 'Rank 2', value: 3, compare: 'RENA'},
        {id: '3', name: 'Rank 3', value: 2, compare: 'KURDEX'},
        {id: '4', name: 'Rank 4', value: 2, compare: 'OTHERS'},
        {id: '4', name: 'Rank 5', value: 2, compare: 'NDEP_PDRIVE'}
    ]
}

const Dashboard = () => (
    <div className="dashboard-content">
        <div className="dashboard-grid">
            <div className="dashboard-header">
                <h2 className="dashboard-title">Dashboard</h2>
                
            </div>
            <div className="dashboard-body">
                <div className="dashboard-sub">
                    <div className="dashboard-belly">
                        {getDashboardDetails().map(dash => (
                            <div key={dash.id} className="dashboard-category">
                                <span className="category-name">
                                {dash.name}
                                </span>
                                <strong className="category-value">
                                {dash.value}
                                </strong>
                                <small className="category-compare">
                                {dash.compare}
                                </small>
                            </div>
                        ))}
                    </div>
                </div>
                <Details/>
            </div>
        </div>
        <style jsx>{`
            .dashboard-content{
                width: 836px;
                margin-left: 38px;
                padding-bottom: 50px;
            }
            .dashboard-grid{
                display: grid;
                grid-template-columns: 1fr;
                gap: 10px 10px;
            }
            .dashboard-header{
                display: flex;
                -webkit-box-pack: justify;
                justify-content: space-between;
                flex-wrap: wrap;
                -webkit-box-align: center;
                align-items: center;
            }
            .dashboard-title{
                flex: 1 1 0%;
                margin: 0px;
                font-size: 26px;
                color: rgb(33, 33, 33);
                font-weight: 400;
                line-height: 1.3;
            }
            .dashboard-body{
                display: flex;
                flex-direction: column;
                -webkit-box-pack: start;
                justify-content: flex-start;
            }
            .dashboard-sub{
                display: flex;
                flex-direction: row;
                -webkit-box-flex: 1;
                flex-grow: 1;
                min-height: 134px;
            }
            .dashboard-belly{
                display: flex;
                flex-direction: row;
                -webkit-box-pack: center;
                justify-content: left;
                -webkit-box-flex: 1;
                flex-grow: 1;
                min-height: 84px;
                text-align: left;
                font-size: 16px;
                color: rgb(102, 102, 102);
                margin-top: 20px;
                padding: 14px 0px;
                border-top: 1px solid rgb(241, 241, 241);
            }
            .dashboard-category{
                width: 50%;
            }
            .category-name{
                display: block;
                text-transform: uppercase;
                font-size: 12px;
                letter-spacing: 1px;
            }
            .category-value{
                color: rgb(0, 0, 0);
                font-size: 34px;
                font-weight: 400;
                height: 50px;
                display: block;
            }
            .category-percentage{
                color: gray;
                display: block;
                font-size: 12px;
                font-weight: 400;
            }
            .category-compare{
                opacity: 0.6;
                display: block;
                font-size: 12px;
                font-weight: 400;
            }
            .dashboard-booknow{
                margin-top: 0px;
                margin-left: 16px;
                display: flex;
                -webkit-box-pack: start;
                justify-content: flex-start;
            }
            .span-booknow{
                margin-right: 0px;
            }
            .booknow-button{
                display: inline-flex;
                vertical-align: middle;
                -webkit-box-align: center;
                align-items: center;
                -webkit-box-pack: center;
                justify-content: center;
                min-width: 96px;
                min-height: 48px;
                line-height: 48px;
                margin-top: 0px;
                margin-left: 0px;
                text-transform: uppercase;
                white-space: nowrap;
                letter-spacing: 1px;
                font-size: 12px;
                font-weight: 500;
                color: rgb(250, 250, 250);
                opacity: 1;
                cursor: pointer;
                background: #FF9800;
                border: 1px solid rgb(240, 240, 240);
                border-radius: 3px;
                padding: 0px 24px;
                transition: border-color 0.25s ease 0s, background 0.25s ease 0s;
            }
            .booknow-plus{
                margin-right: 8px;
                display: inline-block;
                line-height: 1;
                width: 16px;
                height: 16px;
            }
            .booknow-label{
                display: inline-block;
                vertical-align: middle;
                line-height: normal;
                margin-top: 1px;
            }

        `}</style>
    </div>
)


export default Dashboard;