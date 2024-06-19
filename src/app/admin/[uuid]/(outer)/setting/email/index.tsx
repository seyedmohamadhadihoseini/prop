import prisma from "@/services/singleton_prisma"

export default async function EmailSetting() {
    const config = await prisma.mailConfiguration.findFirst();
    
    return <div>
        <h3>Mail Configuration</h3>
        <div className="row mt-3">
            <div className="col-lg-12">
                <div className="card">
                    <div className="card-body">
                        <div className="card-title">configuration mail</div>
                        <hr />
                        <form>
                            <div className="form-group">
                                <label htmlFor="email-host-setting">Host</label>
                                <input type="url"  defaultValue={config?.host} className="form-control" id="email-host-setting" placeholder="Enter Mail Host" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email-port-setting">Port</label>
                                <input type="number" defaultValue={config?.port} className="form-control" id="email-host-setting" placeholder="Enter port" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email-user-setting">User</label>
                                <input type="text" defaultValue={config?.user} className="form-control" id="email-user-setting" placeholder="Enter user" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email-password-setting">Password</label>
                                <input type="password" defaultValue={config?.pass} className="form-control" id="email-password-setting" placeholder="Enter Password" />
                            </div>

                            <div className="form-group">    
                                <button type="submit" className="btn btn-light px-5"><i className="icon-lock"></i> Accept</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <hr />
    </div>
}