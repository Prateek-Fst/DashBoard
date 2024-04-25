import React from 'react'
import styles from "./DashBoard.module.css"
export default function DashBoard() {
    return (
        <div className={styles.main}>
            <div className={styles.nav}>
                <div className={styles.btns}>
                    <select name="" id="">
                        <option value="Patients">Patients</option>
                    </select>
                    <input type="text" className={styles.inp1} placeholder=" Search                                                                                                   &#128269;" />
                    <button className={styles.add}> <d class="fa-solid fa-plus"> </d> Add new </button>
                </div>
                <button className={styles.bell}><d class="fa-solid fa-bell"></d></button>
                <img src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" className={styles.img1} />
            </div>
            <div className={styles.dis}>
                <div className={styles.dash}>
                    DashBoard
                    <div className={styles.dbtns}>
                        <div>  <button className={styles.dbtn}><i class="fa-regular fa-user"></i> <br />Patients</button></div>
                        <div>  <button className={styles.dbtn}><i class="fa-regular fa-square-minus"></i> <br />HR</button></div>
                        <div>  <button className={styles.dbtn}><i class="fa-solid fa-filter"></i> <br />Labs</button></div>
                        <div>  <button className={styles.dbtnp}><i class="fa-solid fa-shop"></i> <br />Pharma</button></div>
                        Processes
                        <div>  <button className={styles.dbtn}><i class="fa-solid fa-address-card"></i> <br />Registration</button></div>
                        <div>  <button className={styles.dbtn}><i class="fa-regular fa-file"></i> <br />Consultation</button></div>
                        <div>  <button className={styles.dbtn}><i class="fa-solid fa-eye-dropper"></i> <br />Tests & Reports</button></div>
                        <div>  <button className={styles.dbtnb}><i class="fa-solid fa-money-bill"></i> <br />Billings</button></div>
                    </div>

                </div>
                <div className={styles.data}>
                    <div className={styles.bar}>
                        <e class="fa-solid fa-users"> </e> Consultants
                    </div>
                    <div className={styles.filter}>
                        <button className={styles.fbtn}> Filter</button>
                        <select name="" id="" className={styles.select}>
                            <option value="Select Range">Select Range</option>


                        </select>
                        <input type="radio" id="sum" name="data" className={styles.inp2} />
                        <label htmlFor="sum">Summary</label>
                        <input type="radio" id="sum" name="data" className={styles.inp2} />
                        <label htmlFor="sum">Branch Wise</label>
                    </div>

                    <div className={styles.flex}>
                        <div className={styles.c}>
                            <div className={styles.ele}>
                                <div>
                                    <span className={styles.name}>Consultant Accounts</span> <br />
                                    <span className={styles.bold}>90/900 </span> <br />
                                    Today/Period
                                </div>
                                <div className={styles.f3}>
                                    <i class="fa-solid fa-users"></i>
                                </div>
                            </div>
                        </div>
                        <div className={styles.ca}>
                            <div className={styles.ele}>
                                <div>
                                    <span className={styles.name}>Consultations</span> <br />
                                    <span className={styles.bold}>11/25 </span> <br />
                                    Today/Period
                                </div>
                                <div className={styles.f2}>
                                    <i class="fa-solid fa-pen-to-square"></i>
                                </div>
                            </div>
                        </div>
                        <div className={styles.l}>
                            <div className={styles.ele}>
                                <div>
                                    <span className={styles.name}>Labs</span> <br />
                                    <span className={styles.bold}>25/560 </span> <br />
                                    Today/Period
                                </div>
                                <div className={styles.f1}>
                                    <i class="fa-solid fa-money-bill"></i>
                                </div>
                            </div>
                        </div>
                        <div className={styles.d}>
                            <div className={styles.ele}>
                                <div>
                                    <span className={styles.name}>DietPlans</span> <br />
                                    <span className={styles.bold}>25/250 </span> <br />
                                    Today/Period
                                </div>
                                <div className={styles.fonts}>
                                    <i class="fa-solid fa-money-check"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.table}>
                        <div className={styles.cons}>
                            <h3>Consultants</h3>
                            <div>
                                <i class="fa-solid fa-arrow-right"></i>
                                <i class="fa-solid fa-arrow-down"></i>
                            </div>
                        </div>
                        <table>

                            <tr>
                                <th>NAME</th>
                                <th>PATIENT COUNT</th>
                                <th>LABS</th>
                                <th>DIET PLANS</th>
                            </tr>
                            <tr>
                                <td>John Smith</td>
                                <td>12</td>
                                <td>3</td>
                                <td>6</td>
                            </tr>
                            <tr>
                                <td>Jan Doe</td>
                                <td>8</td>
                                <td>2</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td>Mark Johnson</td>
                                <td>6</td>
                                <td>1</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>Mary Lee</td>
                                <td>10</td>
                                <td>4</td>
                                <td>8</td>
                            </tr>
                            <tr>
                                <td>David Chen</td>
                                <td>14</td>
                                <td>5</td>
                                <td>9</td>
                            </tr>
                        </table>
                    </div>

                </div>
            </div>


        </div>
    )
}
