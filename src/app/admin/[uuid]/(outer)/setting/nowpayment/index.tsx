import prisma from "@/services/singleton_prisma"
import NowPaymentConfigurationSave from "./server";

export default async function NowPaymentConfiguration() {
    const config = await prisma.nowPaymentConfig.findFirst();
    
    return <div>
        <h3>NowPayment Configuration</h3>
        <div className="row mt-3">
            <div className="col-lg-12">
                <div className="card">
                    <div className="card-body">
                        <div className="card-title">NowPayment configuration</div>
                        <hr />
                        <form action={NowPaymentConfigurationSave}>
                            <div className="form-group">
                                <label htmlFor="nowpayment-apikey-setting">apiKey</label>
                                <input type="text" name="now-api-key" defaultValue={config?.apiKey} className="form-control" id="nowpayment-apikey-setting" placeholder="Enter Api Key" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="nowpayment-ipnKey-setting">ipnKey</label>
                                <input type="text" name="now-ipn-key" defaultValue={config?.ipnKey} className="form-control" id="nowpayment-ipnKey-setting" placeholder="Enter ipnKey" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="nowpayment-publickey-setting">publicKey</label>
                                <input type="text" name="now-public-key" defaultValue={config?.publicKey} className="form-control" id="nowpayment-publickey-setting" placeholder="Enter PublicKey" />
                            </div>


                            <div className="form-group">
                                <button type="submit" className="btn btn-light px-5"><i className="icon-lock"></i> Accept</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
}