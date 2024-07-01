import * as React from "react";
export default function MyTable({ tableTitle, titles, displayRows }: { tableTitle: string, titles: string[], displayRows: any[] }) {
    const displayTitles = titles.map(t => <th key={t} scope="col">{t}</th>)
    return <div className="col-lg-12" >
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{tableTitle}</h5>
                <div className="table-responsive">
                    <table className="table" style={{textAlign:"center"}}>
                        <thead>
                            <tr>
                                {displayTitles}
                            </tr>
                        </thead>
                        <tbody>
                            {displayRows}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
}