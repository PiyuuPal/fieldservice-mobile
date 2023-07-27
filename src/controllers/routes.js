export const routes = {
  authentication: {
    login: '/login',
    logout: '/users/logout',
    register: '/register',
    forgotPass: '/forgotpassword',
    hitgoogleLogin: '/googleLogin',
    hitgoogleSignUp: '/googleSignUp',
    invoicesStatus: '/invoice/status',
    invoiceListing: '/invoice',
    estimateStatus: '/estimate/status',
    estimateListing: '/estimate',
    clientEditDetail: '/customer/details',
    clientEstimateCountList: '/estimate/list',
    clientInvoiceCountList: '/invoice/list',
    clientJobCountList: '/jobs/list',
    clientUpdateAddress:'/customer/updateClientAddress',
    registeraddress: '/registerStepTwo',
    business_JobListing:'/jobs/listing'
  },
  jobs: {
    addNotes: "/job/addjobnotes",
    jobStatus: "/job/scheduleStatus",
    jobSchedule: "/job/updateJobSchedule",
    jobScheduleFilter: "/job/jobScheduleMenuFilter",
    calling: "/getProxyNumber",
    createJob: "/jobs/add",
    jobTabCount: "/jobs/tabCount",
  },
  client: {
    existingClientList: "/getProxyNumber",
    existingList: "/customer/list",
    countryList: "/country-list",
    stateList: "/state-list",
    createClient: "/customer/create",
    customerCreateClient: "/customer/create",
  },
  listjobs: {
    list: "/job/listing",
  },
  jobTypes: {
    list: "/job-type/listing",
    source: "/job/source",
  },
  adSource: {
    list: "/ad-group-list",
  },
  jobTagList: {
    jobTag: "/job/tag",
  },
  createJob: {
    add_newJob: "/admin-job/add",
  },
  jobDetailsEdit: {
    editjob: '/job/editJob'
  },
  jobTeamList: {
    teamList: '/job/jobTeam'
  },
  jobDetailData: {
    jobdetail: '/job/details'
  },
  jobDeleteAttachNotes:{
    notesAttach:'/job/deleteData'
  },
  home: {
    upcomingList: "/upcomingWork",
    dashboardMenu: "/dashboard/menu",
    getColor: "/getallcolor",
    today: "/dashboard",
    sales: "/dashboard/sales",
    leads: "/dashboard/leads",
    jobs: "/dashboard/jobs",
    estimates: "/dashboard/estimates",
    invoices: "/dashboard/invoices",
    toptechnicians: "/dashboard/topPerformingTech",
    globalSearch:'/globalSearch/list',
    imageUploads:'/job/fileUpload',
    propertyListing:'/jobs/clientProperty'
  },
  business: {
    list: "/businnesList",
    number: "/peopleWork",
    details: "/registerStepThree",
  },
  schedule: {
    schedule: '/schedule',
  },
  
  jobAddAttachments:{
    addAttachments:'/job/editAttachment'
  },
  invoice:{
    create:'/invoice/create',
    details:'/invoice/details',
    items:'/invoice/items',
    editnotes:'/invoice/notesUpdate',
    addattachment:'/invoice/attachmentUpload',
    invoiceUpdateItem:'/invoice/updateItem',
    invoiceDeleteItem:'invoice/deleteItem',
    invoicesItemsList:'invoice/itemsListing',
    invoiceItemDetail:'/invoice/itemDetail',
    deleteInvoiceAttach:'/invoice/deleteinvoiceAttachment',
    deleteInvoiceSigns:'/invoice/deleteinvoiceSign',
    
  },
  estimate:{
    details:'/quotes/details',
    estimateDeleteItem:'/quotes/deleteItem',
    estimateDelSigns:'/quotes/deleteestimateSign',
    estimateDelAttach:'/quotes/deleteestimateAttachment'
  },
  estimatePayment:{
    estimatePaymentDelete:'/quotes/deletePayment',
  },
  payment:{
    payment:'/payment/type',
    sendPaymentMode:'/invoice/payment',
    invoicePaymentDelete:'invoice/paymentDelete',
  },
  drawer:{
    timesheet:'/clocking-details',
    checkOutIn:'/startClockInClockOut'
  },
  chatting:{
    chattingList:'/message/list',
    memberList:'message/member',
    sendMessage:'message/send',

  },
  timeLine:{
   timelineAll:'/job/timeline'
  }
};
