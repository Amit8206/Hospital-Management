import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Layout from '../../Components/Layout/Layout'
import SideBar from '../../Components/SideBar/SideBar'
import BarChart from "../../Components/Test/Charts/BarChart";
import LineChart from "../../Components/Test/Charts/LineChart";
import PieChart from '../../Components/Test/Charts/PieChart';
import { generatePubliucUrls } from '../../urlConfig';





const Dashboard = () => {

  const doctor = useSelector(state => state.doctor);
  const patient = useSelector(state => state.patient);

  const auth = useSelector(state => state.auth);
  const appointment = useSelector(state => state.appointment);
  const dispatch = useDispatch();


  const [userData, setUserData] = useState({
    labels: [],
    datasets: [
      {
        label: "",
        data: [],
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: [],
        borderWidth: 2,
      },
    ],
  });

  useEffect(() => {
    const fetchData = async () => {
      const url = 'http://localhost:8080/api/doctors/get_doctors'
      const label = [];
      const dataSet1 = [];
      await fetch(url).then((data) => {
        console.log("Api data", data)
        const res = data.json();
        return res
      }).then((res) => {
        console.log("ressss", res)
        for (const val of res.doctors) {
          label.push(val.firstname);
          dataSet1.push(val.patients)
          // labelSet.push(val.name)
        }
        // const filteredRecord = res.patients.find(label[0])
        // console.log(filteredRecord)
        // const name = res.patients.find(p => p.DoctorName === human.name);

        

        // const count = 1
        // var records = [];
        // for (let record of filteredRecord) {
        //   const duplicate_recorde_exists = label.find(r => r.doctorName === record.doctorName);
        //   if (duplicate_recorde_exists) {
        //     count = count + 1;
        //     continue;
        //   } else {
        //     records.push(record);
        //   }
        //   console.log(count)
        // }

        setUserData({
          labels: label,
          datasets: [
            {
              label: "Patient Gained",
              data: dataSet1,
              backgroundColor: [
                // "rgba(75,192,192,1)",
                // "#ecf0f1",
                // "#50AF95",
                // "#f3ba2f",
                // "#2a71d0",
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
            },
          ],
        })
      }).catch(e => {
        console.log("error", e)
      })
    }

    fetchData();
  }, [])


  const [patientData, setPatientData] = useState({
    labels: [],
    datasets: [
      {
        label: "",
        data: [],
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: [],
        borderWidth: 2,
      },
    ],
  });


  useEffect(() => {
    const fetchData = async () => {
      const url = 'http://localhost:8080/api/departments/get_departments'
      const label = [];
      const dataSet1 = [];
      await fetch(url).then((data) => {
        console.log("Api data", data)
        const res = data.json();
        return res
      }).then((res) => {
        console.log("ressss", res)
        for (const val of res.departments) {
          label.push(val.name);
          dataSet1.push(val.patients)
          // labelSet.push(val.name)
        }
        setPatientData({
          labels: label,
          datasets: [
            {
              label: "Patient Gained",
              data: dataSet1,
              backgroundColor: [
                // "rgba(75,192,192,1)",
                // "#ecf0f1",
                // "#50AF95",
                // "#f3ba2f",
                // "#2a71d0",
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
            },
          ],
        })
      }).catch(e => {
        console.log("error", e)
      })
    }

    fetchData();
  }, [])





  const renderDashBoard = () => {
    return (
      <>
        {<SideBar />}
        <div className="page-wrapper">
          <div className="content">
            <div className="row">
              <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
                <div className="dash-widget">
                  <span className="dash-widget-bg1"><i className="fa fa-stethoscope" aria-hidden="true"></i></span>
                  <div className="dash-widget-info text-right">
                    <h3>{doctor.doctors.length}</h3>

                    <span className="widget-title1">Doctors <i className="fa fa-check" aria-hidden="true"></i></span>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
                <div className="dash-widget">
                  <span className="dash-widget-bg2"><i className="fa fa-user-o"></i></span>
                  <div className="dash-widget-info text-right">
                    <h3>{appointment.appointments.length}</h3>

                    <span className="widget-title2">Appointments <i className="fa fa-check" aria-hidden="true"></i></span>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
                <div className="dash-widget">
                  <span className="dash-widget-bg3"><i className="fa fa-user-md" aria-hidden="true"></i></span>
                  <div className="dash-widget-info text-right">
                    <h3>{patient.patients.length}</h3>
                    <span className="widget-title3">Attend <i className="fa fa-check" aria-hidden="true"></i></span>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
                <div className="dash-widget">
                  <span className="dash-widget-bg4"><i className="fa fa-heartbeat" aria-hidden="true"></i></span>
                  <div className="dash-widget-info text-right">
                    <h3>618</h3>
                    {/* 618 */}
                    <span className="widget-title4">Pending <i className="fa fa-check" aria-hidden="true"></i></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                <div className="card">
                  <div className="card-body">
                    <div className="chart-title">
                      <h4>Patient Total</h4>
                      <span className="float-right"><i className="fa fa-caret-up" aria-hidden="true"></i> 15% Higher than Last Month</span>
                    </div>
                    {/* <canvas id="linegraph"></canvas> */}
                    {/* <div className="barchart"> */}
                    {/* <Barchart />  */}
                    {/* </div> */}

                    <div style={{ width: 700 }}>
                      <LineChart chartData={userData} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                <div className="card">
                  <div className="card-body">
                    <div className="chart-title">
                      <h4>Patients In</h4>
                      <div className="float-right">
                        <ul className="chat-user-total">
                          <li><i className="fa fa-circle current-users" aria-hidden="true"></i>ICU</li>
                          <li><i className="fa fa-circle old-users" aria-hidden="true"></i> OPD</li>
                        </ul>
                      </div>
                    </div>
                    {/* <canvas id="bargraph"></canvas> */}
                    <div style={{ width: 700 }}>
                      <BarChart chartData={patientData} />
                    </div>
                    {/* <div style={{ width: 350 }}>
                      <PieChart chartData={userData} />
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-6 col-lg-8 col-xl-8">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title d-inline-block">Upcoming Appointments number </h4> <a href="/appointments" className="btn btn-primary float-right">View all</a>
                  </div>
                  <div className="card-body p-0">
                    <div className="table-responsive">
                      <table className="table mb-0">
                        <thead className="d-none">
                          <tr>
                            <th>Patient Name</th>
                            <th>Doctor Name</th>
                            <th>Timing</th>

                          </tr>
                        </thead>
                        <tbody>
                          {appointment.appointments.length > 0 ? appointment.appointments.map(appointment =>

                            <tr>
                              <td style={{ minWidth: "200px" }}>
                                <h5 className="time-title p-0">Patient Name</h5>
                                <p>{appointment.patientname}</p>
                              </td>
                              <td>
                                <h5 className="time-title p-0">Appointment With</h5>
                                <p>{appointment.doctorname}</p>
                              </td>
                              <td>
                                <h5 className="time-title p-0">Timing</h5>
                                <p>{appointment.time}</p>
                              </td>
                              <td className="text-right">
                                <a href="/appointments" className="btn btn-outline-primary take-btn">Take up</a>
                              </td>
                            </tr>

                          ) : null}

                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4 col-xl-4">
                <div className="card member-panel">
                  <div className="card-header bg-white">
                    <h4 className="card-title mb-0">Doctors</h4>
                  </div>
                  <div className="card-body">
                    <ul className="contact-list">
                      {/* <% for (var i = 0; i < doclist.length; i++){ %> */}
                      {doctor.doctors.length > 0 ? doctor.doctors.map(doctor =>

                        <li>
                          <div className="contact-cont">
                            <div className="float-left user-img m-r-10">
                              <a href="profile.html" title="John Doe"><img src={generatePubliucUrls(doctor.image)} alt="" className="w-40 rounded-circle" /><span className="status online"></span></a>
                              {/* /assets/images/upload_images/<%= doclist[i].image %> */}
                            </div>
                            <div className="contact-info">
                              <span className="contact-name text-ellipsis">{doctor.firstname + ' ' + doctor.lastname}</span>
                              {/* <%= doclist[i].first_name%> <%= doclist[i].last_name%> */}

                              <span className="contact-date">   MBBS, MD</span>
                            </div>
                          </div>
                        </li>
                      ) : null}
                      {/* <% } %> */}

                    </ul>
                  </div>
                  <div className="card-footer text-center bg-white">
                    <a href="/doctors" className="text-muted">View all Doctors</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-6 col-lg-8 col-xl-8">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title d-inline-block">New Patients </h4> <a href="/patients" className="btn btn-primary float-right">View all</a>
                  </div>
                  <div className="card-block">
                    <div className="table-responsive">
                      <table className="table mb-0 new-patient-table">
                        <tbody>
                          <tr>
                            <td>
                              <img width="28" height="28" className="rounded-circle" src="/assets/img/user.jpg" alt="" />
                              <h2>John Doe</h2>
                            </td>
                            <td>Johndoe21@gmail.com</td>
                            <td>+1-202-555-0125</td>
                            <td><button className="btn btn-primary btn-primary-one float-right">Fever</button></td>
                          </tr>
                          <tr>
                            <td>
                              <img width="28" height="28" className="rounded-circle" src="/assets/img/user.jpg" alt="" />
                              <h2>Richard</h2>
                            </td>
                            <td>Richard123@yahoo.com</td>
                            <td>202-555-0127</td>
                            <td><button className="btn btn-primary btn-primary-two float-right">Cancer</button></td>
                          </tr>
                          <tr>
                            <td>
                              <img width="28" height="28" className="rounded-circle" src="/assets/img/user.jpg" alt="" />
                              <h2>Villiam</h2>
                            </td>
                            <td>Richard123@yahoo.com</td>
                            <td>+1-202-555-0106</td>
                            <td><button className="btn btn-primary btn-primary-three float-right">Eye</button></td>
                          </tr>
                          <tr>
                            <td>
                              <img width="28" height="28" className="rounded-circle" src="/assets/img/user.jpg" alt="" />
                              <h2>Martin</h2>
                            </td>
                            <td>Richard123@yahoo.com</td>
                            <td>776-2323 89562015</td>
                            <td><button className="btn btn-primary btn-primary-four float-right">Fever</button></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4 col-xl-4">
                <div className="hospital-barchart">
                  <h4 className="card-title d-inline-block">Hospital Management</h4>
                </div>
                <div className="bar-chart">
                  <div className="legend">
                    <div className="item">
                      <h4>Level1</h4>
                    </div>

                    <div className="item">
                      <h4>Level2</h4>
                    </div>
                    <div className="item text-right">
                      <h4>Level3</h4>
                    </div>
                    <div className="item text-right">
                      <h4>Level4</h4>
                    </div>
                  </div>
                  <div className="chart clearfix">
                    <div className="item">
                      <div className="bar">
                        <span className="percent">16%</span>
                        <div className="item-progress" data-percent="16" style={{ width: "70.93px" }}>
                          <span className="title">OPD Patient</span>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="bar">
                        <span className="percent">71%</span>
                        <div className="item-progress" data-percent="71" style={{ width: "368.013px" }}>
                          <span className="title">New Patient</span>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="bar">
                        <span className="percent">82%</span>
                        <div className="item-progress" data-percent="82" style={{ width: "425.029px" }}>
                          <span className="title">Laboratory Test</span>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="bar">
                        <span className="percent">67%</span>
                        <div className="item-progress" data-percent="67" style={{ width: "347.28px" }}>
                          <span className="title">Treatment</span>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="bar">
                        <span className="percent">30%</span>
                        <div className="item-progress" data-percent="30" style={{ width: "155.4985px" }}>
                          <span className="title">Discharge</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </>
    )
  }


  return (
    <Layout>
      {/* <Barchart /> */}

      {renderDashBoard()}

    </Layout>
  )
}

export default Dashboard