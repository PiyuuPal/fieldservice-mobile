import { routes } from "@/controllers/routes";
import { strings } from "@/localization";
import { baseURL, headers } from "@/networking/config";

export class UserController {
  constructor(networkService) {
    this.networkService = networkService;
    this.networkService.setBaseUrlForApis(baseURL);
  }

  login(reqObj) {
    return this.networkService.request({
      method: "POST",
      url: routes.authentication.login,
      data: reqObj,
    });
  }

  register(reqObj) {
    return this.networkService.request({
      method: "POST",
      url: routes.authentication.register,
      data: reqObj,
    });
  }
  schedule(reqObj) {
    //
    return this.networkService.request({
      method: "POST",
      url: routes.schedule.schedule,
      data: reqObj,
    });
  }
  jobScheduleFilterList() {
    return this.networkService.request({
      method: "GET",
      url: routes.jobs.jobScheduleFilter,
      data: null,
    });
  }
  jobScheduleFilteritemList(path) {
    return this.networkService.request({
      method: "GET",
      url: path,
      data: null,
    });
  }
  businessDetails(reqObj) {
    //
    return this.networkService.request({
      method: "POST",
      url: routes.business.details,
      data: reqObj,
    });
  }
  jobSchedule(reqObj) {
    console.log("jobschedule==>>", reqObj);
    return this.networkService.request({
      method: "PUT",
      url: routes.jobs.jobSchedule,
      data: reqObj,
    });
  }

  forgotPass(reqObj) {
    console.log("reqobje==>>", reqObj);
    return this.networkService.request({
      method: "POST",
      url: routes.jobs.jobSchedule,
      data: reqObj,
    });
  }

  forgotPass(reqObj) {
    return this.networkService.request({
      method: "POST",
      url: routes.authentication.forgotPass,
      data: reqObj,
    });
  }

  invoicesStatus() {
    return this.networkService.request({
      method: "GET",
      url: routes.authentication.invoicesStatus,
      data: null,
    });
  }

  estimateStatus() {
    return this.networkService.request({
      method: "GET",
      url: routes.authentication.estimateStatus,
      data: null,
    });
  }

  invoiceListdata(reqObj) {
    return this.networkService.request({
      method: "GET",
      url: `${routes.authentication.invoiceListing}/${reqObj?.name}`,
      data: reqObj,
    });
  }

  estimateListdata(reqObj) {
    return this.networkService.request({
      method: "GET",
      url: `${routes.authentication.estimateListing}/${reqObj?.name}`,
      data: reqObj,
    });
  }

  clientEditDetail(reqObj) {
    console.log("clientEditDetail==>>", reqObj);
    return this.networkService.request({
      method: "GET",
      url: `${routes.authentication.clientEditDetail}/${reqObj?.id}`,
      data: reqObj,
    });
  }

  //priya

  clientEstimateCountList(reqObj) {
    // console.log("clientEstimateCountList==>>",reqObj)
    return this.networkService.request({
      method: "GET",
      url: `${routes.authentication.clientEstimateCountList}/${reqObj?.id}`,
      data: reqObj,
    });
  }

  clientInvoiceCountList(reqObj) {
    // console.log("clientInvoiceCountList==>>",reqObj)
    return this.networkService.request({
      method: "GET",
      url: `${routes.authentication.clientInvoiceCountList}/${reqObj?.id}`,
      data: reqObj,
    });
  }

  clientJobCountList(reqObj) {
    console.log("clientJobCountList==>>", reqObj);
    return this.networkService.request({
      method: "GET",
      url: `${routes.authentication.clientJobCountList}/${reqObj?.id}`,
      data: reqObj,
    });
  }

  clientUpdateAddress(reqObj) {
    console.log("clientUpdateAddress==>>", reqObj);
    return this.networkService.request({
      method: "PUT",
      url: `${routes.authentication.clientJobCountList}/${reqObj?.id}`,
      data: reqObj,
    });
  }

  //End

  hitgoogleLogin(reqObj) {
    console.log("hitgoogleLogin==>>", reqObj);
    return this.networkService.request({
      method: "POST",
      url: routes.authentication.hitgoogleLogin,
      data: reqObj,
    });
  }

  hitgoogleSignUp(reqObj) {
    // console.log("hitgoogleSignUp==>>",reqObj)
    return this.networkService.request({
      method: "POST",
      url: routes.authentication.hitgoogleSignUp,
      data: reqObj,
    });
  }

  jobDetails(reqObj) {
    return this.networkService.request({
      method: "GET",
      url: `${routes.jobDetailData.jobdetail}/${reqObj?.jobId}`,
      // url:`http://54.156.147.156/api/job/details/${'420'}`,
      data: reqObj,
    });
  }
  addNotes(reqObj) {
    console.log("adddnotes-->", reqObj);
    return this.networkService.request({
      method: "POST",
      url: routes.jobs.addNotes,
      data: reqObj,
    });
  }
  jobStatus() {
    return this.networkService.request({
      method: "GET",
      url: routes.jobs.jobStatus,
      data: null,
    });
  }

