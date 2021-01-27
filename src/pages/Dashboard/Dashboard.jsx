import React from 'react'
import charts from './components/charts.png'

function Dashboard({ activeAccount }) {
    return (
        <div className="dashboard main-content-container px-4 container-fluid">
            {activeAccount === 'Alice'
                ?
                <div>
                    <h2>Dashboard</h2>
                    <div className="row statsWrapper">
                        <div className="col-md-4 smallStats">
                            <p className="statsTitle">Total Open Negotiations</p>
                            <p className="statsValue">4</p>
                        </div>
                        <div className="col-md-4 smallStats">
                            <p className="statsTitle">Total Closed Negotiations</p>
                            <p className="statsValue">321</p>
                        </div>
                        <div className="col-md-4 smallStats">
                            <p className="statsTitle">Negotiations This Week</p>
                            <p className="statsValue">24</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 tableWrapper">
                            <table className="table">
                                <caption>Referrer</caption>
                                <tbody className='items'>
                                    <tr >
                                        <th>
                                            VESSEL NAME
                                </th>
                                        <th>
                                            CHARTERER
                                </th>
                                        <th>
                                            LOAD RANGE
                                </th>
                                        <th>
                                            LAYCAN
                                </th>
                                        <th>
                                            STATUS
                                </th>
                                    </tr>

                                    <tr>
                                        <td>Black Coffee</td>
                                        <td>Shell</td>

                                        <td>Lavera</td>
                                        <td>24/03/21</td>

                                        <td>Counter received <div className="newUpdates"></div></td>
                                    </tr>
                                    <tr>
                                        <td>Americano</td>
                                        <td>BP Shipping</td>

                                        <td>Amsterdam</td>
                                        <td>29/03/21</td>

                                        <td>Counter sent</td>
                                    </tr>
                                    <tr>
                                        <td>Flat White</td>
                                        <td>Mercuria</td>

                                        <td>Novorossiysk - Tuapse</td>
                                        <td>17/03/21</td>

                                        <td>Counter received <div className="newUpdates"></div></td>
                                    </tr>
                                    <tr>
                                        <td>Black Coffee</td>
                                        <td>BP Shipping</td>

                                        <td>Alexandria (Egypt)</td>
                                        <td>26 - 27/03/21 </td>

                                        <td>Counter sent</td>
                                    </tr>
                                </tbody>
                            </table>
                            <button href="#" className="tableLink">Show more</button>
                        </div>
                    </div>
                    <div className="row statsWrapper">
                        <div className="col-md-4 smallStats">
                            <p className="statsTitle"> Average Negotiation<br />Duration</p>
                            <p className="statsValue">10 hours</p>
                        </div>
                        <div className="col-md-4 smallStats">
                            <p className="statsTitle">Successfully Completed<br />Negotiations</p>
                            <p className="statsValue">67%</p>
                        </div>
                        <div className="col-md-4 smallStats">
                            <p className="statsTitle">Total Open Negotiations pm.</p>
                            <img src={charts} width='100%' alt="" />
                        </div>
                    </div>
                </div>
                : <h2>Please, switch to Alice's view if you'd like to see the Dashboard</h2>
            }
        </div>
    )
}

export default Dashboard