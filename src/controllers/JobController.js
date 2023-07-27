import { routes } from "@/controllers/routes";
import { strings } from "@/localization";
import { baseURL, headers } from "@/networking/config";

export class JobController {
  constructor(networkService) {
    this.networkService = networkService;
    this.networkService.setBaseUrlForApis(baseURL);
  }
  jobTagList() {
    return this.networkService.request({
      method: "GET",
      url: routes.jobTagList.jobTag,
      data: null,
    });
  }
  jobTeamList() {
    console.log("jobTeamListing==>>");
    return this.networkService.request({
      method: "GET",
      url: routes.jobTeamList.teamList,
      data: null,
    });
  }
  CreateJobController(reqObj) {
    return this.networkService.request({
      method: "POST",
      url: routes.jobs.createJob,
      data: reqObj,
    });
  }
  JobTabCountsController(reqObj) {
    return this.networkService.request({
      method: "POST",
      url: routes.jobs.jobTabCount,
      data: reqObj,
    });
  }
  editJobStatus(reqObj) {
    console.log("editJobStatus==>>");
    return this.networkService.request({
      method: "PUT",
      url: routes.jobDetailsEdit.editjob,
      data: reqObj,
    });
  }
  deleteJobAttachNotes(reqObj) {
    console.log("deleteJobStatus==>>");
    return this.networkService.request({
      method: "DELETE",
      url: routes.jobDeleteAttachNotes.notesAttach,
      data: reqObj,
    });
  }
  jobAddAttachments(reqObj) {
    console.log("jobattachments==>>", reqObj);
    return this.networkService.request({
      method: "POST",
      // url:routes.jobAddAttachments.addAttachments,
      url: "https://fca6-2401-4900-1c3c-e2f2-6595-3a43-1e80-c451.ngrok-free.app/fieldservice/api/quotes/upload",
      data: reqObj,
      // headers: { "Content-Type": "multipart/form-data" },
    });
  }
  globalSearch(reqObj) {
    console.log("globalSearch==>>");
    return this.networkService.request({
      method: "POST",
      url: routes.home.globalSearch,
      data: reqObj,
    });
  }
  uploadImagesController(reqObj) {
    return this.networkService.request({
      method: "POST",
      url: routes.home.imageUploads,
      data: reqObj,
    });
  }

  propertyListingController(reqObj) {
    return this.networkService.request({
      method: "POST",
      url: routes.home.propertyListing,
      data: reqObj,
    });
  }
  timeLineAllList(reqObj) {
    return this.networkService.request({
      method: "POST",
      url: routes.timeLine.timelineAll,
      data: reqObj,
    });
  }
}
