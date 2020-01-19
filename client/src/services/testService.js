import http from "./httpService";
import { apiUrl } from "../config.json";

export async function getTestRecords(userId) {
    const apiEndpoint = apiUrl + "/testRecords/" + userId;
    const userTestRecords = await http.post(apiEndpoint);
    return userTestRecords;
}

export async function postTestRecord(testRecord, userID) {
    const apiEndpoint = apiUrl + "/addTestRecord/" + userID;
    const newTestRecord = await http.post(apiEndpoint,testRecord);
    return newTestRecord;
}

export async function getCurrentTests() {
    const apiEndpoint = apiUrl + "/currentTests";
    const userTestRecords = await http.post(apiEndpoint);
    return userTestRecords;
}

export default {
    getCurrentTests,
    getTestRecords,
    postTestRecord,
}