// Auto-generated by the postman-to-k6 converter

import "./libs/shim/core.js";
import "./libs/shim/expect.js";
import "./libs/shim/urijs.js";
import { check } from "k6";
import http from 'k6/http';

export const options = {
  maxRedirects: 4,
  duration: '10s',
  vus: 100,
};


export default function () {
  const url = 'http://ac8f51c5-fb41-4bde-92cb-eda8f4332ac4.mock.pstmn.io/rest/ex_banking/v1/users/create';
  const payload = JSON.stringify({
    first_name: "Connie",
    last_name: "Wheeler",
    date_of_birth: "1966-10-13",
    nationality: "Estonian",
    username: "Connie1966",
    password: "!Q@W#E$Ra1s2",
    national_identity_number: "5576599278919190v",
    email: "conniefweeler@myemail.com"
});

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const res = http.post(url, payload, params);
}
