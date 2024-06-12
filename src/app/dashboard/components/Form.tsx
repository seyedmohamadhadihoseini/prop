
export default function FormTemplate(){
    return <div className="row mt-3">
    <div className="col-lg-6">
       <div className="card">
         <div className="card-body">
         <div className="card-title">Vertical Form</div>
         <hr/>
          <form>
         <div className="form-group">
          <label htmlFor="input-1">Name</label>
          <input type="text" className="form-control" id="input-1" placeholder="Enter Your Name"/>
         </div>
         <div className="form-group">
          <label htmlFor="input-2">Email</label>
          <input type="text" className="form-control" id="input-2" placeholder="Enter Your Email Address"/>
         </div>
         <div className="form-group">
          <label htmlFor="input-3">Mobile</label>
          <input type="text" className="form-control" id="input-3" placeholder="Enter Your Mobile Number"/>
         </div>
         <div className="form-group">
          <label htmlFor="input-4">Password</label>
          <input type="text" className="form-control" id="input-4" placeholder="Enter Password"/>
         </div>
         <div className="form-group">
          <label htmlFor="input-5">Confirm Password</label>
          <input type="text" className="form-control" id="input-5" placeholder="Confirm Password"/>
         </div>
         <div className="form-group py-2">
           <div className="icheck-material-white">
          <input type="checkbox" id="user-checkbox1" checked={true}/>
          <label htmlFor="user-checkbox1">I Agree Terms & Conditions</label>
          </div>
         </div>
         <div className="form-group">
          <button type="submit" className="btn btn-light px-5"><i className="icon-lock"></i> Register</button>
        </div>
        </form>
       </div>
       </div>
    </div>

    <div className="col-lg-6">
      <div className="card">
         <div className="card-body">
         <div className="card-title">Round Vertical Form</div>
         <hr/>
          <form>
         <div className="form-group">
          <label htmlFor="input-6">Name</label>
          <input type="text" className="form-control form-control-rounded" id="input-6" placeholder="Enter Your Name"/>
         </div>
         <div className="form-group">
          <label htmlFor="input-7">Email</label>
          <input type="text" className="form-control form-control-rounded" id="input-7" placeholder="Enter Your Email Address"/>
         </div>
         <div className="form-group">
          <label htmlFor="input-8">Mobile</label>
          <input type="text" className="form-control form-control-rounded" id="input-8" placeholder="Enter Your Mobile Number"/>
         </div>
         <div className="form-group">
          <label htmlFor="input-9">Password</label>
          <input type="text" className="form-control form-control-rounded" id="input-9" placeholder="Enter Password"/>
         </div>
         <div className="form-group">
          <label htmlFor="input-10">Confirm Password</label>
          <input type="text" className="form-control form-control-rounded" id="input-10" placeholder="Confirm Password"/>
         </div>
         <div className="form-group py-2">
           <div className="icheck-material-white">
          <input type="checkbox" id="user-checkbox2" checked={true}/>
          <label htmlFor="user-checkbox2">I Agree Terms & Conditions</label>
          </div>
         </div>
         <div className="form-group">
          <button type="submit" className="btn btn-light btn-round px-5"><i className="icon-lock"></i> Register</button>
        </div>
        </form>
       </div>
       </div>
    </div>
  </div>
}