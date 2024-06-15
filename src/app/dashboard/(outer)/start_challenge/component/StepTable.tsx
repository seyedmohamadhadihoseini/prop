

export default function StepTable() {



  return <div className="col-lg-12" style={{marginLeft:"-1%"}}>
    <div className="card" >
      <div className="">
        {/* <h5 className="card-title"></h5> */}
        <div className="table-responsive" >
          <table className="table table-level">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">
                  <h5>First Level </h5>
                </th>
                <th scope="col">
                  <h5>Second Level</h5>
                </th>
                <th scope="col"><h5>Real</h5></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row"><h5>period of time</h5></th>
                <td>unlimited</td>
                <td>unlimited</td>
                <td>unlimited</td>
              </tr>
              <tr>
                <th scope="row"><h5>Daily loss limit</h5></th>
                <td>5%</td>
                <td>5%</td>
                <td>5%</td>
              </tr>
              <tr>
                <th scope="row"><h5>Total loss limit</h5></th>
                <td>12%</td>
                <td>12%</td>
                <td>12%</td>
              </tr>
              <tr>
                <th scope="row"><h5>profit target</h5></th>
                <td>8%</td>
                <td>4%</td>
                <td>-</td>
              </tr>
              <tr>
                <th scope="row"><h5>At least trade days</h5></th>
                <td>5 day</td>
                <td>5 day</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
}