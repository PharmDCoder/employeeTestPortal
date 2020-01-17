import http from "./httpService";
import { apiUrl } from "../config.json";

export async function getTestRecords(userId) {
    const apiEndpoint = apiUrl + "/testRecords/" + userId;
    const userTestRecords = await http.post(apiEndpoint);
    return userTestRecords;
}

export async function postTestRecord(testRecord) {
    const apiEndpoint = apiUrl + "/addTestRecord";
    const newTestRecord = await http.post(apiEndpoint,testRecord);
    return newTestRecord;
}

export default {
    getTestRecords
}