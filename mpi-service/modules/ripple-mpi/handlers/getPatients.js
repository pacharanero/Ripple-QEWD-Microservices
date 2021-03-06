/*

 ----------------------------------------------------------------------------
 | ripple-mpi: Ripple Master Patient Index / PAS MicroService               |
 |                                                                          |
 | Copyright (c) 2017-18 Ripple Foundation Community Interest Company       |
 | All rights reserved.                                                     |
 |                                                                          |
 | http://rippleosi.org                                                     |
 | Email: code.custodian@rippleosi.org                                      |
 |                                                                          |
 | Author: Rob Tweed, M/Gateway Developments Ltd                            |
 |                                                                          |
 | Licensed under the Apache License, Version 2.0 (the "License");          |
 | you may not use this file except in compliance with the License.         |
 | You may obtain a copy of the License at                                  |
 |                                                                          |
 |     http://www.apache.org/licenses/LICENSE-2.0                           |
 |                                                                          |
 | Unless required by applicable law or agreed to in writing, software      |
 | distributed under the License is distributed on an "AS IS" BASIS,        |
 | WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. |
 | See the License for the specific language governing permissions and      |
 |  limitations under the License.                                          |
 ----------------------------------------------------------------------------

  13 March 2018

*/

module.exports = function(args, finished) {
  var role = args.session.role;
  if (role === 'phrUser') return finished({
    patients: []
  });

  // in production system we'd fetch the patients relevant
  //  to the user - whose details are in args.session (ie in the JWT)

  var patientDoc = this.db.use('RipplePHRPatients', 'byId');
  var patients = {};

  args.req.qewdSession.data.$('patientList').forEachChild(function(id) {
    patients[id] = patientDoc.$(id).getDocument();
  });

  finished(patients);

  //finished(patientDoc.getDocument());
};