  existingList(reqObj) {
    return this.networkService.request({
      method: "GET",
      url: `${routes.client.existingList}?page=${reqObj?.page}/?limit=${reqObj?.limit}`,
      data: reqObj,
    });
  }
  business_JobListing(reqObj) {
    // console.log('======>JobList',reqObj)
    return this.networkService.request({
      method: "GET",
      url: routes?.authentication?.business_JobListing,
      data: reqObj,
    });
  }

  jobTypeList() {
    return this.networkService.request({
      method: "GET",
      url: routes.jobTypes.list,
      data: null,
    });
  }
  jobSourceListController() {
    return this.networkService.request({
      method: "GET",
      url: routes.jobTypes.source,
      data: null,
    });
  }

  businessList() {
    return this.networkService.request({
      method: "GET",
      url: routes.business.list,
      data: null,
    });
  }
  createaClient(reqObj) {
    return this.networkService.request({
      method: "POST",
      url: routes.client.customerCreateClient,
      data: reqObj,
    });
  }
  numberList() {
    return this.networkService.request({
      method: "GET",
      url: routes.business.number,
      data: null,
    });
  }
  adSourceList() {
    return this.networkService.request({
      method: "GET",
      url: routes.adSource.list,
    });
  }
  countryList() {
    return this.networkService.request({
      method: "GET",
      url: routes.client.countryList,
      data: null,
    });
  }
  stateList() {
    return this.networkService.request({
      method: "GET",
      url: routes.client.stateList,
      data: null,
    });
  }
  logout({ demoMode } = {}) {
    if (demoMode) {
      return new Promise((resolve) => {
        setTimeout(resolve, 250);
      });
    }

    return this.networkService.request({
      method: "DELETE",
      url: routes.authentication.logout,
    });
  }
  list(reqObj) {
    return this.networkService.request({
      method: "POST",
      url: routes.listjobs.list,
      data: reqObj,
    });
  }
  createClient(reqObj) {
    return this.networkService.request({
      method: "POST",
      url: routes.client.createClient,
      data: reqObj,
    });
  }

  add_newJob(reqObj, data) {
    console.log("reqobjCtrller==>>", reqObj);
    return this.networkService.request({
      method: "POST",
      url: routes.createJob.add_newJob,
      data: reqObj,
    });
  }
  callingController(reqObj, data) {
    console.log("reqobjCtrller==>>", reqObj);
    return this.networkService.request({
      method: "POST",
      url: routes.jobs.calling,
      data: reqObj,
    });
  }

  createNewInvoice(reqObj) {
    return this.networkService.request({
      method: "POST",
      url: routes.invoice.create,
      data: reqObj,
    });
  }
  Invoicedetails(reqObj) {
    return this.networkService.request({
      method: "GET",
      url: routes.invoice.details + "/" + reqObj,
    });
  }

  Estimatedetails(reqObj) {
    return this.networkService.request({
      method: "GET",
      url: routes.estimate.details + "/" + reqObj,
    });
  }
  GetMessageMember(reqObj) {
    return this.networkService.request({
      method: "GET",
      url: routes.chatting.memberList,
    });
  }

  ChattingsListscontroller(reqObj) {
    return this.networkService.request({
      method: "POST",
      url: routes.chatting.chattingList,
    });
  }
  SendMessagecontroller(reqObj) {
    return this.networkService.request({
      method: "POST",
      url: routes.chatting.sendMessage,
    });
  }

  registeraddress(reqObj) {
    console.log("req is", reqObj);
    return this.networkService.request({
      method: "POST",
      url: routes.authentication.registeraddress,
      data: reqObj,
    });
  }
  invoicepayment(reqObj) {
    console.log("paymentController", reqObj);
    return this.networkService.request({
      method: "GET",
      url: routes.payment.payment,
    });
  }
  sendPaymentMode(reqObj) {
    console.log("req is", reqObj);
    return this.networkService.request({
      method: "POST",
      url: routes.payment.sendPaymentMode,
      data: reqObj,
    });
  }

  invoicePaymentDelete(reqObj) {
    console.log("req is invoicepaymentdelete", reqObj);
    return this.networkService.request({
      method: "POST",
      url: `${routes.payment.invoicePaymentDelete}/${reqObj?.invoice_id}/${reqObj?.payment_id}`,
      data: reqObj,
    });
  }

  invoiceUpdateItem(reqObj) {
    console.log("req is", reqObj);
    return this.networkService.request({
      method: "POST",
      url: routes.invoice.invoiceUpdateItem,
      data: reqObj,
    });
  }

