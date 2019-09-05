import { request } from "../lib/request";

export function getUsers() {
  request("GET", "/users/all");
}
