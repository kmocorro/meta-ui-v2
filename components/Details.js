import React from 'react';

export default () => {

    const data = [
        {id: 1, rank: 1, qtr: 'Q2', wk: 'W23', toolGrp: 'NDEP_PDRIVE', category: 'PM', usageFrequency: 'Quarterly', qDemand: 1, qCons: 300, budget: 1, usageRate: '29900%', linUseRate: '38899%', toolOwner: 'Mike Abril', itemNumber: 104580, desc: 'TUBING 1/4', imgSrc: '~/SPARES/Images/ENGR-NDEP_PDRIVE.png'},
        {id: 2, rank: 2, qtr: 'Q2', wk: 'W23', toolGrp: 'RENA', category: 'PM', usageFrequency: 'Annually', qDemand: 1, qCons: 20, budget: 1, usageRate: '1900%', linUseRate: '2499%', toolOwner: 'Dennis Ibalio', itemNumber: 101762, desc: 'MANN FILTERMODEL C113', imgSrc: '~/SPARES/Images/ENGR-RENA.png'},
        {id: 3, rank: 3, qtr: 'Q2', wk: 'W23', toolGrp: 'WTS_METROLOGY', category: 'PM', usageFrequency: 'Semi-Annual', qDemand: 1, qCons: 5, budget: 1, usageRate: '400%', linUseRate: '549%', toolOwner: 'Isagani Palentinos', itemNumber: 515573, desc: 'ACTUATOR LUWTS5-M44', imgSrc: '~/SPARES/Images/ENGR-WTS_METROLOGY.png'}
    ]

return (
    <div className="details-section">
        <div className="details-content">
            <div className="details-header">
                <h1>Spares Details</h1>
            </div>
            {
                data ?
                    <>
                        {
                            data.map(data => (
                                <div key={data.id} className="card">
                                    <div className="card-body">
                                    <img className="avatar" src={data.imgSrc} />
                                        <div className="card-title">
                                            <div className="card-item">
                                                <h4>{data.itemNumber}</h4>
                                                <h6 className="card-owner text-muted">@{data.toolGrp} </h6>
                                            </div>
                                            <p className="card-text">{data.desc}</p>
                                            <small>{data.toolOwner}  &#183;  {data.category} &#183; {data.qDemand} &#183; {data.qCons} &#183; {data.usageFrequency} &#183; {data.usageRate} &#183; {data.linUseRate}</small>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </>
                :
                <>
                    <p className="text-muted">nothing to display</p>
                </>
            }
        </div>
        <style jsx>{`
            .avatar{
                width: 48px;
                height: 48px;
                border-radius: 50%;
                -moz-force-broken-image-icon: 1;
                float: left;
                margin-top: 3px;
                margin-left: -58px;
                position: absolute;
            }
            small{
                font-size: 80%;
                font-weight: 400;
            }
            .card-item{
                display: flex;
            }
            .card-owner{
                padding-left: 4px;
                line-height: 2;
                text-transform: lowercase;
            }
            .details-header{
                margin-top: 1em;
                font-weight: 500;
                text-transform: capitalize;
                padding-bottom: 6px;
                letter-spacing: 0.5px;
                border-bottom: 1px solid rgb(208, 210, 211);
                font-size: 14px;
                color: rgb(33, 33, 33);
                line-height: 1.3;
            }
            .card{
                position: relative;
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                -webkit-box-orient: vertical;
                -webkit-box-direction: normal;
                -ms-flex-direction: column;
                flex-direction: column;
                min-width: 0;
                word-wrap: break-word;
                background-color: #fff;
                background-clip: border-box;
                border-left: 1px solid rgb(208, 210, 211);
                border-bottom: 1px solid rgb(208, 210, 211);
                border-right: 1px solid rgb(208, 210, 211);
                border-radius: 0;
            }
            .card-body{
                -webkit-box-flex: 1;
                -ms-flex: 1 1 auto;
                flex: 1 1 auto;
                padding: 1.25rem;
                margin-left: 3.25rem;
            }
            .card-title {
                margin-bottom: 0.75rem;
            }
            .card-text {
                margin-top: 0;
                margin-bottom: 1rem;
            }
            h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6 {
                margin-bottom: 0.5rem;
                font-weight: 400;
                line-height: 1.2;
            }
            h4{
                font-size: 1.3125rem;
            }
            h6{
                font-size: 0.875rem;
            }
            .text-muted{
                color: #8E8C84 !important;
            }
        `}</style>
    </div>
)

}