  invoiceattachment(reqObj) {
    console.log(reqObj);
    return this.networkService.request({
      method: "POST",
      url: routes.invoice.addattachment,
      data: reqObj,
    });
  }
  add_newJob(reqObj, data) {
    console.log("reqobjCtrller==>>", reqObj)
    return this.networkService.request({
      method: 'POST',
      url: routes.createJob.add_newJob,
      data: reqObj
    });
  }
  callingController(reqObj, data) {
    console.log("reqobjCtrller==>>", reqObj)
    return this.networkService.request({
      method: 'POST',
      url: routes.jobs.calling,
      data: reqObj
    });
  }

  createNewInvoice(reqObj) {
    return this.networkService.request({
      method: 'POST',
      url: routes.invoice.create,
      data: reqObj,
    });
  }
  Invoicedetails(reqObj) {
    return this.networkService.request({
      method: 'GET',
      url: routes.invoice.details + '/' + reqObj,

    });
  }

  Estimatedetails(reqObj) {
    return this.networkService.request({
      method: 'GET',
      url: routes.estimate.details + '/' + reqObj,

    });
  }
  ChattingsListscontroller(reqObj) {
    return this.networkService.request({
      method: 'POST',
      url: routes.chatting.chattingList,

    });
  }

  registeraddress(reqObj) {
    console.log("req is", reqObj);
    return this.networkService.request({
      method: 'POST',
      url: routes.authentication.registeraddress,
      data: reqObj,
    });
  }
  invoicepayment(reqObj) {
    console.log('paymentController', reqObj)
    return this.networkService.request({
      method: 'GET',
      url: routes.payment.payment,

    });
  }

  invoicesItemsList(reqObj) {
    // console.log('invoicesItemsList---',reqObj)
    return this.networkService.request({
      method: 'GET',
      url: routes.invoice.invoicesItemsList,

    });
  }

  // sendPaymentMode(reqObj) {
  //   console.log("req is", reqObj);
  //   return this.networkService.request({
  //     method: 'POST',
  //     url: routes.payment.sendPaymentMode,
  //     data: reqObj,
  //   });
  // }

  // invoicePaymentDelete(reqObj) {
  //   return this.networkService.request({
  //     method: 'POST',
  //     url: `${routes.payment.invoicePaymentDelete}/${reqObj?.invoice_id}/${reqObj?.payment_id}`,
  //     data: reqObj,
  //   });
  // }


  invoiceDeleteItem(reqObj) {
    return this.networkService.request({
      method: 'DELETE',
      url: `${routes.invoice.invoiceDeleteItem}/${reqObj?.id}`,
      data: reqObj,
    });
  }

  //estimate---
  estimateDeleteItem(reqObj) {
    return this.networkService.request({
      method: 'DELETE',
      url: `${routes.estimate.estimateDeleteItem}/${reqObj?.id}`,
      data: reqObj,
    });
  }

  estimatePaymentDelete(reqObj) {
      return this.networkService.request({
        method: 'DELETE',
        url: `${routes?.estimatePayment?.estimatePaymentDelete}/${reqObj?.estimate_id}/${reqObj?.payment_id}`,
        data: reqObj,
      });
    }

    estimateDelSigns(reqObj) {
      console.log('datadelete====', reqObj)
      return this.networkService.request({
        method: 'DELETE',
        url: `${routes.estimate.estimateDelSigns}/${reqObj?.estimate_id}/${reqObj?.id}`,
        data: reqObj,
      });
    }

    estimateDelAttach(reqObj) {
      // console.log('datadelete====',reqObj)
      return this.networkService.request({
        method: 'DELETE',
        url: `${routes.estimate.estimateDelAttach}/${reqObj?.estimate_id}/${reqObj?.id}`,
        data: reqObj,
      });
    }

  // ....end

  deleteInvoiceAttach(reqObj) {
    // console.log('datadelete====',reqObj)
    return this.networkService.request({
      method: 'DELETE',
      url: `${routes.invoice.deleteInvoiceAttach}/${reqObj?.invoice_id}/${reqObj?.id}`,
      data: reqObj,
    });
  }


  deleteInvoiceSigns(reqObj) {
    console.log('datadelete====', reqObj)
    return this.networkService.request({
      method: 'DELETE',
      url: `${routes.invoice.deleteInvoiceSigns}/${reqObj?.invoice_id}/${reqObj?.id}`,
      data: reqObj,
    });
  }

  invoiceUpdateItem(reqObj) {
    console.log("req is", reqObj);
    return this.networkService.request({
      method: 'POST',
      url: routes.invoice.invoiceUpdateItem,
      data: reqObj,
    });
  }

  invoicenotes(reqObj) {
    // console.log('reqObj--',reqObj)
    return this.networkService.request({
      method: "POST",
      url: routes.invoice.editnotes,
      data: reqObj,
    });
  }

  invoiceItemDetail(reqObj) {
    console.log('reqObj--', reqObj)
    return this.networkService.request({
      method: "POST",
      url: routes.invoice.invoiceItemDetail,
      data: reqObj,
    });
  }

  invoiceattachment(reqObj) {
    console.log(reqObj);
    return this.networkService.request({
      method: 'POST',
      url: routes.invoice.addattachment,
      data: reqObj
    });
  }
}
